import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/user-event";
import { fireEvent } from "@testing-library/react";
import Item from '../components/Item.js';
import { MemoryRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

describe("Item component", () => {
    const itens = [{
        id: "1",
        nome: "Fone de ouvido",
        preco: 100,
        promo: 0,
        src: "nome.jpg",
        detalhes: "detalhes",
        quantidade: 1,
    }];

    const setCarrinho = jest.fn();
    it("Verifica os elementos que aparecem na tela", () => {
        render(<MemoryRouter initialEntries={["/products/1"]}><Routes><Route path='products/:id' element={<Item itens={itens} setCarrinho={setCarrinho} />} /></Routes></MemoryRouter>);
        expect(screen.getByText("Fone de ouvido")).toBeInTheDocument();
        expect(screen.getByText("detalhes")).toBeInTheDocument();
        expect(screen.getByText("R$ 100,00")).toBeInTheDocument();
        expect(screen.getByTestId("itemCarrinho")).toBeInTheDocument();
    });
    it("Verifica o botão", () => {  
        render(<MemoryRouter initialEntries={["/products/1"]}><Routes><Route path='products/:id' element={<Item itens={itens} setCarrinho={setCarrinho} />} /></Routes></MemoryRouter>);
        const btnCompre = screen.getByText("Compre agora");
        fireEvent.click(btnCompre);
        expect(setCarrinho).toHaveBeenCalledTimes(1);
    })
});