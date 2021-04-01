import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  logo: {
    textTransform: "uppercase",
    fontFamily: theme.fontFamilyPrimary,
    margin: 0,
    padding: 0,
    fontSize: "20px",
  },
}));

export default useStyles;
