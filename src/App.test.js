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

  it("deberia girar a la izquierda con superficie y posicion inicial por defecto", () => {
    expect(controladorAuto("5,5/1,2N/I")).toEqual("(1,2)O");
  });
  it("deberia girar a la derecha con superficie y posicion inicial por defecto", () => {
    expect(controladorAuto("5,5/1,2N/D")).toEqual("(1,2)E");
  });
  it("deberia poder girar IoD y dar orientacion final con superficie y posicion inicial por defecto", () => {
    expect(controladorAuto("5,5/1,2N/IDI")).toEqual("(1,2)O");
  });

  it("deberia poder permitir controlar auto sin comandos por defecto", () => {
    expect(controladorAuto("5,5/1,2N/AA")).toEqual("(1,4)N");
  });

  it("deberia avanzar en x", () => {
    expect(controladorAuto("5,5/1,2E/AA")).toEqual("(3,2)E");
  });
  it("deberia retroceder en x", () => {
    expect(controladorAuto("5,5/1,2O/A")).toEqual("(0,2)O");
  });
  it("deberia retroceder en Y", () => {
    expect(controladorAuto("5,5/1,2S/A")).toEqual("(1,1)S");
  });
  it("deberia poder girar Izquierda y avanzar ", () => {
    expect(controladorAuto("5,5/1,2N/IA")).toEqual("(0,2)O");
  });

});
