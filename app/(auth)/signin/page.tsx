"use client";

import { Button } from "@/components/atoms/button";

import Text, { Tags } from "@/components/atoms/text";
import { SigninSchemaTypes } from "@/schema/signin.schema";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SigninSchema } from "@/schema/signin.schema";
import { useRouter } from "next/navigation";

import { ControlInput } from "@/components/atoms/control-input";
import { Brain } from "lucide-react";
import { cn } from "@/lib/utils";

const page = () => {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninSchemaTypes>({
    resolver: zodResolver(SigninSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<SigninSchemaTypes> = (data) => {
    console.log(data);
    router.push("/ai-assistant-dashboard");
  };

  return (
    <div className="bg-slate-100 h-screen flex flex-col gap-8 justify-center items-center dark:bg-dark-background">
      <form
        className="h-fit max-w-[500px] w-full bg-white px-8 py-10 rounded-md shadow-2xl flex flex-col dark:border-dark-border dark:border-1 dark:bg-dark-form-background  dark:shadow-[0_0_12px_dark-border] dark:shadow-dark-border  max-sm:w-[90%]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex justify-center items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 dark:from-blue-600 dark:to-blue-800 rounded-lg flex items-center justify-center shadow-md">
            <Brain className="h-4 w-4 text-white" />
          </div>
          <span className="font-semibold text-xl text-sidebar-foreground tracking-[2px] dark:text-white">
            GET AI Assistant
          </span>
        </div>
        <Text
          containerTag={Tags.Paragraph}
          className={cn(
            "text-xl text-center font-semibold tracking-[0.6px] mb-[2px] mt-6  dark:text-white"
          )}
        >
          Welcome Back
        </Text>
        <Text
          containerTag={Tags.Paragraph}
          className="text-sm text-semigray text-center dark:text-text-dark tracking-[0.7px]"
        >
          Sign in to access your AI assistant
        </Text>
        <div className="flex flex-col gap-6 py-8">
          <div className="flex flex-col gap-1.5 ">
            <label className="text-xs font-[450] tracking-[0.5px] dark:text-white">
              Email
            </label>
            <ControlInput
              className="border rounded-sm px-4 py-2  placeholder:text-xs text-sm text-semigray "
              placeholder="Email"
              type="text"
              control={control}
              name="email"
              errors={errors}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-[450] dark:text-white tracking-[0.5px]">
              Password
            </label>
            <ControlInput
              className="border rounded-sm px-4 py-2 placeholder:text-xs text-sm text-semigray "
              placeholder="Password"
              type="password"
              control={control}
              name="password"
              errors={errors}
            />
          </div>
        </div>
        <Button
          className="bg-gradient-to-br from-blue-500 to-blue-700 dark:from-blue-600 dark:to-blue-800 text-white mt-2"
          type="submit"
        >
          Sign in
        </Button>
        <div className="flex justify-between mt-2.5">
          <Text
            containerTag={Tags.Paragraph}
            className="text-xs text-center  font-[450] dark:text-text-dark "
            onClick={() => router.push("/signup")}
          >
            Create an account?{" "}
            <span className="hover:text-blue-600 hover:underline cursor-pointer ">
              Sign up
            </span>
          </Text>
          <Text
            containerTag={Tags.Paragraph}
            className="text-xs text-center font-[450] hover:text-blue-600 hover:underline cursor-pointer dark:hover:text-blue-600 dark:text-text-dark"
            onClick={() => router.push("/forget-password")}
          >
            Forgot password?
          </Text>
        </div>
      </form>
    </div>
  );
};

export default page;
