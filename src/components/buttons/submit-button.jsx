"use client";
import React from "react";
import { Button } from "../ui/button";
import { Loader } from "lucide-react";
import { useFormStatus } from "react-dom";
const SubmitButton = ({ children, onPending }) => {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending}>
      {pending && <Loader className="animate-spin" />}
      {pending ? onPending : children}
    </Button>
  );
};

export default SubmitButton;
