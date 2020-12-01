import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  name: {
    color: theme.textPrimary,
    fontSize: "18px",
    fontFamily: theme.fontFamilySecondary,
    flex: "2",
    marginLeft: "-50px",

    [theme.devices.tablet]: {
      paddingLeft: "10px",
      marginLeft: 0,
    },
  },
  season: {
    color: theme.textSecondary,
    fontSize: "18px",
    fontFamily: theme.fontFamilyPrimary,
    transform: "rotate(-90deg) translate(0,-35px)",
    padding: "15px 0",
    [theme.devices.tablet]: {
      transform: "unset",
      padding: "unset",
    },
    [theme.devices.desktop]: {},
  },
  airtime: {
    paddingLeft: "10px",
    color: theme.textSecondary,
    fontSize: "18px",
    fontFamily: theme.fontFamilyPrimary,
  },
}));

export default useStyles;
