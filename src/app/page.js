"use client";

import CardProduct from "@/components/CardProduct";
import { useState } from "react";
import Drawer from "react-modern-drawer";
import React from "react";
import "react-modern-drawer/dist/index.css";
import IconButton from "@/components/IconButton";

export default function Home() {
  const [isOpenBasket, setIsOpenBasket] = useState(false);
  const toggleDrawer = () => {
    setIsOpenBasket((prevState) => !prevState);
  };

  return (
    <main className="px-4 pb-10 flex space-y-6 flex-col items-center">
      <BasketDrawer isOpen={isOpenBasket} toggleDrawer={toggleDrawer} />
      <div className="flex justify-between items-center w-full">
        <div className="w-10"></div>
        <img src="/logo.png" alt="logo" className="h-14 rounded-full" />
        <IconButton onClick={toggleDrawer} src="./shopping-cart.svg" />
      </div>
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
    </main>
  );
}

function BasketDrawer({ isOpen, toggleDrawer }) {
  return (
    <Drawer
      size={"100vw"}
      open={isOpen}
      onClose={toggleDrawer}
      direction="right"
      style={{ background: "rgba(255,255,255,0.95)" }}
    >
      <div className="p-4 max-w-[600px] mx-auto pt-8">
        <div className="flex justify-between items-center">
          <span className="font-medium">Сагс</span>
          <IconButton onClick={toggleDrawer} src="./x.svg" />
        </div>
      </div>
    </Drawer>
  );
}
