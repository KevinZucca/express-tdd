module.exports = class Model {
  constructor(file) {
    if (!file) {
      throw new Error("Deve essere inserito un file");
    }
    this.file = file;
  }

  read() {}

  add() {}
};
