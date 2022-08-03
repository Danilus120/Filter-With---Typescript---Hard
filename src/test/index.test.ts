import { changeObjectToFlatArray, deepSearch } from "../index";

describe("deepSearch", () => {
  describe("should return ", () => {
    it("object in array which includes searching phrase from nested arrayOfObjects", () => {
      // Assert
      const arrayOfObjects = [
        {
          id: 1,
          name: "Wan",
          tags: ["labore", "elit"],
        },
        {
          id: 2,
          name: "Pan",
          friends: [
            {
              id: 0,
              name: "Sheppard Jensen",
            },
          ],
        },
        {
          id: 3,
          name: "Lan",
        },
      ];
      const phraseToFind = "Wan";
      const expectedResult = [{ id: 1, name: "Wan", tags: ["labore", "elit"] }];

      // Act
      const result = deepSearch(arrayOfObjects, phraseToFind);

      // Arrange
      expect(result).toEqual(expectedResult);
    });
    it("multiple objects in array which includes searching phrase from nested arrayOfObjects", () => {
      // Assert
      const arrayOfObjects = [
        {
          id: 1,
          name: "Wan",
          tags: ["labore", "elit"],
        },
        {
          id: 2,
          name: "Pan",
          friends: [
            {
              id: 0,
              name: "Sheppard Jensen",
            },
          ],
        },
        {
          id: 3,
          name: "Lan",
        },
      ];
      const phraseToFind = "an";
      const expectedResult = [
        { id: 1, name: "Wan", tags: ["labore", "elit"] },
        { id: 2, name: "Pan", friends: [{ id: 0, name: "Sheppard Jensen" }] },
        { id: 3, name: "Lan" },
      ];

      // Act
      const result = deepSearch(arrayOfObjects, phraseToFind);

      // Arrange
      expect(result).toEqual(expectedResult);
    });
    it("[] for empty arrayOfObjects", () => {
      // Assert
      const arrayOfObjects: object[] = [];
      const phraseToFind = "an";
      const expectedResult: object[] = [];

      // Act
      const result = deepSearch(arrayOfObjects, phraseToFind);

      // Arrange
      expect(result).toEqual(expectedResult);
    });
    it("all objects for empty phraseToFind", () => {
      // Assert
      const arrayOfObjects = [
        {
          id: 1,
          name: "Wan",
          tags: ["labore", "elit"],
        },
        {
          id: 2,
          name: "Pan",
          friends: [
            {
              id: 0,
              name: "Sheppard Jensen",
            },
          ],
        },
        {
          id: 3,
          name: "Lan",
        },
      ];
      const phraseToFind = "";
      const expectedResult = [
        { id: 1, name: "Wan", tags: ["labore", "elit"] },
        { id: 2, name: "Pan", friends: [{ id: 0, name: "Sheppard Jensen" }] },
        { id: 3, name: "Lan" },
      ];

      // Act
      const result = deepSearch(arrayOfObjects, phraseToFind);

      // Arrange
      expect(result).toEqual(expectedResult);
    });
  });
});

describe("ChangeObjectToFlatArray", () => {
  describe("should return ", () => {
    it("flat array from arraysOfObjects", () => {
      // Assert
      const arrayOfObjects = [
        {
          id: 1,
          name: "Wan",
          tags: ["labore", "elit"],
        },
        {
          id: 2,
          name: "Pan",
          friends: [
            {
              id: 0,
              name: "Sheppard Jensen",
            },
          ],
        },
        {
          id: 3,
          name: "Lan",
        },
      ];
      const expectedResult = [
        1,
        "Wan",
        "labore",
        "elit",
        2,
        "Pan",
        0,
        "Sheppard Jensen",
        3,
        "Lan",
      ];

      // Act
      const result = changeObjectToFlatArray([], Object.values(arrayOfObjects));

      // Arrange
      expect(result).toEqual(expectedResult);
    });
    it("empty array if arraysOfObjects are empty", () => {
      // Assert
      const arrayOfObjects: string[] = [];
      const expectedResult: string[] = [];

      // Act
      const result = changeObjectToFlatArray([], Object.values(arrayOfObjects));

      // Arrange
      expect(result).toEqual(expectedResult);
    });
  });
});
