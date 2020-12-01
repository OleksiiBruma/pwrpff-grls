import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  wrapper: {
    display: "flex",
    minHeight: "100vh",
    background: theme.colorSecondary,
  },
  innerWrapper: {
    flex: 1,
  },
}));

export default useStyles;
