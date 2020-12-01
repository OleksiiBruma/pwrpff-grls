import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  loader: {
    position: "fixed",
    top: "50%",
    left: "50%",
    width: "100%",
    height: "auto",
  },
  card: {
    padding: "10px 10px 0 10px",
    [theme.devices.desktop]: {
      margin: "0 auto",
      padding: "20px 20px 0 20px",
    },
  },
  content: {
    marginTop: 10,
    backgroundColor: theme.colorPrimary,
    padding: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    [theme.devices.tablet]: {
      display: "block",
      overflow: "auto",
    },
    [theme.devices.desktop]: {
      padding: 20,
      marginTop: 20,
    },
  },
  summary: {
    color: theme.textSecondary,
    fontFamily: theme.fontFamilySecondary,
    fontSize: 18,
    padding: 0,
    margin: 0,
    marginTop: 10,
    textAlign: "justify",
    [theme.devices.tablet]: {
      fontSize: 21,
      marginTop: 0,
    },
  },
  image: {
    flexShrink: "0",
    width: "auto",
    [theme.devices.tablet]: {
      float: "left",
      paddingRight: 20,
    },
  },
}));

export default useStyles;
