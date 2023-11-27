/* eslint-disable react/prop-types */
import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";

export const CreateTask = (props) => {
  const [task, setTask] = useState({ title: "", content: "" });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setTask((prevTask) => {
      return { ...prevTask, [id]: value };
    });
  };

  const handleClick = (event) => {
    props.onAdd(task);
    setTask({ title: "", content: "" });
    event.preventDefault();
  };

  return (
    <Stack
      component="form"
      sx={{
        width: 350,
        margin: "auto",
        padding: "10px",
        justifyContent: "center",
      }}
      spacing={1}
    >
      <TextField
        id="title"
        label="Başlık"
        value={task.title}
        onChange={handleChange}
      />
      <TextField
        id="content"
        label="İçeriği Yazınız"
        multiline
        rows={3}
        value={task.content}
        onChange={handleChange}
      />
      <Button variant="contained" onClick={handleClick}>
        Ekle
      </Button>
    </Stack>
  );
};
