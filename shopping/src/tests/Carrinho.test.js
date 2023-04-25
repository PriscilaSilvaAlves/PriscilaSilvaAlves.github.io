import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/user-event";
import { fireEvent } from "@testing-library/react";
import Carrinho from '../components/Carrinho.js';
import { MemoryRouter } from "react-router-dom";

describe("Carrinho component", () => {
    const itensCarrinho = [{
        id: "1",
        nome: "Fone de ouvido",
        preco: 100,
        promo: 0,
        src: "nome.jpg",
        detalhes: "detalhes",
        quantidade: 1,
    }];
    const incrementeCarrinhoMock = jest.fn();
    const decrementeCarrinhoMock = jest.fn();
    it("Verifica os elementos que aparecem na tela", () => {
      render(<MemoryRouter><Carrinho ItensCarrinho={ itensCarrinho } incrementeCarrinho={ incrementeCarrinhoMock } decrementeCarrinho={ decrementeCarrinhoMock }/></MemoryRouter>);
      expect(screen.getByRole("heading", {name: /Total/i}).textContent).toMatch("Total: R$100,00");
      expect(screen.getByRole("button", {name: "+"}).textContent).toMatch("+");
      expect(screen.getByText("-")).toBeInTheDocument();
      expect(screen.getByText("Fone de ouvido")).toBeInTheDocument();
      expect(screen.getByText("detalhes")).toBeInTheDocument();
    });
    it("Verifica os botões", () => {
        render(<MemoryRouter><Carrinho ItensCarrinho={ itensCarrinho } incrementeCarrinho={ incrementeCarrinhoMock } decrementeCarrinho={ decrementeCarrinhoMock }/></MemoryRouter>);
        const btnIncrement = screen.getByText("+");
        const btnDecrement = screen.getByText("-");
        fireEvent.click(btnIncrement);
        fireEvent.click(btnDecrement);
        expect(incrementeCarrinhoMock).toHaveBeenCalledTimes(1);
        expect(decrementeCarrinhoMock).toHaveBeenCalledTimes(1);
    })
});