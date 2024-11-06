import React from "react";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="max-w-6xl mx-auto my-10">
        <div className="grid grid-cols-3 gap-4">
          <div className="shadow-sm border-slate-50 rounded p-5">1</div>
          <div className="shadow-sm border-slate-50 rounded p-5">1</div>
          <div className="shadow-sm border-slate-50 rounded p-5">1</div>
        </div>
      </div>
    </>
  );
}
