import emailLogo from "public/icons/email.svg";
import For from "common/for";
import Head from "next/head";
import Image from "next/image";
import instagramLogo from "public/icons/instagram.svg";
import React from "react";
import telegramLogo from "public/icons/telegram.svg";
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
          <div className="py-8 sm:py-16 w-full max-w-360 font-playfair text-primary overscroll-none">
            <h1 className="font-bold text-4xl md:text-6xl mb-8 sm:mb-16">
              {title}
            </h1>
            <article className="grid xl:grid-cols-2 gap-8 xl:gap-16 leading-relaxed">
              <div className="row-start-2 xl:row-start-1">
                <ol className="sm:mb-8">
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
                          <span className="mr-4 w-8 h-8 overflow-hidden rounded-[50%] bg-primary inline-flex items-center justify-center font-sans text-white">
                            {stepIndex}
                          </span>
                          <span className="text-xl leading-loose">{step}</span>
                        </li>
                      );
                    }}
                  />
                </ol>
                {price ? (
                  <div className="mb-8 space-y-8">
                    <p className="font-semibold text-2xl md:text-4xl">
                      Скільки це коштує?
                    </p>
                    <p className="text-xl leading-loose">{price}</p>
                  </div>
                ) : null}
                <div className="w-full grid sm:grid-cols-2 gap-8 items-center text-xl sm:text-3xl text-primary">
                  <p className="font-semibold text-2xl md:text-4xl">
                    Консультація:
                  </p>
                  <div className="relative self-start flex justify-start items-center space-x-8">
                    <a
                      target="_blank"
                      about="Email"
                      href={`mailto:fadk.info@gmail.com?subject=${service.title}`}
                      className="inline-flex justify-center items-center border border-primary shadow-md p-3"
                      rel="noreferrer"
                    >
                      <Image
                        alt="Write An Email"
                        src={emailLogo}
                        layout="fixed"
                        height={32}
                        width={32}
                      />
                    </a>
                    <a
                      target="_blank"
                      about="Instagram"
                      href="https://www.instagram.com/v_balakireva/"
                      className="inline-flex justify-center items-center border border-primary shadow-md p-3"
                      rel="noreferrer"
                    >
                      <Image
                        alt="Instagram Link"
                        src={instagramLogo}
                        layout="fixed"
                        height={32}
                        width={32}
                      />
                    </a>
                    <a
                      target="_blank"
                      about="Telegram"
                      href="https://t.me/vbalakireva"
                      className="inline-flex justify-center items-center border border-primary shadow-md p-3"
                      rel="noreferrer"
                    >
                      <Image
                        alt="Telegram"
                        src={telegramLogo}
                        layout="fixed"
                        height={32}
                        width={32}
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="self-baseline">
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
