import { useIntersectionObserver } from "hooks/useIntersectionObserver";
import Image from "next/image";
import styles from "./landing.module.scss";
import React, { useCallback, useState } from "react";

export const IntroGallery = () => {
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

  const figureElement = useIntersectionObserver<HTMLElement>(
    intersectionCallback,
    { threshold: [0.2] }
  );

  return (
    <figure
      ref={figureElement}
      className="grid sm:grid-cols-5 gap-8 content-evenly"
    >
      <div
        className={"opacity-0 relative col-span-2 ".concat(
          isShown ? styles["gallery-image"] : ""
        )}
      >
        <Image
          src="/images/intro-1.jpeg"
          layout="responsive"
          height={2400}
          width={2400}
          alt="Intro"
        />
      </div>
      <div
        className={"opacity-0 hidden sm:block relative col-span-3 ".concat(
          isShown ? styles["gallery-image"] : ""
        )}
      >
        <Image src="/images/intro-2.jpeg" layout="fill" alt="Intro" />
      </div>
      <div
        className={"opacity-0 hidden sm:block relative col-span-3 ".concat(
          isShown ? styles["gallery-image"] : ""
        )}
      >
        <Image src="/images/intro-3.jpeg" layout="fill" alt="Intro" />
      </div>
      <div
        className={"opacity-0 hidden sm:block relative col-span-2 ".concat(
          isShown ? styles["gallery-image"] : ""
        )}
      >
        <Image
          src="/images/intro-4.jpeg"
          layout="responsive"
          height={2400}
          width={2400}
          alt="Intro"
        />
      </div>
    </figure>
  );
};
