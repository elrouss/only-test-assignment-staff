import { TTimeline } from 'utils/types/TTimeline';
import { GUILLEMET_LEFT, GUILLEMET_RIGHT, N_DASH } from 'utils/unicode';

export const timelineData: TTimeline = [
  {
    title: 'Исторические даты',
    data: [
      {
        heading: 'Технологии',
        dates: {
          1980: 'Sinclair Research выпускает домашний компьютер ZX80',
          1982: 'Появился домашний компьютер ZX Spectrum, выпущенный британской компанией Sinclair Research',
          1984: 'Осенью на рынке начали продавать модель компьютера ZX Spectrum+',
          1985: 'Компьютер ZX Spectrum 128 впервые представлен в Испании',
          1986: 'Бренд Sinclair приобретен компанией Amstrad',
        },
      },
      {
        heading: 'Кино',
        dates: {
          1987: `${GUILLEMET_LEFT}Хищник${GUILLEMET_RIGHT}/Predator, США (реж. Джон Мактирнан)`,
          1988: `${GUILLEMET_LEFT}Кто подставил кролика Роджера${GUILLEMET_RIGHT}/Who Framed Roger Rabbit, США (реж. Роберт Земекис)`,
          1989: `${GUILLEMET_LEFT}Назад в будущее 2${GUILLEMET_RIGHT}/Back To The Future 2, США (реж. Роберт Земекис)`,
          1990: `${GUILLEMET_LEFT}Крепкий орешек 2${GUILLEMET_RIGHT}/Die Hard 2, США (реж. Ренни Харлин)`,
          1991: `${GUILLEMET_LEFT}Семейка Аддамс${GUILLEMET_RIGHT}/The Addams Family, США (реж. Барри Зонненфельд)`,
        },
      },
      {
        heading: 'Литература',
        dates: {
          1992: `Нобелевская премия по литературе ${N_DASH} Дерек Уолкотт, ${GUILLEMET_LEFT}За блестящий образец карибского эпоса в 64 разделах${GUILLEMET_RIGHT}`,
          1994: `${GUILLEMET_LEFT}Бессонница${GUILLEMET_RIGHT} ${N_DASH} Стивена Кинга`,
          1995: `Всемирная премия фэнтези за лучший роман ${N_DASH} Джеймс Морроу, ${GUILLEMET_LEFT}Towing Jehovah${GUILLEMET_RIGHT}`,
          1996: `${GUILLEMET_LEFT}Дневник Бриджет Джонс${GUILLEMET_RIGHT} ${N_DASH} роман Хелен Филдинг`,
          1997: `Дарио Фо получает Нобелевскую премию по литературе`,
        },
      },
      {
        heading: 'Театр',
        dates: {
          1999: `Премьера балета ${GUILLEMET_LEFT}Золушка${GUILLEMET_RIGHT} в постановке Жан-Кристофа Майо, сценография Эрнеста Пиньона`,
          2000: `Возобновлено издание журнала ${GUILLEMET_LEFT}Театр${GUILLEMET_RIGHT}`,
          2002: `Премьера трилогии Тома Стоппарда ${GUILLEMET_LEFT}Берег Утопии${GUILLEMET_RIGHT}, Королевский Национальный театр, Лондон`,
          2003: `В Венеции после семилетних восстановительных работ торжественно открылся оперный театр ${GUILLEMET_LEFT}Ла Фениче${GUILLEMET_RIGHT}`,
          2004: `В Московском драматическом театре им. А. С. Пушкина поставлен спектакль ${GUILLEMET_LEFT}Кот в сапогах${GUILLEMET_RIGHT} Ш.Перро`,
        },
      },
      {
        heading: 'Спорт',
        dates: {
          2006: 'Баскетбольный клуб ЦСКА стал победителем национального первенства России',
          2008: 'С 8 по 14 августа в Пекине прошли 29-е летние Олимпийские игры',
          2010: `13${N_DASH}28 февраля в Ванкувере: зимние Олимпийские игры`,
          2012: `2 августа ${N_DASH} летние Олимпийские игры`,
          2014: 'XXII зимние Олимпийские игры (Сочи, Россия)',
        },
      },
      {
        heading: 'Наука',
        dates: {
          2015: `13 сентября ${N_DASH} частное солнечное затмение, видимое в Южной Африке и части Антарктиды`,
          2016: `Телескоп ${GUILLEMET_LEFT}Хаббл${GUILLEMET_RIGHT} обнаружил самую удалённую из всех известных галактик, получившую обозначение GN-z11`,
          2017: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
          2020: 'Корабль Crew Dragon вернулся на Землю в результате первого пилотируемого полёта',
          2021: 'Первый удачный запуск ракеты LauncherOne и вывод десяти спутников NASA на орбиту',
          2022: `Учёные с помощью телескопа ${GUILLEMET_LEFT}Хаббл${GUILLEMET_RIGHT} обнаружили чёрную дыру, которая создаёт звёзды, а не поглощает их`,
        },
      },
    ],
  },
];
