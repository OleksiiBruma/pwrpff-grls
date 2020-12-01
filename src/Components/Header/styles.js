import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  header: {
    width: "100%",
    height: 48,
    boxShadow: "0 4px 2px -2px rgba(0,0,0,0.2)",
    background: theme.colorPrimary,
  },
}));

export default useStyles;
