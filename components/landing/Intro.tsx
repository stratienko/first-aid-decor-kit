import Link from "next/link";
import React from "react";
import { IntroGallery } from "./IntroGallery";

export const Intro = () => {
  return (
    <section className="bg-[#e5e5e5] w-full px-4 py-8 sm:px-8 sm:py-16 flex items-center justify-center">
      <div className="w-full max-w-360 grid lg:grid-cols-2 gap-8 sm:gap-16">
        <article className="font-noto tracking-wider text-[#3f4241] row-start-2 lg:row-start-1 w-full lg:py-16 flex flex-col justify-between items-start">
          <div className="w-full mb-8 sm:mb-16">
            <h1 className="mb-8 sm:mb-16 text-4xl lg:text-6xl">
              Ваш найкращий декоратор інтер&apos;єру
            </h1>
            <p className="sm:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae nulla quaerat, dolorem quibusdam ipsa animi nisi
              nostrum explicabo magnam totam dignissimos perferendis ut ipsam
              optio a illo recusandae fugit cupiditate.
            </p>
          </div>
          <Link href={"#"} passHref>
            <button className="w-full sm:w-1/2 p-4 border border-gray-400 bg-white">
              Детальніше
            </button>
          </Link>
        </article>
        <IntroGallery />
      </div>
    </section>
  );
};
