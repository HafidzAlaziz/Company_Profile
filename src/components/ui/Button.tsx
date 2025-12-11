import { ButtonHTMLAttributes, FC } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline" | "white";
}

const Button: FC<ButtonProps> = ({ className, variant = "primary", ...props }) => {
    const variants = {
        primary: "bg-primary text-black hover:bg-white hover:text-black",
        outline: "border border-primary text-primary hover:bg-primary hover:text-black",
        white: "bg-white text-black hover:bg-primary hover:text-black",
    };

    return (
        <button
            className={cn(
                "px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 active:scale-95",
                variants[variant],
                className
            )}
            {...props}
        />
    );
};

export default Button;
