export const getServices = (): Array<TService> => {
  const algorithm: string[] = [];

  const services: Array<TService> = [
    {
      algorithm: [
        "Ви пишете нам, ми домовляємося про час та зручний для Вас месенджер, у якому проведемо консультацію. До того ж, всі послуги надаються не тільки онлайн, ми можемо виїхати до Вас.",
        "Перед консультацією Ви надсилаєте фото та (або) пишете усі Ваші запитання, щоб декоратор був готовий до зустрічі з Вами.",
        "Ми проводимо консультацію. Після неї Ви отримуєте список необхідних дій та коллаж із декором, меблями та іншими дрібницями, стосовно Вашої оселі.",
        "Ви отримуєте усі відповіді, рекомендаціі та починаєте самостійну роботу над створенням затишку та краси!",
      ],
      description:
        "Час щось змінити! Отримайте швидкий аналіз інтер'єру, виявіть його сильні та слабкі риси, отримайте рекомендації щодо придбання декору чи меблів.",
      previewSrc: "/images/services/consulting/preview.jpeg",
      price: "500 гривень. Офлайн консультація - індивідуально.",
      serviceName: "consulting",
      title: "Експрес-консультація з декорування",
    },
    {
      algorithm: [
        "Ви пишете нам та висилаєте фото кімнати, зони або декількох кімнат, яки ви хочете переробити або підібрати оздоблення, тощо.",
        "Фото мають бути у декількох ракурсах; з денним та штучним світлом.",
        "Розповідаєте який функціонал приміщення, що Вам не подобається зараз, щоб хотіли та чого очікуєте від співпраці.",
        "Разом із декоратором вибираєте стилістику, що подобається та бюджет на зміни.",
        "Також Ви можете замовити послугу офлайн та зустрітися з нами на об’єкті.",
        "Після цього декоратор робить муд борд, коллаж та презентує свою ідею. Тривалість цього процесу 2-4 дні.",
        "Ви отримуєте документ, у якому будуть зібрані та детально розписані усі ідеї, щодо розташування меблів, вибору цих меблів, предметів декору, рослин і всьго, що потрібно саме Вам.",
        "Ви отримуєте таблицю із посиланнями на купівлю декору та інших товарів, які були запропоновані декоратором.",
        "Якщо ви не готові придбати усе одразу, спеціаліст видилить кроки, які треба виконати першочергово.",
        "У процесі роботи є 2 консультації із декоратором, caме оздоблення та закупівлю Ви робите самостійно.",
        "Всі кроки може виконати декоратор, це віришується на почтаку співпраці.",
      ],
      description:
        "Від ідеї до втілення працюємо пліч-о-пліч для досягнення найкращого результату. Кожен проект індивідуальний, це може бути окрема кімната або увесь будинок.",
      previewSrc: "/images/services/house-decoration/preview.jpeg",
      price:
        "Від 1500 гривень за 1 зону (кімнату). Для іншої кількості кімнат та офлайн декорування під ключ вартість розраховується індивідуально.",
      serviceName: "house-decoration",
      title: "Декорування Вашої оселі під ключ",
    },
    {
      algorithm: [
        "Ви пишете нам, надсилаєте фото Вашого об’єкту та ставите завдання.",
        "Якщо ви готуєте до оренди чи продажу житло на вторинному ринку нерухомості, ми вирішуємо які предмети треба вивезти, чи потрібно робити косметичний ремонт (найчастіше – ми міняємо колір стін), вирішуємо, що саме треба буде придбати.",
        "Визначаємо бюджет.",
        "Ви отримуєте список необхідного, із усіма посиляннями. За домовленістю наша команда робить закупівлю, їде на об’єкт, декорує та робить зйомку для оголошення.",
        "Якщо ви готуєте до оренди чи продажу житло у новобудові, то найкращій варіант – скористатись нашою консультацією та одразу купити необхідні предмети, які найліпше підійдуть для презентаціі саме Вашого об’єкту.",
      ],
      description:
        "Зробіть Ваше оголошення помітним! Вартість задекорованної та охайної оселі завжди вища, бо платять не за квадратні метри, а за відчуття.",
      previewSrc: "/images/services/property-preparation/preview.jpeg",
      price: "Вартість послуги залежить від об’єму роботи.",
      serviceName: "property-preparation",
      title: "Підготовка житла до оренди чи продажу",
    },
    {
      algorithm: [
        "Ми допомагаємо з декоруванням не тільки домівкам, а ще й магазинам, офісам та ресторанам, кав’ярням.",
        "Ви пишете нам та озвучуєте свої побажання: підготувати сезонний декор для Вашої домівки, зробити добірку та декорування на загальновизнані свята або для вашого індивідуального свята.",
        "Сезонний декор оселі: ми підбираємо декор в залежності від сезону,щоб підкреслити красу кожної пори року, декор до загальновизнаних свят: найпопулярніші – це Новий рік та Великдень.",
        "Ми проводимо онлайн консультацію або зустрічаємось та вирішуємо які зони треба прикрасити, які побажання та який бюджет на зміни. Якщо це свята, ми можемо додати сервирування, флористику, тощо.",
        "Ми можемо підготувати ідеї для самостійного прикрашання оселі чи домовитись, щоб усе зробила наша команда.",
        "Ви отримуєте презентацію ідеї від декоратора. Після цього ми готуємо список необхідних предметів, остаточно затверджуємо бюджет та приступаємо до роботи.",
      ],
      description:
        "Нехай свято буде незабутнім! Щоб зробити красиву сервіровку або прикрасити увесь дім квітами, приводи не потрібні, лише декоратор.",
      previewSrc: "/images/services/holiday-decoration/preview.jpeg",
      price: "Від 2000 гривень",
      serviceName: "holiday-decoration",
      title: "Святкове декорування та сервіровка",
    },
    {
      algorithm: [
        "Ви пишете нам та кажете, що саме хочете зробити: підбір посуду, аксесуарів, текстилю та девайсів з 0 або розібрати вже наявний посуд.",
        "Потім ми проводимо консультацію, вирішуємо у якому напрямі рухаємось, обговорюємо бюджет на зміни і починаємо роботу.",
        "Якщо в Вас вже є столовий гардероб, ми можемо його змінити або доповнити та зробити для Вас сервірувальні сети.",
        "Декоратор надсилає Вам колажі та список посилань на придбання посуду, аксесуарів, текстилю та девайсів.",
        "Розбироємо основи сервірування столу.",
        "Збираємо сервіровочні луки на кожен день та на свята.",
        "Послугу можна зробити повністю під кюч, все закуповує та привозить команда (звісно ж, з погодження клієнта).",
      ],
      description:
        "Правильно підібраний посуд допоможе Вам створювати неймовірні сервірування кожного дня.",
      previewSrc: "/images/services/dining-room-wardrobe/preview.jpeg",
      price: "Від 1500 гривень",
      serviceName: "dining-room-wardrobe",
      title: "Створення столового гардеробу",
    },
    {
      algorithm,
      description:
        "Готові набори для декорування оселі та сервіровок. Кожен набір унікальний, тож не зволікайте та встигніть придбати той, що більше всього сподобався!",
      disabled: true,
      previewSrc: "/images/services/first-aid-decor-kit/preview.jpeg",
      price: "",
      serviceName: "first-aid-decor-kit",
      title: "First Aid Decor Kit",
    },
  ];

  return services;
};
