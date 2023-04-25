import Nav from "../components/Nav";
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

describe("Componente Nav", () => {
    it("Verifica os links", () => {
        render(<MemoryRouter><Nav /></MemoryRouter>);

        expect(screen.getByTestId("navInicio")).toBeInTheDocument();
        expect(screen.getByTestId("navProdutos")).toBeInTheDocument();
        expect(screen.getByTestId("navCarrinho")).toBeInTheDocument();
    });
});
