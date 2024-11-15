"use client";
import React from "react";
import { Trash2, CopyPlus } from "lucide-react";
import { deleteTodo, duplicateTodo } from "@/app/actions/action";
import { Button } from "../ui/button";
const TodoCard = ({ title, text, id }) => {
  return (
    <div className="relative flex h-16 w-full items-center justify-between gap-1 rounded-md border px-5">
      <div>
        <h1 className="font-bold">{title}</h1>
        <p>{text}</p>
      </div>
      <div className="flex w-fit gap-2">
        <Button
          onClick={() => deleteTodo(id)}
          className=""
          size={"icon"}
          variant={"destructive"}
        >
          <Trash2 />
        </Button>
        <Button
          onClick={() => duplicateTodo(title, text)}
          className=""
          size={"icon"}
          variant={"outline"}
        >
          <CopyPlus className="text-blue-800" />
        </Button>
      </div>
    </div>
  );
};

export default TodoCard;
