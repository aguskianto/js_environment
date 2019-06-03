import { expect } from "chai";
import { JSDOM } from "jsdom";

describe("Our first test", () => {
  it("should pass", () => {
    expect(true).to.equal(true);
  });
});

describe("index.html", () => {
  it("should say hello", () => {
    JSDOM.fromFile("./src/index.html").then(dom => {
      const window = dom.window;
      const h1 = window.document.getElementsByTagName("h1")[0];
      expect(h1.innerHTML).to.equal("Hello World!");
      window.close();
    });
  });
});
