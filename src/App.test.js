import controladorAuto from "./App.js";

describe("Controlar un Auto", () => {
  it("deberia avanzar una posicion con superficie y posicion inicial por defecto", () => {
    expect(controladorAuto("5,5/1,2N/A")).toEqual("(1,3)N");
  });
  it("deberia avanzar dos posicion con superficie y posicion inicial por defecto", () => {
    expect(controladorAuto("5,5/1,2N/AA")).toEqual("(1,4)N");
  });
  it("deberia avanzar varias posicion con superficie y posicion inicial por defecto", () => {
    expect(controladorAuto("5,5/1,2N/AAA")).toEqual("(1,5)N");
  });
});
