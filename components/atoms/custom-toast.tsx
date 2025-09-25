import React, { useEffect } from "react";

import { IoMdCheckmarkCircle, IoMdClose } from "react-icons/io";
import { MdError, MdInfo, MdWarning } from "react-icons/md";

import { ToastEnumType } from "@/types/enums/toast-enum";
import { cn } from "@/lib/utils";

interface CustomToastProps {
  type?: ToastEnumType;
  title?: string;
  message: string;
  isVisible: boolean;
  onClose: () => void;
  autoClose?: boolean;
  duration?: number;
}

function CustomToast({
  type = ToastEnumType.SUCCESS,
  title,
  message,
  isVisible,
  onClose,
  autoClose = false,
  duration = 3000,
}: CustomToastProps) {
  useEffect(() => {
    if (autoClose && isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [autoClose, isVisible, duration, onClose]);

  if (!isVisible) return null;

  const getToastConfig = () => {
    switch (type) {
      case ToastEnumType.SUCCESS:
        return {
          icon: <IoMdCheckmarkCircle className="h-12 w-12 text-white" />,
          iconBg: "bg-primary",
          title: title || "Success",
        };
      case ToastEnumType.ERROR:
        return {
          icon: <MdError className="h-12 w-12 text-white" />,
          iconBg: "bg-red",
          title: title || "Error",
        };
      case ToastEnumType.WARNING:
        return {
          icon: <MdWarning className="h-12 w-12 text-white" />,
          iconBg: "bg-orange",
          title: title || "Warning",
        };
      case ToastEnumType.INFO:
        return {
          icon: <MdInfo className="h-12 w-12 text-white" />,
          iconBg: "bg-light-secondary",
          title: title || "Info",
        };
      default:
        return {
          icon: <IoMdCheckmarkCircle className="h-12 w-12 text-white" />,
          iconBg: "bg-primary",
          title: title || "Success",
        };
    }
  };

  const config = getToastConfig();

  return (
    <>
      <div className="bg-opacity-50 animate-fade-in bg-toast-bg fixed inset-0 z-50" />

      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="animate-bounce-in shadow-toast mx-auto w-full max-w-sm min-w-[460px] rounded-2xl bg-white">
          <button
            onClick={onClose}
            className="text-gray-dark hover:text-text-black absolute top-4 right-4 cursor-pointer p-1 duration-200 hover:rotate-180"
            aria-label="Close"
          >
            <IoMdClose className="h-6 w-6" />
          </button>

          <div className="p-6 text-center">
            <div
              className={cn(
                "mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full",
                config.iconBg
              )}
            >
              {config.icon}
            </div>

            <h3 className="font-outfit-semi-bold text-text-black mb-1.5 text-xl">
              {config.title}
            </h3>

            <p className="text-text-gray font-outfit-regular text-base leading-relaxed">
              {message}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomToast;
