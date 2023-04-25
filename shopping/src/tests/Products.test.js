import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/user-event";
import Products from '../components/Products.js';
import { MemoryRouter } from "react-router-dom";

describe("Buy component", () => {
    const itens = [{
        id: "1",
        nome: "Fone de ouvido",
        preco: 100,
        promo: 50,
        src: "nome.jpg",
        detalhes: "detalhes",
        quantidade: 1,
    }];
    it("Verifica os elementos da tela", () => {
      render(<MemoryRouter><Products itens={ itens } /></MemoryRouter>);
      expect(screen.getByText("Fone de ouvido")).toBeInTheDocument();
      expect(screen.getByText("De: R$100,00")).toBeInTheDocument();
      expect(screen.getByText("Por: R$50,00")).toBeInTheDocument();
      expect(screen.getByTestId("productsItem1")).toBeInTheDocument();
    });
});