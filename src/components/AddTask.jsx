import Input from "./Input";
import { useState } from "react";

function AddTask({ onClickAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite o titulo da tarefa"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Input
        type="text"
        placeholder="Digite os detalhes da tarefa"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Preencha o titulo e a descrição");
          }
          onClickAddTask(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
