import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  header: {
    width: "100%",
    height: 48,
    boxShadow: "0 4px 2px -2px rgba(0,0,0,0.2)",
    background: theme.colorPrimary,
    display: "block",
  },
  wrapper: {
    height: "48px",
    display: "flex",
    justifyContent: "flex-start",
    maxWidth: "900px",
    margin: "0 auto",
    alignItems: "center",
    gap: "20px",
    padding: "0 10px",
  },
}));

export default useStyles;
