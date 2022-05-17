import { useIntersectionObserver } from "hooks/useIntersectionObserver";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import styles from "./Services.module.scss";

type Props = {
  service: TService;
};

export const ServiceItem = React.memo(({ service }: Props) => {
  const { description, imgSrc, link, title } = service;

  const [isShown, setIsShown] = useState(false);

  const intersectionCallback: IntersectionObserverCallback = useCallback(
    (entries, observer) => {
      const [target] = entries;

      if (target.isIntersecting) {
        setIsShown(true);

        observer.disconnect();
      }
    },
    []
  );

  const listElement = useIntersectionObserver<HTMLLIElement>(
    intersectionCallback,
    { threshold: [0.2] }
  );

  return (
    <li
      ref={listElement}
      className={`
        ${
          isShown ? styles["fade-in"] : ""
        } opacity-0 bg-white transition-all flex flex-col delay-75 
        shadow-md sm:hover:shadow-xl font-noto text-[#3f4241]
      `}
    >
      <div>
        <Image
          src={imgSrc}
          priority={false}
          alt="Article Image"
          width={240}
          height={160}
          layout="responsive"
        />
      </div>
      <div className="flex-1 flex flex-col justify-between p-8 tracking-wider">
        <div>
          <h1 className="mb-8 font-bold">{title}</h1>
          <p className="mb-8 line-clamp-6">{description}</p>
        </div>
        <Link href={link} passHref>
          <button className="p-4 border border-gray-400 bg-[#e5e5e5]">
            Детальніше
          </button>
        </Link>
      </div>
    </li>
  );
});
