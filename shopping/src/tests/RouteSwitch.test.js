import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/user-event";
import RouteSwitch from '../components/RouteSwitch.js';

describe("RouteSwitch component", () => {
    it("Verifica os elementos da tela inicial", () => {
      render(<RouteSwitch />);
      expect(screen.getByText("Fone de ouvido com microfone OEX Drop Hs210")).toBeInTheDocument();
      expect(screen.getByText("Tecnologia Bluetooth")).toBeInTheDocument();
      expect(screen.getByText("Itens em promoção")).toBeInTheDocument();
      expect(screen.getByText("Entre em contato")).toBeInTheDocument();
    });
});