import ShimmerButton from "@/components/magicui/shimmer-button";
import React from "react";

const ShimmerButtonDemo = () => {
  return (
    <div className="z-10 flex justify-center sm:justify-start">
      <a href="/contact">
      <ShimmerButton className="shadow-2xl">
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          Solicitar Demo
        </span>
      </ShimmerButton>
      </a>
    </div>
  );
}

export default ShimmerButtonDemo;
