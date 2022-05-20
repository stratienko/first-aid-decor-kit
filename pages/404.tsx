import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Page404 = () => {
  return (
    <main className="w-full flex flex-col justify-center items-center">
      <section className="h-full w-full px-4 py-8 sm:px-8 sm:py-16 flex items-center justify-center">
        <div className="w-full max-w-360 grid xl:grid-cols-2 gap-8 xl:gap-16">
          <article className="font-noto tracking-wider text-primary w-full xl:py-16 flex flex-col items-start">
            <h1 className="mb-8 xl:mb-16 text-4xl xl:text-6xl">Йой!</h1>
            <p className="mb-8 xl:mb-16 text-xl">
              Щось пішло не так! Схоже, що такої сторінки нема. Але не варто
              журитися, подивіться на котика та повертайтеся назад, як тільки
              будете готові!
            </p>
            <Link href={"/"} passHref>
              <button className="w-full sm:w-1/2 p-4 border border-primary text-lg">
                Додому
              </button>
            </Link>
          </article>
          <figure className="relative w-full opacity-0 scale-98 animate-fade-in">
            <Image
              alt="The best cat in the world"
              src={"/images/404.jpeg"}
              layout="responsive"
              height={2890}
              width={2890}
            />
          </figure>
        </div>
      </section>
    </main>
  );
};

export default Page404;
