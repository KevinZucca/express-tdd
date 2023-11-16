const express = require("express");
const { test, expect } = require("@jest/globals");
const createSlug = require("./utilities/createSlug");
const list = require("./posts.json");

test("La funzione dovrebbe restituire una stringa", () => {
  const title = "Gaming in Realtà Virtuale: Il Futuro del Divertimento";
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
