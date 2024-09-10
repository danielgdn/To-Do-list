/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import Tasks from "./components/Task";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Caso queira usar uma API, Teste Usando Api Placeholder
  //useEffect(() => {
  //   //Chamar API
  //   async function fetchTasks() {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos?_limit=15",
  //       {
  //         method: "GET",
  //       }
  //     );
  //     const data = await response.json();

  //     // setTasks(data);
  //   }
  //   fetchTasks();
  // }, []);

  function onTaskClick(taskid) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskid) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function deleteTask(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onClickAddTask(title, description) {
    const newTasks = {
      id: tasks.length + 1,
      title: title,
      description: description,
      isCompleted: false,
    };
    setTasks([...tasks, newTasks]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de tarefas
        </h1>
        <AddTask onClickAddTask={onClickAddTask} />

        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;
