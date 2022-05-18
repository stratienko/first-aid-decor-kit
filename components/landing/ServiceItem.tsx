import { useIntersectionObserver } from "hooks/useIntersectionObserver";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import styles from "./landing.module.scss";

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
    { threshold: [0.25] }
  );

  return (
    <li
      ref={listElement}
      className={"opacity-0 bg-white transition-all flex flex-col delay-75 shadow-md sm:hover:shadow-xl font-noto text-primary ".concat(
        isShown ? styles["service-item"] : ""
      )}
    >
      <div>
        <Image
          src={imgSrc}
          priority={false}
          alt="Article Image"
          width={2400}
          height={2400}
          layout="responsive"
        />
      </div>
      <div className="flex-1 flex flex-col justify-between p-8 tracking-wider">
        <div>
          <h1 className="mb-8 font-bold text-2xl">{title}</h1>
          <p className="mb-8 line-clamp-6">{description}</p>
        </div>
        <Link href={link} passHref>
          <button className="p-4 border border-primary text-lg">
            Детальніше
          </button>
        </Link>
      </div>
    </li>
  );
});
