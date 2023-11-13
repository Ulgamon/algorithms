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
  it("Find Xander expected: true", () => {
    expect(linearSearch(names, "Xander")).toEqual(true);
  });

  it("Find Xander expected: true", () => {
    expect(linearSearch(names, "Xander")).toEqual(true);
  });

  it("Find Xander expected: true", () => {
    expect(linearSearch(names, "")).toEqual(false);
  });

  it("Find Xander expected: true", () => {
    expect(linearSearch(names, "Justin")).toEqual(false);
  });

  it("Find Xander expected: true", () => {
    expect(linearSearch(names, "Ivy")).toEqual(true);
  });

  it("Find Xander expected: true", () => {
    expect(linearSearch(names, "Xena")).toEqual(true);
  });
});
