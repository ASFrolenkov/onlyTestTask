const fakeApi = [
  {
    id: 1,
    title: "Наука",
    prevYear: 2015,
    nextYear: 2022,
    content: [
      {
        year: 2015,
        descr: "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды"
      },
      {
        year: 2016,
        descr: "Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11"
      },
      {
        year: 2017,
        descr: "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi"
      },
      {
        year: 2015,
        descr: "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды"
      },
      {
        year: 2016,
        descr: "Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11"
      },
      {
        year: 2017,
        descr: "Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi"
      }
    ]
  },
  {
    id: 2,
    title: "Литература",
    prevYear: 1992,
    nextYear: 1997,
    content: [
      {
        year: 1992,
        descr: "Нобелевская премия по литературе - Дерек Уолкотт, «За блестящий бразец карибского эпоса в 64 разделах»"
      },
      {
        year: 1994,
        descr: "«Бессоница» - роман Стивена Кинга."
      },
      {
        year: 1995,
        descr: "Нобеелвская премия по литературе - Шеймас Хини"
      },
      {
        year: 1997,
        descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eos earum in voluptatem eveniet iusto nostrum beatae? Nesciunt maiores architecto laboriosam, aut accusamus, veritatis earum excepturi qui voluptatem dolor ipsam."
      },
      {
        year: 1997,
        descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eos earum in voluptatem eveniet iusto nostrum beatae? Nesciunt maiores architecto laboriosam, aut accusamus, veritatis earum excepturi qui voluptatem dolor ipsam."
      },
      {
        year: 1997,
        descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eos earum in voluptatem eveniet iusto nostrum beatae? Nesciunt maiores architecto laboriosam, aut accusamus, veritatis earum excepturi qui voluptatem dolor ipsam."
      }
    ]
  },
  {
    id: 3,
    prevYear: 2005,
    nextYear: 2009,
    content: [
      {
        year: 2005,
        descr: "Премьера балета «Золушка» в постановке Жан-Кристофа Майо, сценография Эрнеста Пиньона"
      },
      {
        year: 2006,
        descr: "возобновление журнала «Театр»"
      },
      {
        year: 2008,
        descr: "премьера трилогии Тома Стоппарда «Берег Утопии», Королевский Национальный театр, Лондон"
      },
      {
        year: 2009,
        descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eos earum in voluptatem eveniet iusto nostrum beatae? Nesciunt maiores architecto laboriosam, aut accusamus, veritatis earum excepturi qui voluptatem dolor ipsam."
      },
      {
        year: 2009,
        descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eos earum in voluptatem eveniet iusto nostrum beatae? Nesciunt maiores architecto laboriosam, aut accusamus, veritatis earum excepturi qui voluptatem dolor ipsam."
      },
      {
        year: 2009,
        descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eos earum in voluptatem eveniet iusto nostrum beatae? Nesciunt maiores architecto laboriosam, aut accusamus, veritatis earum excepturi qui voluptatem dolor ipsam."
      }
    ]
  },
  {
    id: 4,
    prevYear: 1999,
    nextYear: 2004,
    content: [
      {
        year: 1999,
        descr: "Премьера балета «Золушка» в постановке Жан-Кристофа Майо, сценография Эрнеста Пиньона"
      },
      {
        year: 2000,
        descr: "возобновление журнала «Театр»"
      },
      {
        year: 2002,
        descr: "премьера трилогии Тома Стоппарда «Берег Утопии», Королевский Национальный театр, Лондон"
      },
      {
        year: 2003,
        descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eos earum in voluptatem eveniet iusto nostrum beatae? Nesciunt maiores architecto laboriosam, aut accusamus, veritatis earum excepturi qui voluptatem dolor ipsam."
      },
      {
        year: 2004,
        descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eos earum in voluptatem eveniet iusto nostrum beatae? Nesciunt maiores architecto laboriosam, aut accusamus, veritatis earum excepturi qui voluptatem dolor ipsam."
      },
      {
        year: 2004,
        descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eos earum in voluptatem eveniet iusto nostrum beatae? Nesciunt maiores architecto laboriosam, aut accusamus, veritatis earum excepturi qui voluptatem dolor ipsam."
      }
    ]
  },
  {
    id: 5,
    title: "Lorem ipsum",
    prevYear: 2010,
    nextYear: 2014,
    content: [
      {
        year: 2010,
        descr: "Премьера балета «Золушка» в постановке Жан-Кристофа Майо, сценография Эрнеста Пиньона"
      },
      {
        year: 2010,
        descr: "возобновление журнала «Театр»"
      },
      {
        year: 2010,
        descr: "премьера трилогии Тома Стоппарда «Берег Утопии», Королевский Национальный театр, Лондон"
      },
      {
        year: 2010,
        descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eos earum in voluptatem eveniet iusto nostrum beatae? Nesciunt maiores architecto laboriosam, aut accusamus, veritatis earum excepturi qui voluptatem dolor ipsam."
      },
      {
        year: 2010,
        descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eos earum in voluptatem eveniet iusto nostrum beatae? Nesciunt maiores architecto laboriosam, aut accusamus, veritatis earum excepturi qui voluptatem dolor ipsam."
      },
      {
        year: 2010,
        descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eos earum in voluptatem eveniet iusto nostrum beatae? Nesciunt maiores architecto laboriosam, aut accusamus, veritatis earum excepturi qui voluptatem dolor ipsam."
      }
    ]
  },
  {
    id: 6,
    title: "Lorem",
    prevYear: 1980,
    nextYear: 1990,
    content: [
      {
        year: 2010,
        descr: "Премьера балета «Золушка» в постановке Жан-Кристофа Майо, сценография Эрнеста Пиньона"
      },
      {
        year: 2010,
        descr: "возобновление журнала «Театр»"
      },
      {
        year: 2010,
        descr: "премьера трилогии Тома Стоппарда «Берег Утопии», Королевский Национальный театр, Лондон"
      },
      {
        year: 2010,
        descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eos earum in voluptatem eveniet iusto nostrum beatae? Nesciunt maiores architecto laboriosam, aut accusamus, veritatis earum excepturi qui voluptatem dolor ipsam."
      },
      {
        year: 2010,
        descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eos earum in voluptatem eveniet iusto nostrum beatae? Nesciunt maiores architecto laboriosam, aut accusamus, veritatis earum excepturi qui voluptatem dolor ipsam."
      },
      {
        year: 2010,
        descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eos earum in voluptatem eveniet iusto nostrum beatae? Nesciunt maiores architecto laboriosam, aut accusamus, veritatis earum excepturi qui voluptatem dolor ipsam."
      }
    ]
  }
]

export default fakeApi;