// cypress/e2e/feed.cy.ts
describe("Mini Twitter E2E", () => { 
  const randomEmail = () => `user_${Date.now()}@exemplo.com`;

  it("Usuário consegue criar conta, logar e criar publicação", () => {
    const user = {
      name: "Jean",
      email: randomEmail(),
      password: "123456"
    };

    // Registrar via API
    cy.request({
      method: "POST",
      url: "http://localhost:3000/auth/register",
      body: user,
      failOnStatusCode: true
    }).then(() => {
      // Login via API
      cy.request({
        method: "POST",
        url: "http://localhost:3000/auth/login",
        body: {
          email: user.email,
          password: user.password
        }
      }).then((res) => {
        const token = res.body.token;
        const userData = res.body.user;

        // Salva no localStorage para usar no front-end
        window.localStorage.setItem("token", token);
        window.localStorage.setItem("user", JSON.stringify(userData));

        // Criar um post via API para testes backend
        cy.request({
          method: "POST",
          url: "http://localhost:3000/posts",
          body: { title: "Post API", content: "Conteúdo do post" },
          headers: { Authorization: `Bearer ${token}` },
        }).then((postRes) => {
          const postId = postRes.body.id;

          // Teste: Curtir post
          cy.request({
            method: "POST",
            url: `http://localhost:3000/posts/${postId}/like`,
            headers: { Authorization: `Bearer ${token}` },
          }).its("status").should("eq", 200);

          // Teste: Editar post
          cy.request({
            method: "PUT",
            url: `http://localhost:3000/posts/${postId}`,
            body: { id: postId, title: "Post API Editado", content: "Conteúdo editado" },
            headers: { Authorization: `Bearer ${token}` },
          }).its("status").should("eq", 200);

          // Teste: Deletar post
          cy.request({
            method: "DELETE",
            url: `http://localhost:3000/posts/${postId}`,
            headers: { Authorization: `Bearer ${token}` },
          }).its("status").should("eq", 200);
        });
      });
    });

    // Visita o front-end (Feed)
    cy.visit("http://localhost:3001/");

    // Criar publicação pelo front-end
    cy.get('input[placeholder="Título"]').type("Teste E2E");
    cy.get('textarea[placeholder="E aí, o que está rolando?"]').type("Este é um post de teste");
    cy.get('button').contains("Postar").click();

    // Verifica se o post apareceu no feed
    cy.contains("Teste E2E").should("exist");
    cy.contains("Este é um post de teste").should("exist");
  });
});