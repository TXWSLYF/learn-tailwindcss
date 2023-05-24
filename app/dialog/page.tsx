"use client";

import Button from "@/components/Button";
import Dialog from "@/components/Dialog";
import { useState } from "react";

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(false);
  let [isOpen2, setIsOpen2] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div>

      <Dialog closeModal={closeModal} isOpen={isOpen}>
        <Button
          onClick={() => {
            setIsOpen2(true);
          }}
        >
          打开第二个弹窗
        </Button>

        <Dialog
          closeModal={() => {
            setIsOpen2(false);
          }}
          isOpen={isOpen2}
        ></Dialog>
      </Dialog>
    </>
  );
}
