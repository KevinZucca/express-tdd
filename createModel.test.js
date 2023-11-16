const express = require("express");
const { test, expect } = require("@jest/globals");
const jsonElement = require("./model.json");
const model = require("./Model");

test("Model dovrebbe essere una classe", () => {
  expect(typeof model).toBe("function");
});

test("L'istanza di Model dovrebbe richiedere il nome del file json da usare in fase di creazione dell'istanza", () => {
  const newModel = () => new model();
  expect(newModel).toThrowError("Deve essere inserito un file");
});
