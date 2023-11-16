const express = require("express");
const { test, expect } = require("@jest/globals");

test("La funzione dovrebbe restituire uno slug in base al titolo ricevuto e la lista di tutti i post", () => {
  const result = "Titolo del post";

  expect(result).toBe("titolo-del-post");
});
