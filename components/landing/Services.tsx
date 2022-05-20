import React from "react";
import { ServiceItem } from "./ServiceItem";

type Props = {
  services: Array<TService>;
};

export const Services = React.memo((props: Props) => {
  const { services } = props;

  return (
    <section
      id="services"
      className="bg-secondary w-full px-4 sm:px-8 flex items-center justify-center"
    >
      <div className="py-8 xl:py-16 w-full max-w-360 flex flex-col justify-center items-center">
        <h1 className="w-full mb-8 xl:mb-16 text-4xl xl:text-6xl font-noto text-primary">
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
