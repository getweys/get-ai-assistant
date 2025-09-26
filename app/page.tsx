"use client";

import { redirect } from "next/navigation";
import { appRoutes } from "@/lib/routes";

export default function page() {
  return redirect(appRoutes.signin);
}
