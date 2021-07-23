describe("Lambda Eats", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });

  it("sanity check", () => {
    expect(5).to.equal(5);
  });

  const eleById = (id) => cy.get(`${id}`);

  it("can add text into the text inputs", () => {
    eleById("name-input").type("This is a test name.");
  });
});
