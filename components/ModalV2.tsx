import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Button from "./Button";

type Props = {
  children: React.ReactNode;
  open: boolean;
  title: string;
  onOk?: () => void;
  onCancel?: () => void;
};

const ModalV2 = ({ children, title, open, onCancel, onOk }: Props) => {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={onCancel || (() => {})}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-80" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300 transition-all"
              enterFrom="opacity-0 translate-y-full"
              enterTo="opacity-100 translate-y-0 md:translate-y-1/2"
              leave="ease-in duration-300 transition-all"
              leaveFrom="opacity-100 translate-y-0 md:translate-y-1/2"
              leaveTo="opacity-0 translate-y-full"
            >
              <Dialog.Panel className="fixed bottom-0 rounded-t-lg w-full md:max-w-xl transform overflow-hidden bg-white text-left align-middle shadow-xl md:bottom-1/2 md:left-1/2 md:-translate-x-1/2">
                <Dialog.Title
                  as="div"
                  className="pl-8 pr-[5.5rem] h-14 flex items-center uppercase shadow-border-bottom"
                >
                  {title}
                </Dialog.Title>

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
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ModalV2;
