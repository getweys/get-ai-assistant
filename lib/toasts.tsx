import { Toaster as SonnerToaster } from "sonner";

export function Toaster({
  expand = false,
  closeButton = true,
  richColors = true,
  duration = 2000,
} = {}) {
  return (
    <SonnerToaster
      theme="light"
      className="toaster group"
      position="top-right"
      expand={expand}
      closeButton={closeButton}
      richColors={richColors}
      duration={duration}
    />
  );
}
