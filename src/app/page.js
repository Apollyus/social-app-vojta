import React from "react";
import AsideNav from "@/components/AsideNav";
import AsideSug from "@/components/AsideSug";

export default function Home() {
  return (
    <div className="flex">
      <AsideNav className="w-1/4" />
      <div className="flex-1 flex justify-center items-center">
        <h1>Home</h1>
      </div>
      <AsideSug className="w-2/4" />
    </div>
  );
}