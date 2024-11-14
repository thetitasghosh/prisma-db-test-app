import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { createTodo } from "@/app/actions/action";
import { Textarea } from "../ui/textarea";
import SubmitButton from "@/components/buttons/submit-button";
const CreateTodo = () => {
  return (
    <form
      action={createTodo}
      className="flex h-full w-full flex-col items-center justify-center gap-2"
    >
      <div className="w-full">
        <Label htmlFor="name" className="pl-1">
          Title
        </Label>
        <Input id="name" type="text" name="name" required />
      </div>
      <div className="w-full">
        <Label htmlFor="text" className="pl-1">
          Title
        </Label>
        <Textarea id="text" rows={3} type="text" name="text" required />
      </div>
      <div className="flex w-full items-center justify-center">
        <SubmitButton onPending={"Adding..."}>Add</SubmitButton>
      </div>
    </form>
  );
};

export default CreateTodo;
