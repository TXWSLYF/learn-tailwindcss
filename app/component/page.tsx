"use client";

import Button from "@/components/Button";
import Modal from "@/components/Modal";
import { useState } from "react";

const Page = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

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
        <Button onClick={() => {
          setOpen2(true)
        }}>
          打开第二个弹窗
          
        </Button>
        <Modal
            open={open2}
            title="ショッピングバッグ"
            onOk={() => {
              setOpen2(false);
            }}
            onCancel={() => {
              setOpen2(false);
            }}
          >
            我是第二个弹窗
          </Modal>
      </Modal>
    </div>
  );
};

export default Page;
