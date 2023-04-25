import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/user-event";
import Publi from '../components/Publi.js';

describe("Buy component", () => {
    it("Verifica os elementos da tela", () => {
      render(<Publi />);
      expect(screen.getByText("Tecnologia Bluetooth")).toBeInTheDocument();
      expect(screen.getByTestId("publiImg")).toBeInTheDocument();
    });
});