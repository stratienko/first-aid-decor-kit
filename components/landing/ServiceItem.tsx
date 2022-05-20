import { useIntersectionObserver } from "hooks/useIntersectionObserver";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import styles from "./landing.module.scss";

type Props = {
  service: TService;
};

export const ServiceItem = React.memo(({ service }: Props) => {
  const { description, disabled, previewSrc, serviceName, title } = service;

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
      className={"group opacity-0 scale-98 bg-white transition-all flex flex-col delay-75 shadow-lg overflow-hidden font-noto text-primary ".concat(
        isShown ? "animate-fade-in" : ""
      )}
    >
      <div>
        <Image
          src={previewSrc}
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
          <p className="mb-8">{description}</p>
        </div>
        {!disabled ? (
          <Link href={`/services/${serviceName}`} passHref>
            <button className="p-4 border border-primary text-lg">
              Детальніше
            </button>
          </Link>
        ) : null}
      </div>
    </li>
  );
});
