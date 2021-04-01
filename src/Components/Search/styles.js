import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  form: {
    display: "flex",
    width: "100%",
    "flex-wrap": "nowrap",
    alignItems: "stretch",
    alignSelf: "center",
    maxWidth: "244px",
    marginLeft: "auto",
  },
  input: {
    height: "30px",
    border: "1px solid rgb(204, 204, 204)",
    fontFamily: theme.fontFamilyPrimary,
    margin: 0,
    padding: 0,
    paddingLeft: "10px",
    fontSize: "16px",
    maxWidth: "200px",
    "&::placeholder": {
      color: "rgb(204, 204, 204)",
    },
    "&:focus": {
      border: "1px solid rgb(6, 95, 212)",
    },
  },
  wrapper: {
    position: "relative",
    maxWidth: "300px",
    display: "flex",
    flexDirection: "column",
  },
  suggestions: {
    top: "40px",
    position: "absolute",
    background: "white",
    border: "1px solid rgb(204, 204, 204)",
    borderTop: "none",
  },
  suggestionsItem: {
    fontFamily: theme.fontFamilyPrimary,
    margin: 0,
    padding: "5px 10px",
    cursor: "pointer",
    "&:hover": {
      background: "rgba(204, 204, 204)",
    },
  },
  button: {
    height: "32px",
    width: "50px",
    background: "rgba(248, 248, 248, 0.5)",
    border: "1px solid rgba(204, 204, 204)",
    borderLeft: "none",
    width: "65px",
    padding: "5px 0",
    cursor: "pointer",
    "&:hover": {
      background: "rgba(248, 248, 248, 1)",
    },
    "&:hover svg": {
      opacity: "1",
    },
  },
  icon: {
    opacity: "0.5",
  },
}));

export default useStyles;
