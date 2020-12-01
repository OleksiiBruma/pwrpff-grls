import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  container: {
    backgroundColor: theme.colorSecondary,
    boxSizing: "border-box",
    padding: 20,
    marginTop: 10,
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    fontFamily: theme.fontFamilySecondary,
    color: theme.textPrimary,
    justifyContent: "center",
    width: "100%",
    "&:hover": {
      backgroundColor: theme.colorPrimary,
    },
    "&:first-child": {
      marginTop: 0,
    },
    [theme.devices.tablet]: {
      margin: "0 10px 0 10px",
      marginTop: 10,
    },
    [theme.devices.desktop]: {
      margin: "0 auto",
      marginTop: 10,
    },
  },
}));

export default useStyles;
