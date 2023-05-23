"use client";

import Button from "@/components/Button";
import Modal from "@/components/Modal";
import { useState } from "react";

const Page = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div>111</div>
      <div>111</div>
      <div>111</div>
      <div>111</div>
      <div>111</div>
      <div>111</div>
      <div>111</div>
      <div>111</div>
      <div>111</div>
      <div>111</div>
      <div>111</div>
      <div>111</div>
      <div>111</div>
      <div>111</div>
      <div>111</div>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        打开
      </Button>
      <div>111</div>
      <div>111</div>
      <div>111</div>
      <div>111</div>
      <div>111</div>
      <div>111</div>
      <div>111</div>
      <div>111</div>
      <div>111</div>
      <div>111</div>
      <div>111</div>
      <div>111</div>
      <div>111</div>
      <div>111</div>
      <div>111</div>
      <div>111</div>
      <div>111</div>
      <div>111</div>
      <div>111</div>
      <div>111</div>
      <div>111</div>
      <div>111</div>
      <div>111</div>
      <div>111</div>
      <div>111</div>
      <div>111</div>
      <div>111</div>
      <div>111</div>
      <div>111</div>
      <div>111</div>
      <div>111</div>
      <div>111</div>
      <div>111</div>
      <div>111</div>
      <div>111</div>
      <div>111</div>
      <div>111</div>

      <Modal
        open={open}
        title="ショッピングバッグ"
        onOk={() => {
          setOpen(false);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      >
        modal content
      </Modal>
    </div>
  );
};

export default Page;
