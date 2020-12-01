jest.mock("react-jss", () => ({
  createUseStyles: () => () => ({}),
}));
