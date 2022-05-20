import React from "react";
import { AboutGallery } from "./AboutGallery";

export const About = () => {
  return (
    <section
      id="about"
      className="w-full px-4 sm:px-8 flex items-center justify-center"
    >
      <div className="py-8 sm:py-16 w-full max-w-360 grid xl:grid-cols-2 gap-8 xl:gap-16">
        <AboutGallery />
        <article className="font-noto tracking-wider text-primary xl:py-16">
          <div className="w-full space-y-8 xl:space-y-16">
            <h1 className="text-4xl xl:text-6xl">Про нас</h1>
            <div className="space-y-8">
              <p className="text-lg">
                Я творила як флорист, event-декоратор та рік навчалась історії
                мистецтв у Англії. Окрім мене, у проекті працює невеличка
                команда. Спеціалісти з озеленення, пошиву текстилю, виробництва
                предметів інтер’єру та посуду, флористи, фотографи, митці та
                технічні працівники. Ми можемо все! Онлайн та офлайн.
              </p>
              <p className="text-lg">
                Проект <b>First Aid Decor</b> співпрацює не тільки із приватними
                клієнтами та ріелторськими агенціями, а ще й із брендами декору,
                шоурумами та виробництвами. Допомагаємо із предметними зйомками
                та візуалом, а також співпрацюємо у рамках проекту{" "}
                <b>First Aid Decor Kit</b> (готові набори предметів для
                декорування осель).
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
