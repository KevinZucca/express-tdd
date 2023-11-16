const express = require("express");
const { test, expect } = require("@jest/globals");
const createSlug = require("./utilities/createSlug");

test("La funzione dovrebbe restituire una stringa", () => {
  const title = "Gaming in Realtà Virtuale: Il Futuro del Divertimento";
  const list = require("./posts.json");
  const result = createSlug(title, list);

  expect(typeof result).toBe("string");
});

test("La funzione dovrebbe restituire una stringa in lowerCase", () => {
  const title = "GAMING IN REALTà VIRTUALE: IL FUTURO DEL DIVERTIMENTO-1";
  const result = createSlug(title, list);

  expect(result).toBe(
    "gaming-in-realtà-virtuale:-il-futuro-del-divertimento-1"
  );
});

test("La funzione dovrebbe restituire una stringa con gli spazi sostituiti da ' - '  ", () => {
  const title = "Gaming in Realtà Virtuale: Il Futuro del Divertimento-1";
  const result = createSlug(title, list);

  expect(result).toBe(
    "gaming-in-realtà-virtuale:-il-futuro-del-divertimento-1"
  );
});

test("La funzione dovrebbe incrementare di 1 lo slug quando esiste già", () => {
  const title = "Gaming in Realtà Virtuale: Il Futuro del Divertimento";
  const result = createSlug(title, list);

  expect(result).toBe(
    "gaming-in-realtà-virtuale:-il-futuro-del-divertimento-1"
  );
});

test("La funzione dovrebbe lanciare un errore in caso di titolo mancante o formato errato", () => {
  const title = 36458645;
  const result = () => createSlug(title, list);

  expect(result).toThrow("Il titolo non è presente o in formato errato");
});

test("La funzione dovrebbe lanciare un errore in caso mancato array dei post", () => {
  const title = "Gaming in Realtà Virtuale: Il Futuro del Divertimento";
  let postList;
  const result = () => createSlug(title, postList);

  expect(result).toThrow("La lista non è presente");
});
