"use client";

import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";

export default function Social() {
  const [isLoading, setIsLoading] = useState(false);

  const onClick = (provider: "google" | "github") => {
    setIsLoading(true);
    console.log(provider);
  };

  return (
    <div className="flex w-full items-center gap-x-2">
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => onClick("google")}
        disabled={isLoading}
        aria-disabled={isLoading}
      >
        <FcGoogle className="h-5 w-5" />
      </Button>
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => onClick("github")}
        disabled={isLoading}
        aria-disabled={isLoading}
      >
        <FaGithub className="h-5 w-5" />
      </Button>
    </div>
  );
}
