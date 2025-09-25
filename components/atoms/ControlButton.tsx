import { cn } from "@/lib/utils";

interface ButtonProps {
  title: string;
  extraClasses?: string;
  icon?: React.ReactNode;
  iconStyles?: string;
  type?: "button" | "reset" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}

const ControlButton = ({
  title,
  extraClasses,
  icon,
  iconStyles,
  type,
  onClick,
  disabled,
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "group flex w-full cursor-pointer items-center justify-center gap-[6px] rounded-md bg-[#054EBA] py-2 duration-500",
        icon &&
          "bg-slate-100 hover:bg-[#054EBA] hover:text-white dark:bg-dark-input-bg dark:text-white dark:border-dark-border dark:border-1  dark:hover:shadow-blue-400 dark:hover:shadow-sm  dark:transition-all dark:duration-300 ",
        extraClasses,
        disabled && "bg-blue-300"
      )}
      disabled={disabled}
      type={type ? type : "button"}
      onClick={onClick}
    >
      <span className={cn("group-hover:text-inherit ", iconStyles)}>
        {icon}
      </span>
      <span className="text-sm dark:text-white dark:group-hover:text-inherit ">
        {title}
      </span>
    </button>
  );
};

export default ControlButton;
