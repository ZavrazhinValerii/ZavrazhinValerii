import { toggleUserNameAction } from "../actions";
import { profileReducer } from "../reducer";

describe("test profileReducer", () => {
  it("array is empty", () => {
    const recieved = profileReducer(undefined, toggleUserNameAction());

    expect(recieved).toMatchSnapshot();
  });
});