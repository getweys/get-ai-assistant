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
import { SocialLinksTypes } from "@/types";
import ControlButton from "@/components/atoms/ControlButton";
import { useTranslations } from "next-intl";
import { SocialLinks } from "@/lib/dummyData";
import { appRoutes } from "@/lib/routes";

const page = () => {
  const router = useRouter();
  const t = useTranslations("main");

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
    router.push(appRoutes.dashboard);
  };

  return (
    <div className="bg-slate-100 h-screen flex flex-col gap-8 justify-center items-center dark:bg-dark-background">
      <form
        className="h-fit max-w-[500px] w-full  bg-white px-8 py-10 rounded-md shadow-2xl flex flex-col dark:border-dark-border dark:border-1 dark:bg-dark-form-background dark:shadow-[0_0_12px_dark-border] dark:shadow-dark-border max-sm:w-[90%]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex justify-center items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 dark:from-blue-600 dark:to-blue-800 rounded-lg flex items-center justify-center shadow-md">
            <Brain className="h-4 w-4 text-white" />
          </div>
          <span className="font-semibold text-xl dark:text-white text-sidebar-foreground tracking-[2px]">
            {t("getAiAssistant")}
          </span>
        </div>
        <Text
          containerTag={Tags.Paragraph}
          className={cn(
            "text-xl text-center font-semibold tracking-[0.6px] mb-[2px] mt-6 dark:text-white"
          )}
        >
          {t("createAnAccount")}
        </Text>
        <Text
          containerTag={Tags.Paragraph}
          className="text-sm text-semigray text-center tracking-[0.7px] dark:text-text-dark "
        >
          {t("signupSemiHeader")}
        </Text>
        <div className="flex flex-col gap-6 py-8">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-[450] tracking-[0.5px] dark:text-white">
              {t("fullName")}
            </label>
            <ControlInput
              className="border rounded-sm px-4 py-2 placeholder:text-xs text-sm text-semigray "
              placeholder="Full Name"
              type="text"
              control={control}
              name="fullName"
              errors={errors}
            />
          </div>
          <div className="flex flex-col gap-1.5 ">
            <label className="text-xs font-[450] tracking-[0.5px] dark:text-white">
              {t("email")}
            </label>
            <ControlInput
              className="border rounded-sm px-4 py-2 placeholder:text-xs text-sm text-semigray "
              placeholder="Email"
              type="text"
              control={control}
              name="email"
              errors={errors}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-[450] tracking-[0.5px]  dark:text-white">
              {t("password")}
            </label>
            <ControlInput
              className="border rounded-sm px-4 py-2 placeholder:text-xs text-sm text-semigray"
              placeholder="Password"
              type="password"
              control={control}
              name="password"
              errors={errors}
            />
          </div>
        </div>
        <div className="flex gap-2">
          {SocialLinks.map((link: SocialLinksTypes) => {
            return (
              <ControlButton
                key={link.id}
                icon={link.icon}
                title={link.title}
                iconStyles={cn(
                  link.id === 1 && "text-blue-500 dark:text-white",
                  link.id === 2 && "text-blue-300 dark:text-white",
                  link.id === 3 && "text-blue-500 dark:text-white"
                )}
              />
            );
          })}
        </div>
        <Button
          className="bg-gradient-to-br mt-8 from-blue-500 to-blue-700 dark:from-blue-600 dark:to-blue-800 text-white "
          type="submit"
        >
          {t("signUp")}
        </Button>
        <div className="flex justify-center mt-2.5 ">
          <Text
            containerTag={Tags.Paragraph}
            className="text-xs text-center font-[450] dark:text-text-dark "
            onClick={() => router.push(appRoutes.signin)}
          >
            {t("alreadyHaveAccount")}?{" "}
            <span className="hover:text-blue-600 hover:underline cursor-pointer">
              {t("signIn")}
            </span>
          </Text>
        </div>
      </form>
    </div>
  );
};

export default page;
