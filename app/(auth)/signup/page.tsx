"use client";

import { Button } from "@/components/atoms/button";

import Text, { Tags } from "@/components/atoms/text";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import { ControlInput } from "@/components/atoms/control-input";
import { Brain } from "lucide-react";
import { cn } from "@/lib/utils";
import { SignupSchema, SignupSchemaTypes } from "@/schema/signup.schema";
import { SocialLinks } from "@/lib/dummyData";
import { socialLinksTypes } from "@/types";
import ControlButton from "@/components/atoms/ControlButton";

const page = () => {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupSchemaTypes>({
    resolver: zodResolver(SignupSchema),
    mode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<SignupSchemaTypes> = (data) => {
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
            "text-2xl font-semibold text-left tracking-[0.6px] mb-1 dark:text-white"
          )}
        >
          Create an Account
        </Text>
        <Text
          containerTag={Tags.Paragraph}
          className="text-base text-semigray text-left tracking-[0.7px]"
        >
          Get start your journey with AI assistant
        </Text>
        <div className="flex flex-col gap-6 py-8">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-[450] tracking-[0.5px]">
              Full Name
            </label>
            <ControlInput
              className="border rounded-sm px-4 py-2 placeholder:text-xs text-sm text-semigray dark:bg-gray-300 focus-visible:!border-blue-500  dark:focus-visible:bg-blue-100 focus-visible:!ring-[1px] focus-visible:bg-blue-50 "
              placeholder="Full Name"
              type="text"
              control={control}
              name="fullName"
              errors={errors}
            />
          </div>
          <div className="flex flex-col gap-1 ">
            <label className="text-xs font-[450] tracking-[0.5px]">Email</label>
            <ControlInput
              className="border rounded-sm px-4 py-2 placeholder:text-xs text-sm text-semigray dark:bg-gray-300 dark:focus-visible:bg-blue-100 focus-visible:!border-blue-500  focus-visible:!ring-[1px] focus-visible:bg-blue-50"
              placeholder="Email"
              type="text"
              control={control}
              name="email"
              errors={errors}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-[450] tracking-[0.5px]">
              Password
            </label>
            <ControlInput
              className="border rounded-sm px-4 py-2 placeholder:text-xs text-sm text-semigray dark:bg-gray-300 focus-visible:!border-blue-500 dark:focus-visible:bg-blue-100 focus-visible:!ring-[1px] focus-visible:bg-blue-50"
              placeholder="Password"
              type="password"
              control={control}
              name="password"
              errors={errors}
            />
          </div>
        </div>
        <div className="flex gap-2">
          {SocialLinks.map((link: socialLinksTypes) => {
            return (
              <ControlButton
                key={link.id}
                icon={link.icon}
                title={link.title}
                iconStyles={cn(
                  link.id === 1 && "text-blue-500",
                  link.id === 2 && "text-blue-300",
                  link.id === 3 && "text-blue-500"
                )}
              />
            );
          })}
        </div>
        <Button className="bg-gradient-to-br mt-8 from-blue-500 to-blue-700 dark:from-blue-600 dark:to-blue-800 text-white ">
          Sign up
        </Button>
        <div className="flex justify-between mt-2.5 ">
          <Text
            containerTag={Tags.Paragraph}
            className="text-xs text-center font-[450]"
            onClick={() => router.push("/signin")}
          >
            Already have an account?{" "}
            <span className="hover:text-blue-600 hover:underline cursor-pointer">
              Sign in
            </span>
          </Text>
          <Text
            containerTag={Tags.Paragraph}
            className="text-xs text-center font-[450] hover:text-blue-600 hover:underline cursor-pointer"
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
