/* eslint-disable react/prop-types */
import { Button, Stack, Typography } from "@mui/material";

export const Task = (props) => {
  const deleteClick = () => {
    props.onDelete(props.id);
  };

  return (
    <Stack
      spacing={3}
      width={350}
      sx={{
        alignItems: "center",
        border: "1px solid lightblue",
        borderRadius: "10px",
        margin: 2,
        wordBreak: "break-word",
      }}
    >
      <Typography variant="h4">{props.title}</Typography>
      <Typography>{props.content}</Typography>
      <Button variant="contained" color="error" onClick={deleteClick}>
        Sil
      </Button>
    </Stack>
  );
};
