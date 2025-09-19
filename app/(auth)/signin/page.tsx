"use client";

import { Button } from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";
import Text, { Tags } from "@/components/atoms/text";
import { SigninSchemaTypes } from "@/schema/signin.schema";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SigninSchema } from "@/schema/signin.schema";
import { useRouter } from "next/navigation";

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
      fullName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<SigninSchemaTypes> = (data) => {
    console.log(data);
    router.push("/");
  };

  return (
    <div className="bg-slate-50 h-screen flex justify-center items-center ">
      <form
        className="h-fit max-w-[400px] w-full  bg-white px-8 py-10 rounded-xl shadow-2xl flex flex-col"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Text
          containerTag={Tags.Paragraph}
          className="text-xl font-semibold text-center tracking-[0.5px]"
        >
          Sign in to account
        </Text>
        <div className="flex flex-col gap-4 py-8">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-[450] tracking-[0.5px]">
              Full Name
            </label>
            <Input
              className="border rounded-sm px-4 py-2 placeholder:text-xs text-sm text-semigray focus-visible:!border-blue-500  focus-visible:!ring-[1px] focus-visible:bg-blue-50 "
              placeholder="Full Name"
              type="text"
              control={control}
              name="fullName"
              errors={errors}
            />
          </div>
          <div className="flex flex-col gap-1 ">
            <label className="text-xs font-[450] tracking-[0.5px]">Email</label>
            <Input
              className="border rounded-sm px-4 py-2 placeholder:text-xs text-sm text-semigray focus-visible:!border-blue-500  focus-visible:!ring-[1px] focus-visible:bg-blue-50"
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
            <Input
              className="border rounded-sm px-4 py-2 placeholder:text-xs text-sm text-semigray focus-visible:!border-blue-500  focus-visible:!ring-[1px] focus-visible:bg-blue-50"
              placeholder="Password"
              type="password"
              control={control}
              name="password"
              errors={errors}
            />
          </div>
        </div>
        <Button className="bg-gradient-to-br from-blue-500 to-blue-700 dark:from-blue-600 dark:to-blue-800 text-white ">
          Sign in
        </Button>
        <Text
          containerTag={Tags.Paragraph}
          className="text-xs text-center mt-1.5 font-[450] hover:text-blue-600 hover:underline cursor-pointer"
        >
          Forgot password?
        </Text>
      </form>
    </div>
  );
};

export default page;
