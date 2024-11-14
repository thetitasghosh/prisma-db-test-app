import prisma from "@/lib/db";
import React from "react";
import TodoCard from "@/components/cards/todo-card";
const AppContent = async () => {
  const alltodos = await prisma.todo.findMany();
  return (
    <div className="flex h-full w-full flex-col items-center justify-start gap-5 rounded-md border p-2">
      {alltodos.map((data, i) => {
        return (
          <TodoCard key={i} text={data.text} title={data.title} id={data.id} />
        );
      })}
    </div>
  );
};

export default AppContent;
