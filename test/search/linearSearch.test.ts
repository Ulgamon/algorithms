import { linearSearch } from "../../src/search/linearSearch";

const names = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Emily",
  "Frank",
  "Grace",
  "Henry",
  "Ivy",
  "Jack",
  "Katie",
  "Leo",
  "Mia",
  "Noah",
  "Olivia",
  "Peter",
  "Quinn",
  "Rachel",
  "Sam",
  "Taylor",
  "Ursula",
  "Vincent",
  "Wendy",
  "Xavier",
  "Yasmine",
  "Zachary",
  "Ava",
  "Benjamin",
  "Cora",
  "Daniel",
  "Ella",
  "Felix",
  "Gina",
  "Harrison",
  "Isabella",
  "Jacob",
  "Kate",
  "Liam",
  "Mila",
  "Nathan",
  "Oscar",
  "Penelope",
  "Quincy",
  "Rebecca",
  "Seth",
  "Sophie",
  "Tristan",
  "Uma",
  "Violet",
  "William",
  "Xander",
  "Yara",
  "Zane",
  "Amelia",
  "Bryan",
  "Chloe",
  "Dylan",
  "Emma",
  "Fiona",
  "George",
  "Hazel",
  "Isaac",
  "Jasmine",
  "Kai",
  "Lily",
  "Mason",
  "Nora",
  "Owen",
  "Paige",
  "Quentin",
  "Riley",
  "Samantha",
  "Theo",
  "Ulysses",
  "Victoria",
  "Wyatt",
  "Xena",
  "Yvonne",
  "Zander",
];

describe("Linear Search algorithm.", () => {
  it("Find Alice expected: true", () => {
    expect(linearSearch(names, "Alice")).toEqual(0);
  });

  it("Find Bob expected: true", () => {
    expect(linearSearch(names, "Bob")).toEqual(1);
  });

  it("Find '' expected: true", () => {
    expect(linearSearch(names, "")).toEqual(-1);
  });

  it("Find Justin expected: true", () => {
    expect(linearSearch(names, "Justin")).toEqual(-1);
  });

  it("Find David expected: true", () => {
    expect(linearSearch(names, "David")).toEqual(3);
  });

  it("Find Elimy expected: true", () => {
    expect(linearSearch(names, "Elimy")).toEqual(-1);
  });
});
