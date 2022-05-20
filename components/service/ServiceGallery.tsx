import React from "react";
import Image from "next/image";

type Props = {
  galleryPath: string;
};

export const ServiceGallery = (props: Props) => {
  const { galleryPath } = props;

  return (
    <figure className="grid gap-8 sm:grid-cols-2">
      <div className="relative opacity-0 scale-98 animate-fade-in delay-animation row-span-1">
        <Image
          src={`${galleryPath}/preview.jpeg`}
          alt="Service Preview"
          layout="responsive"
          height={2400}
          width={2400}
        />
      </div>
      <div className="relative opacity-0 scale-98 animate-fade-in delay-animation hidden row-span-2 sm:block">
        <Image
          src={`${galleryPath}/gallery-1.jpeg`}
          alt="Service Preview"
          layout="responsive"
          height={3600}
          width={2400}
        />
      </div>
      <div className="relative opacity-0 scale-98 animate-fade-in delay-animation hidden row-span-2 sm:block">
        <Image
          src={`${galleryPath}/gallery-2.jpeg`}
          alt="Service Preview"
          layout="responsive"
          height={3600}
          width={2400}
        />
      </div>
      <div className="relative opacity-0 scale-98 animate-fade-in delay-animation hidden row-span-1 sm:block">
        <Image
          src={`${galleryPath}/gallery-3.jpeg`}
          alt="Service Preview"
          layout="responsive"
          height={2400}
          width={2400}
        />
      </div>
    </figure>
  );
};
