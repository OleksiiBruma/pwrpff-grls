import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  container: {
    boxSizing: "border-box",
    maxWidth: 900,
    margin: "0 10px 0 10px",
    [theme.devices.tablet]: {
      margin: "0 24px 0 24px",
    },
    [theme.devices.desktop]: {
      margin: "0 auto",
    },
  },
}));

export default useStyles;
