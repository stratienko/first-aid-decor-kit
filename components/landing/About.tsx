import Link from "next/link";
import React from "react";
import { Gallery } from "./Gallery";

export const About = () => {
  return (
    <section className="w-full px-4 py-8 sm:px-8 sm:py-16 flex items-center justify-center">
      <div className="w-full max-w-360 grid lg:grid-cols-2 gap-8 sm:gap-16">
        <Gallery />
        <article className="font-noto tracking-wider text-[#3f4241] lg:py-16 flex flex-col justify-between items-end">
          <div className="w-full mb-8">
            <h1 className="mb-8 sm:mb-16 text-4xl sm:text-6xl">Про нас</h1>
            <p className="sm:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae nulla quaerat, dolorem quibusdam ipsa animi nisi
              nostrum explicabo magnam totam dignissimos perferendis ut ipsam
              optio a illo recusandae fugit cupiditate. Pariatur neque dolores
              impedit consequuntur non laboriosam a iste laudantium
              voluptatibus, quis accusamus sequi quidem vel doloribus
              perspiciatis laborum corporis facilis velit culpa eum at. Eaque
              debitis natus quod aliquid. Expedita voluptatum, corrupti quos
              veniam eum neque iste aliquid accusamus at rerum labore?
            </p>
          </div>
          <Link href={"#"} passHref>
            <button className="w-full sm:w-1/2 p-4 border border-gray-400 bg-[#e5e5e5]">
              Детальніше
            </button>
          </Link>
        </article>
      </div>
    </section>
  );
};
