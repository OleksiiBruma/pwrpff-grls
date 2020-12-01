import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  title: {
    textAlign: "center",
    fontSize: theme.titleSize,
    margin: 0,
    padding: 0,
    width: "100%",
    color: theme.textPrimary,
    fontFamily: theme.fontFamilyPrimary,
  },
  titleSmall: {
    fontSize: theme.titleSizeSmall,
  },
  [theme.devices.desktop]: {
    title: {
      textAlign: "left",
    },
  },
}));

export default useStyles;
