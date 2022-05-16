import React from "react";
import { ServiceItem } from "./ServiceItem";

type Props = {
  services: Array<TService>;
};

export const Services = React.memo((props: Props) => {
  const { services } = props;

  return (
    <section className="bg-[#e5e5e5] w-full px-4 py-8 sm:px-8 sm:py-16 flex items-center justify-center">
      <div className="w-full max-w-360 flex flex-col justify-center items-center">
        <h1 className="w-full max-w-360 mb-8 sm:mb-16 text-4xl sm:text-6xl font-noto text-[#3f4241]">
          Наші послуги
        </h1>
        <ul className="w-full grid sm:grid-cols-services gap-8 lg:gap-16">
          {services.map((service, serviceIndex) => {
            return (
              <ServiceItem
                key={service.title.concat(serviceIndex.toString())}
                service={service}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
});
