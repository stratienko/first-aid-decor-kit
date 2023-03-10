import emailLogo from "public/icons/email.svg";
import Image from "next/image";
import instagramLogo from "public/icons/instagram.svg";
import React from "react";
import telegramLogo from "public/icons/telegram.svg";
import { IntroGallery } from "./IntroGallery";

export const Intro = () => {
  return (
    <section className="bg-secondary w-full px-4 py-8 sm:px-8 sm:py-16 flex items-center justify-center">
      <div className="w-full max-w-360 grid xl:grid-cols-2 gap-8 xl:gap-16">
        <article className="font-playfair tracking-wider text-primary row-start-2 xl:row-start-1 w-full flex flex-col justify-between items-start xl:py-8">
          <div className="w-full mb-8 xl:mb-16">
            <h1 className="mb-8 xl:mb-16 text-4xl xl:text-5xl 2xl:text-6xl font-bold">
              Ваш персональний декоратор інтер&apos;єру
            </h1>
            <p className="text-xl leading-relaxed">
              First Aid Decor — це проект, створений для тих, хто хоче додати
              більше естетики у кожен день та жити у затишку. Давайте
              знайомитись! Мене звуть Влада і вже 8 років я працюю із красою!
            </p>
          </div>
          <div className="w-full grid sm:grid-cols-2 gap-8 items-center text-xl sm:text-3xl text-primary">
            <p className="font-semibold text-2xl md:text-4xl">Консультація:</p>
            <div className="relative self-start flex justify-start items-center space-x-8">
              <a
                target="_blank"
                about="Email"
                href="mailto:fadk.info@gmail.com?subject=Консультація із декорування"
                className="inline-flex justify-center items-center border border-primary shadow-md p-4 sm:p-3"
                rel="noreferrer"
              >
                <Image
                  alt="Write An Email"
                  src={emailLogo}
                  layout="fixed"
                  height={32}
                  width={32}
                />
              </a>

              <a
                target="_blank"
                about="Instagram"
                href="https://www.instagram.com/vlada_stratienko/"
                className="inline-flex justify-center items-center border border-primary shadow-md p-4 sm:p-3"
                rel="noreferrer"
              >
                <Image
                  alt="Instagram Link"
                  src={instagramLogo}
                  layout="fixed"
                  height={32}
                  width={32}
                />
              </a>
              <a
                target="_blank"
                about="Telegram"
                href="https://t.me/vbalakireva"
                className="inline-flex justify-center items-center border border-primary shadow-md p-4 sm:p-3"
                rel="noreferrer"
              >
                <Image
                  alt="Telegram"
                  src={telegramLogo}
                  layout="fixed"
                  height={32}
                  width={32}
                />
              </a>
            </div>
          </div>
        </article>
        <div className="self-center">
          <IntroGallery />
        </div>
      </div>
    </section>
  );
};
