import React from "react";
import { IntroGallery } from "./IntroGallery";

export const Intro = () => {
  return (
    <section className="bg-secondary w-full px-4 py-8 sm:px-8 sm:py-16 flex items-center justify-center">
      <div className="w-full max-w-360 grid xl:grid-cols-2 gap-8 xl:gap-16">
        <article className="font-playfair tracking-wider text-primary row-start-2 xl:row-start-1 w-full xl:py-16 flex flex-col justify-between items-start">
          <div className="w-full mb-8 xl:mb-16">
            <h1 className="mb-8 xl:mb-16 text-4xl xl:text-6xl font-bold">
              Ваш персональний декоратор інтер&apos;єру
            </h1>
            <p className="text-xl leading-relaxed">
              First Aid Decor — це проект, створений для тих, хто хоче додати
              більше естетики у кожен день та жити у затишку. Давайте
              знайомитись! Мене звуть Влада і вже 8 років я працюю із красою!
            </p>
          </div>
          <a
            target="_blank"
            about="Консультація"
            href="https://t.me/vbalakireva"
            className="text-center w-full sm:w-1/2 p-4 border border-primary text-xl sm:text-lg font-semibold"
            rel="noreferrer"
          >
            Консультація
          </a>
        </article>
        <IntroGallery />
      </div>
    </section>
  );
};
