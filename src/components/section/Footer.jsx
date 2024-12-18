import React from "react";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import AddTodoDrawer from "@/components/drawer/add-todo";
const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full">
      <div className="flex h-20 w-full items-center justify-center">
        <AddTodoDrawer>
          <Button variant={"destructive"} size={"icon"} className="rounded-md">
            <Plus />
          </Button>
        </AddTodoDrawer>
      </div>
    </div>
  );
};

export default Footer;
