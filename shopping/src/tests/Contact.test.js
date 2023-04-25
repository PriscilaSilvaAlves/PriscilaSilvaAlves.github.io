import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/user-event";
import Contact from '../components/Contact.js';

describe("Contact component", () => {
    it("Verifica os elementos da tela", () => {
      render(<Contact />);
      expect(screen.getByText("Entre em contato")).toBeInTheDocument();
    });
});