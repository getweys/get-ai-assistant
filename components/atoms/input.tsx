import { cn } from "@/lib/utils";
import {
  Control,
  Controller,
  FieldErrors,
  FieldPath,
  FieldValues,
} from "react-hook-form";
interface InputProps<T extends FieldValues = FieldValues> {
  className: string;
  type?: "password" | "text";
  placeholder?: string;
  name: FieldPath<FieldValues>;
  control: Control<any>;
  errors: FieldErrors<T>;
}

function Input({
  className,
  type,
  name,
  control,
  placeholder,
  errors,
}: InputProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div>
          <input
            type={type}
            data-slot="input"
            placeholder={placeholder}
            className={cn(
              "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
              "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
              className,
              {
                " focus-visible:bg-red-50 focus-visible:!border-red-500 border-red-500 bg-red-50":
                  errors?.[name]?.message,
              }
            )}
            name={field.name}
            onChange={field.onChange}
            value={field.value}
          />
          <span className="text-[10px] text-red-500 tracking-[0.2px] font-medium">
            {errors ? (errors?.[name]?.message as string) : null}
          </span>
        </div>
      )}
    />
  );
}

export { Input };
