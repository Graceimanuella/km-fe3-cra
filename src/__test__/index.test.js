import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import Home from "../pages/Home/index.js";

test("The app should fetch API then return correct response", async () => {
    render (<Home />);

    fetch("https://accounts.spotify.com/authorize", { method: "GET" });
});

test("Search box value should be same as user typing", () => {
    render(<Home />);

    const Searchbar = screen.getByLabelText("Searchbar");
    userEvent.type(Searchbar, "track");

    expect(Searchbar.value).toBe("track");
});