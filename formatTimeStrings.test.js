import { formatTimeStrings } from "../formatTimeStrings";

describe("test formatTimeStrings", () => {
  it("array is empty", () => {
    const expected = "None";
    const resieved = formatTimeStrings([]);

    expect(resieved).toEqual(expected);
  });