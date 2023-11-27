import "./App.css";
import { CreateTask } from "./CreateTask";
import { Header } from "./Header";
import { useState } from "react";
import { Task } from "./Task";
import { Stack } from "@mui/material";
import { Footer } from "./Footer";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks((prevTasks) => {
      return [...prevTasks, newTask];
    });
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((taskItem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <Header />
      <CreateTask onAdd={addTask} />
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          margin: "12px",
        }}
      >
        {tasks.map((taskItem, index) => {
          return (
            <Task
              key={index}
              id={index}
              title={taskItem.title}
              content={taskItem.content}
              onDelete={deleteTask}
            />
          );
        })}
      </Stack>
      <Footer />
    </>
  );
}

export default App;
