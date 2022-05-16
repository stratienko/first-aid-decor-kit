import type { NextApiRequest, NextApiResponse } from "next";

const description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
molestiae sunt, porro totam reiciendis repellat nostrum tempora itaque
nihil vel rerum. Nostrum, rem id officia voluptatem ducimus quibusdam
eaque in. Repellat magnam maxime inventore vel ab, nihil commodi nam
rerum necessitatibus quaerat, voluptates earum nobis id? Accusamus
veritatis, sed nobis id non exercitationem officia quis, reprehenderit
nesciunt aliquam hic nam.`;

const services: Array<TService> = [
  {
    title: "Аналіз Вашого посудного гардеробу",
    description,
    imgSrc: "/images/articles/article-img-1.jpeg",
    link: "#",
  },
  {
    title: "Декорування приміщень",
    description,
    imgSrc: "/images/articles/article-img-2.jpeg",
    link: "#",
  },
  {
    title: "Експрес-консультація з декорування",
    description,
    imgSrc: "/images/articles/article-img-3.jpeg",
    link: "#",
  },
  {
    title: "Підготовка нерухомості до продажу або аренди",
    description,
    imgSrc: "/images/articles/article-img-4.jpeg",
    link: "#",
  },
  {
    title: "Декорування до свят",
    description,
    imgSrc: "/images/articles/article-img-5.jpeg",
    link: "#",
  },
  {
    title: "Реквізит для фотосесій",
    description,
    imgSrc: "/images/articles/article-img-6.jpeg",
    link: "#",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(services);
}
