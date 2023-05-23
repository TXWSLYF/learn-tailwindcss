import cn from "classnames";

type Props = {
  children: React.ReactNode;
  type?: "primary" | "secondary";
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
};

const Button = ({ type = "primary", className, children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={cn(className, "text-xs leading-none px-6 py-4 transition", {
        "bg-[#19110b] text-white hover:bg-[#eae8e4] hover:text-[#19110b] ":
          type === "primary",
        "text-[#19110b] shadow-border-secondary-button hover:bg-[#eae8e4] hover:shadow-border-secondary-button-hover":
          type === "secondary",
      })}
    >
      {children}
    </button>
  );
};

export default Button;
