"use client";

import CardProduct from "@/components/CardProduct";
import { useState } from "react";
import Drawer from "react-modern-drawer";
import React from "react";
import "react-modern-drawer/dist/index.css";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <main className="px-4 pb-10 flex space-y-6 flex-col items-center">
      <Drawer
        size={"100vw"}
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        style={{ background: "rgba(255,255,255,0.95)" }}
      >
        <div className="p-4 pt-11">
          <div className="flex justify-between items-center">
            <span className="font-medium">Сагс</span>
            <div
              onClick={toggleDrawer}
              className="w-10 h-10 cursor-pointer hover:opacity-70 rounded-md flex items-center justify-center bg-slate-900"
            >
              <img className="w-5 " src="./x.svg" alt="" />
            </div>
          </div>
        </div>
      </Drawer>
      <div className="flex justify-between items-center w-full">
        <div className="w-10"></div>
        <img
          src="/logo.jpg"
          alt="logo"
          className="w-20 h-20 shadow-md rounded-full"
        />
        <div
          onClick={toggleDrawer}
          className="w-10 h-10 cursor-pointer hover:opacity-70 rounded-md flex items-center justify-center bg-slate-900"
        >
          <img className="w-5" src="./shopping-cart.svg" alt="" />
        </div>
      </div>
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
    </main>
  );
}
