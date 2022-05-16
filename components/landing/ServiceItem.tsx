import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Services.module.scss";

type Props = {
  service: TService;
};

export const ServiceItem = React.memo(({ service }: Props) => {
  const { description, imgSrc, link, title } = service;

  return (
    <li
      className={`
        ${styles["fade-in"]} opacity-0 bg-white transition-all flex flex-col delay-75 
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
          <h3 className="mb-8 font-bold">{title}</h3>
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
