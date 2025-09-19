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
    <div className="bg-slate-100 h-screen flex flex-col gap-8 justify-center items-center dark:bg-black">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 dark:from-blue-600 dark:to-blue-800 rounded-lg flex items-center justify-center shadow-md">
          <Brain className="h-6 w-6 text-white" />
        </div>
        <span className="font-semibold text-2xl text-sidebar-foreground tracking-[2px]">
          GET AI Assistant
        </span>
      </div>
      <form
        className="h-fit max-w-[450px] w-full  bg-white px-8 py-10 rounded-xl shadow-2xl flex flex-col dark:bg-slate-800"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Text
          containerTag={Tags.Paragraph}
          className={cn(
            "text-2xl font-semibold text-center tracking-[0.6px] mb-1 dark:text-white"
          )}
        >
          Set new password
        </Text>

        <div className="flex flex-col gap-6 py-8">
          <div className="flex flex-col gap-1 ">
            <label className="text-xs font-[450] tracking-[0.5px]">
              Password
            </label>
            <ControlInput
              className="border rounded-sm px-4 py-2  placeholder:text-xs text-sm text-semigray dark:focus-visible:bg-blue-100 dark:bg-gray-300 focus-visible:!border-blue-500  focus-visible:!ring-[1px] focus-visible:bg-blue-50"
              placeholder="Password"
              type="password"
              control={control}
              name="password"
              errors={errors}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-[450] tracking-[0.5px]">
              Confirm Password
            </label>
            <ControlInput
              className="border rounded-sm px-4 py-2 placeholder:text-xs text-sm text-semigray  dark:focus-visible:bg-blue-100 dark:bg-gray-300 focus-visible:!border-blue-500  focus-visible:!ring-[1px] focus-visible:bg-blue-50"
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
