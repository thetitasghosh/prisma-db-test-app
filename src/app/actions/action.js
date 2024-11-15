"use server";
// import { toast } from "sonner";
import { revalidatePath } from "next/cache";
import prisma from "../../lib/db";
export async function createTodo(formData) {
  const name = formData.get("name");
  const content = formData.get("text");
  await prisma.todo.create({
    data: {
      title: name,
      text: content,
    },
  });
  // toast(`Add new todo`);
  revalidatePath("/");
}
export async function deleteTodo(id) {
  await prisma.todo.delete({
    where: { id: id },
  });
  revalidatePath("/");
}
export async function duplicateTodo(title, text) {
  await prisma.todo.create({
    data: {
      title: `${title} Copy`,
      text: text,
    },
  });
  revalidatePath("/");
}
