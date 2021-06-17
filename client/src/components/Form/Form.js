import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import useStyle from "./style";
import { useDispatch, useSelector } from "react-redux";
import { createPosts, updatePost } from "../../actions/posts";
import { useHistory } from "react-router";
const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const post = useSelector((state) =>
    currentId ? state.posts.posts.find((post) => post._id === currentId) : null
  );
  const classes = useStyle();
  const dispatch = useDispatch();
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(
        updatePost(currentId, { ...postData, name: user?.result?.name })
      );
      clear();
    } else {
      dispatch(createPosts({ ...postData, name: user?.result?.name }));
      history.push("/posts");
      clear();
    }
  };

  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper} elevation={6}>
        <Typography variant="h6" align="center">
          please Sign in to create your own memories and Like other's memories.
        </Typography>
      </Paper>
    );
  }

  const clear = () => {
    setCurrentId(null);
    setPostData({
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={classes.form}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {!post ? "Creating" : "Editing"} memories
        </Typography>
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          spacing={2}
          fullWidth
          value={postData.title}
          onChange={(event) =>
            setPostData({ ...postData, title: event.target.value })
          }
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          multiline
          rows={3}
          fullWidth
          value={postData.message}
          onChange={(event) =>
            setPostData({ ...postData, message: event.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags(coma separated)"
          fullWidth
          value={postData.tags}
          onChange={(event) =>
            setPostData({ ...postData, tags: event.target.value.split(",") })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};
export default Form;
