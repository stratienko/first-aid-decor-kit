import For from "common/for";
import Head from "next/head";
import React from "react";
import { getServices } from "constants/services";
import { GetStaticPaths, GetStaticProps } from "next/types";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ServiceGallery } from "components/service";

type Props = {
  service?: TService;
  galleryPath: string;
};

export const getStaticProps: GetStaticProps<Props> = async (args) => {
  const { locale, params } = args;

  const service = params
    ? getServices().find(
        (service) => service.serviceName === params.serviceName
      )
    : undefined;

  const galleryPath = service ? `/images/services/${service.serviceName}` : "";

  const { _nextI18Next } = await serverSideTranslations(locale!);

  return {
    props: {
      _nextI18Next,
      galleryPath,
      service,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: false,
    paths: getServices()
      .filter(({ serviceName }) => serviceName !== "first-aid-decor-kit")
      .map(({ serviceName }) => {
        return {
          params: {
            serviceName,
          },
        };
      }),
  };
};

export const ServicePage = (props: Props) => {
  const { service, galleryPath } = props;

  if (!service) return null;

  const { algorithm, price, title } = service;

  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <main className="z-10 w-full flex flex-col justify-center items-center">
        <section className="w-full px-4 sm:px-8 flex flex-col justify-start items-center">
          <div className="py-8 sm:py-16 w-full max-w-360 font-noto text-primary overscroll-none">
            <h1 className="font-bold text-4xl md:text-6xl mb-8 sm:mb-16">
              {title}
            </h1>
            <article className="grid xl:grid-cols-2 gap-8 xl:gap-16 ">
              <div className="row-start-2 xl:row-start-1">
                <ol className="text-lg sm:text-xl sm:mb-8">
                  <For
                    items={algorithm}
                    render={(step, i) => {
                      const stepIndex = i + 1;
                      const showTitle = i === 0;

                      return (
                        <li
                          className="mb-8 break-inside-avoid"
                          key={step.concat(i.toString())}
                        >
                          {showTitle ? (
                            <p className="font-semibold text-2xl md:text-4xl mb-8">
                              Як це працює?
                            </p>
                          ) : null}
                          <span className="mr-4 w-8 h-8 overflow-hidden rounded-[50%] bg-primary inline-flex items-center justify-center text-sm text-white">
                            {stepIndex}
                          </span>
                          <span className="leading-loose">{step}</span>
                        </li>
                      );
                    }}
                  />
                </ol>
                {price ? (
                  <div className="mb-8 sm:mb-16 space-y-8">
                    <p className="font-semibold text-2xl md:text-4xl">
                      Скільки це коштує?
                    </p>
                    <p className="text-lg sm:text-xl">{price}</p>
                  </div>
                ) : null}
                <a
                  target="_blank"
                  about="Консультація"
                  href="https://t.me/vbalakireva"
                  className="block text-center w-full sm:w-1/2 p-4 border border-primary text-lg"
                  rel="noreferrer"
                >
                  Напишіть нам
                </a>
              </div>
              <div className="self-baseline xl:sticky xl:top-4">
                <ServiceGallery galleryPath={galleryPath} />
              </div>
            </article>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default ServicePage;
