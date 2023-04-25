import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/user-event";
import Home from '../components/Home.js';
import { MemoryRouter } from "react-router-dom";

describe("Contact component", () => {
    it("Verifica os elementos da tela", () => {
      render(<MemoryRouter><Home /></MemoryRouter>);
      expect(screen.getByText("Fone de ouvido com microfone OEX Drop Hs210")).toBeInTheDocument();
      expect(screen.getByTestId("homeItem")).toBeInTheDocument();
      expect(screen.getByTestId("homeItens")).toBeInTheDocument();
    });
});