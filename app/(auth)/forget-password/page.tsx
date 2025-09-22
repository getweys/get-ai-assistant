"use client";

import { Button } from "@/components/atoms/button";

import Text, { Tags } from "@/components/atoms/text";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useRouter } from "next/navigation";

import { ControlInput } from "@/components/atoms/control-input";
import { Brain } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  ForgetPasswordSchema,
  ForgetPasswordSchemaTypes,
} from "@/schema/forget-password.schema";

const page = () => {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgetPasswordSchemaTypes>({
    resolver: zodResolver(ForgetPasswordSchema),
    mode: "onChange",
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit: SubmitHandler<ForgetPasswordSchemaTypes> = (data) => {
    console.log(data);
    router.push("/");
  };

  return (
    <div className="bg-slate-100 h-screen flex flex-col gap-8 justify-center items-center dark:bg-dark-background">
      <form
        className="h-fit max-w-[450px] w-full  bg-white px-8 py-10 rounded-xl shadow-2xl flex flex-col dark:border-dark-border dark:border-1 dark:bg-dark-form-background"
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
            "text-xl text-center font-semibold tracking-[0.6px] mb-[2px] mt-6 dark:text-white"
          )}
        >
          Set new password
        </Text>

        <div className="flex flex-col gap-6 py-7">
          <div className="flex flex-col gap-1 ">
            <label className="text-xs font-[450] tracking-[0.5px] dark:text-white">
              Password
            </label>
            <ControlInput
              className="border rounded-sm px-4 py-2  placeholder:text-xs text-sm text-semigray"
              placeholder="Password"
              type="password"
              control={control}
              name="password"
              errors={errors}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-[450] tracking-[0.5px] dark:text-white">
              Confirm Password
            </label>
            <ControlInput
              className="border rounded-sm px-4 py-2 placeholder:text-xs text-sm text-semigray"
              placeholder="Confirm Password"
              type="password"
              control={control}
              name="confirmPassword"
              errors={errors}
            />
          </div>
        </div>
        <Button className="bg-gradient-to-br from-blue-500 to-blue-700 dark:from-blue-600 dark:to-blue-800 text-white mt-2">
          Send
        </Button>
      </form>
    </div>
  );
};

export default page;
