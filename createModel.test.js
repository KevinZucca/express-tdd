const express = require("express");
const { test, expect } = require("@jest/globals");
const jsonElement = require("./model.json");
const jsonList = require("./posts.json");
const model = require("./Model");

test("Model dovrebbe essere una classe", () => {
  expect(typeof model).toBe("function");
});

test("L'istanza di Model dovrebbe richiedere il nome del file json da usare in fase di creazione dell'istanza", () => {
  const newModel = () => new model();
  expect(newModel).toThrowError("Deve essere inserito un file");
});

test("Model dovrebbe contenere il metodo read", () => {
  const newModel = new model(jsonElement);
  expect(newModel.read).toBeDefined();
  expect(typeof newModel.read).toBe("function");
});

test("Model dovrebbe contenere il metodo add", () => {
  const newModel = new model(jsonElement);
  expect(newModel.add).toBeDefined();
  expect(typeof newModel.add).toBe("function");
});

test("read dovrebbe restituire un array", () => {
  const newModel = new model(jsonList);
  const readFile = newModel.read();
  console.log(readFile);
  expect(Array.isArray(readFile)).toBe(true);
});

test("add dovrebbe aggiungere un elemento all'array dei dati e ritornare tutta la lista", () => {
  const newModel = new model(jsonList);
  const addFile = newModel.add(jsonElement);
  expect(Array.isArray(addFile)).toBe(true);
  // const expectedList = [...jsonList, jsonElement];
  // expect(() => {
  //   addFile;
  // }).toEqual(expectedList);
});
