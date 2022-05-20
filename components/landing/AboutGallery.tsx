import Image from "next/image";
import React, { useCallback, useState } from "react";
import styles from "./landing.module.scss";
import { useIntersectionObserver } from "hooks/useIntersectionObserver";

export const AboutGallery = () => {
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
      className="w-full grid sm:grid-cols-2 gap-8 content-evenly"
    >
      <div
        className={"hidden sm:block opacity-0 scale-98 relative row-span-1 ".concat(
          isShown ? "animate-fade-in delay-animation" : ""
        )}
      >
        <Image
          priority={false}
          src="/images/gallery-image-1.jpeg"
          layout="responsive"
          height={1800}
          width={2400}
          alt=""
        />
      </div>
      <div
        className={"hidden sm:block opacity-0 scale-98 relative row-span-2 ".concat(
          isShown ? "animate-fade-in delay-animation" : ""
        )}
      >
        <Image
          priority={false}
          src="/images/gallery-image-2.jpeg"
          layout="responsive"
          height={3600}
          width={2400}
          alt=""
        />
      </div>
      <div
        className={"self-end opacity-0 scale-98 relative row-span-2 ".concat(
          isShown ? "animate-fade-in delay-animation" : ""
        )}
      >
        <Image
          priority={false}
          src="/images/gallery-image-3.jpeg"
          layout="responsive"
          height={3600}
          width={2400}
          alt=""
        />
      </div>
      <div
        className={"hidden sm:block opacity-0 scale-98 relative row-span-1 ".concat(
          isShown ? "animate-fade-in delay-animation" : ""
        )}
      >
        <Image
          priority={false}
          src="/images/gallery-image-4.jpeg"
          layout="responsive"
          height={1800}
          width={2400}
          alt=""
        />
      </div>
    </figure>
  );
};
