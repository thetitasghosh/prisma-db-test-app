"use client";
import React from "react";
import { Trash2 } from "lucide-react";
import { deleteTodo } from "@/app/actions/action";
import { Button } from "../ui/button";
const TodoCard = ({ title, text, id }) => {
  return (
    <div className="relative flex h-16 w-full flex-col items-start justify-center gap-1 rounded-md border pl-5">
      <h1 className="font-bold">{title}</h1>
      <p>{text}</p>
      <Button
        onClick={() => deleteTodo(id)}
        className="absolute right-2 top-3.5"
        size={"icon"}
        variant={"destructive"}
      >
        <Trash2 />
      </Button>
    </div>
  );
};

export default TodoCard;
