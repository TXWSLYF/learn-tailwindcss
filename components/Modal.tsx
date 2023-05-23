import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";
import cn from "classnames";

type Props = {
  children: React.ReactNode;
  open: boolean;
  title: string;
  onOk?: () => void;
  onCancel?: () => void;
};

function Modal({ children, open, title, onOk, onCancel }: Props) {
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    if (open) {
      document.body.classList.add("overflow-hidden");
      setTimeout(() => {
        setActive(true);
      }, 10);
    } else {
      document.body.classList.remove("overflow-hidden");
      setTimeout(() => {
        setActive(false);
      }, 300);
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [mounted, open]);

  if (!mounted) return null;

  if (!open && !active) return null;

  return createPortal(
    <div>
      <div
        className={cn(
          "fixed left-0 right-0 top-0 bottom-0 bg-black opacity-0 transition-opacity duration-300",
          {
            "opacity-80": active && open,
          }
        )}
      ></div>

      <div
        className={cn(
          "bottom-0 w-full fixed bg-white rounded-t-lg md:w-[37.5rem] md:bottom-1/2 md:left-1/2 md:-translate-x-1/2 md:translate-y-1/2 opacity-0 transition-opacity duration-300",
          {
            "opacity-100": active && open,
          }
        )}
      >
        <div className="pl-8 pr-[5.5rem] h-14 flex items-center uppercase shadow-border-bottom">
          {title}
        </div>

        <button
          onClick={onCancel}
          className="absolute top-0 right-0 justify-center h-14 w-14 flex items-center rounded-tr-lg shadow-border-left hover:bg-[#eae8e4] transition"
        >
          <svg
            className="w-4 h-4"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 80 80"
          >
            <path
              fillRule="evenodd"
              d="M40 34.3L65.5 8.9l5.6 5.6L45.7 40l25.4 25.5-5.6 5.6L40 45.7 14.5 71.1l-5.6-5.6L34.3 40 8.9 14.5l5.6-5.6L40 34.3z"
            />
          </svg>
        </button>

        <div className="p-6">
          {children}
          <div className="mt-10 md:flex md:justify-between">
            <Button
              onClick={onOk}
              className="w-full md:w-[calc(50%-0.25rem)] mb-2 md:mb-0"
            >
              削除
            </Button>
            <Button
              onClick={onCancel}
              className="w-full md:w-[calc(50%-0.25rem)]"
              type="secondary"
            >
              キャンセル
            </Button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default Modal;
