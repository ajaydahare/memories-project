import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  title: {
    textTransform: "capitalize",
  },
  media: {
    borderRadius: "20px",
    objectFit: "cover",
    width: "100%",
    maxWidth: "650px",
    maxHeight: "400px",
  },
  card: {
    display: "flex",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      flexDirection: "column",
    },
  },
  section: {
    borderRadius: "20px",
    margin: "2rem 0",
    flex: 1,
  },
  imageSection: {
    marginLeft: "20px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  recommendedPosts: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  loadingPaper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    borderRadius: "15px",
    height: "39vh",
  },
  alsoLike: {
    marginRight: "1rem",
    marginBottom: "1rem",
  },
}));
