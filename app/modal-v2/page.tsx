"use client";

import Button from "@/components/Button";
import ModalV2 from "@/components/ModalV2";
import { useState } from "react";

const Page = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);

  return (
    <div>
      <Button
        onClick={() => {
          setOpen1(true);
        }}
      >
        打开
      </Button>

      <ModalV2
        title="ショッピングバッグ"
        open={open1}
        onCancel={() => {
          setOpen1(false);
        }}
        onOk={() => {
          setOpen1(false);
        }}
      >
        111
        <Button onClick={() => {
          setOpen2(true)
        }}>
          打开二
        </Button>
        <ModalV2
          title="标题二"
          open={open2}
          onCancel={() => {
            setOpen2(false);
          }}
          onOk={() => {
            setOpen2(false);
          }}
        >
          222
        </ModalV2>
      </ModalV2>
    </div>
  );
};

export default Page;
