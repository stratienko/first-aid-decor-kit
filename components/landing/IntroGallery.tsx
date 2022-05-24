import { useIntersectionObserver } from "hooks/useIntersectionObserver";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import Intro1 from "public/images/intro-1.jpeg";
import Intro2 from "public/images/intro-2.jpeg";
import Intro3 from "public/images/intro-3.jpeg";
import Intro4 from "public/images/intro-4.jpeg";

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
        className={"opacity-0 scale-98 relative col-span-2 rounded-md ".concat(
          isShown ? "animate-fade-in delay-animation" : ""
        )}
      >
        <Image
          src={Intro1}
          sizes="50vw"
          priority={true}
          layout="responsive"
          height={2400}
          width={2400}
          alt="Intro"
        />
      </div>
      <div
        className={"opacity-0 scale-98 hidden sm:block relative col-span-3 ".concat(
          isShown ? "animate-fade-in delay-animation" : ""
        )}
      >
        <Image
          src={Intro2}
          sizes="50vw"
          priority={true}
          layout="fill"
          alt="Intro"
        />
      </div>
      <div
        className={"opacity-0 scale-98 hidden sm:block relative col-span-3 ".concat(
          isShown ? "animate-fade-in delay-animation" : ""
        )}
      >
        <Image
          src={Intro3}
          sizes="50vw"
          priority={true}
          layout="fill"
          alt="Intro"
        />
      </div>
      <div
        className={"opacity-0 scale-98 hidden sm:block relative col-span-2 ".concat(
          isShown ? "animate-fade-in delay-animation" : ""
        )}
      >
        <Image
          src={Intro4}
          sizes="50vw"
          priority={true}
          layout="responsive"
          height={2400}
          width={2400}
          alt="Intro"
        />
      </div>
    </figure>
  );
};
