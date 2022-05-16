import Image from "next/image";
import React from "react";

export const About = () => {
  return (
    <section className="w-full px-4 py-8 sm:px-8 sm:py-16 flex items-center justify-center">
      <div className="w-full max-w-360 grid sm:grid-cols-2 gap-8">
        <figure className="flex flex-wrap"></figure>
        <article className="font-noto">
          <h1 className="text-2xl text-[#3f4241]">Про мене</h1>
        </article>
      </div>
    </section>
  );
};
