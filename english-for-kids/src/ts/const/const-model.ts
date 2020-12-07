export type TCardItem = {
  word: string,
  translation: string,
  image: string,
  audioSrc: string,
  category: string,
};

// export type TCardItemStats = {
//   word: string,
//   translation: string,
//   image: string,
//   audioSrc: string,
//   category: string,
//   clicks: number,
//   correct: number,
//   wrong: number,
//   errors: number,
// };

// пока не разобрался в методе updateStats() как описать корректно
export type TCardItemStats = {
  [name: string]: any
};

export type TCardsCollections = Array<TCardItem>;

export const categoryCards: Array<string> = [`Animals`, `Colors`,
  `Candy`, `Emotion`, `Building`,
  `Clothes`, `School`, `Vegetable`];

export const cards: TCardsCollections = [
  {
    word: `ant`,
    translation: `муравей`,
    image: `animals/ant.svgz`,
    audioSrc: `animals/ant.mp3`,
    category: `Animals`,
  },
  {
    word: `bear`,
    translation: `медведь`,
    image: `animals/bear.svgz`,
    audioSrc: `animals/bear.mp3`,
    category: `Animals`,
  },
  {
    word: `beetle`,
    translation: `жук`,
    image: `animals/beetle.svgz`,
    audioSrc: `animals/beetle.mp3`,
    category: `Animals`,
  },
  {
    word: `bison`,
    translation: `бизон`,
    image: `animals/bison.svgz`,
    audioSrc: `animals/bison.mp3`,
    category: `Animals`,
  },
  {
    word: `bull`,
    translation: `бык`,
    image: `animals/bull.svgz`,
    audioSrc: `animals/bull.mp3`,
    category: `Animals`,
  },
  {
    word: `camel`,
    translation: `верблюд`,
    image: `animals/camel.svgz`,
    audioSrc: `animals/camel.mp3`,
    category: `Animals`,
  },
  {
    word: `dog`,
    translation: `собака`,
    image: `animals/dog.svgz`,
    audioSrc: `animals/dog.mp3`,
    category: `Animals`,
  },
  {
    word: `elephant`,
    translation: `слон`,
    image: `animals/elephant.svgz`,
    audioSrc: `animals/elephant.mp3`,
    category: `Animals`,
  },
  {
    word: `black`,
    translation: `черный`,
    image: `colors/black.svgz`,
    audioSrc: `colors/black.mp3`,
    category: `Colors`,
  },
  {
    word: `blue`,
    translation: `синий`,
    image: `colors/blue.svgz`,
    audioSrc: `colors/blue.mp3`,
    category: `Colors`,
  },
  {
    word: `emerald`,
    translation: `изумрудный`,
    image: `colors/emerald.svgz`,
    audioSrc: `colors/emerald.mp3`,
    category: `Colors`,
  },
  {
    word: `gray`,
    translation: `серый`,
    image: `colors/gray.svgz`,
    audioSrc: `colors/gray.mp3`,
    category: `Colors`,
  },
  {
    word: `pink`,
    translation: `розовый`,
    image: `colors/pink.svgz`,
    audioSrc: `colors/pink.mp3`,
    category: `Colors`,
  },
  {
    word: `red`,
    translation: `красный`,
    image: `colors/red.svgz`,
    audioSrc: `colors/red.mp3`,
    category: `Colors`,
  },
  {
    word: `violet`,
    translation: `фиолетовый`,
    image: `colors/violet.svgz`,
    audioSrc: `colors/violet.mp3`,
    category: `Colors`,
  },
  {
    word: `white`,
    translation: `белый`,
    image: `colors/white.svgz`,
    audioSrc: `colors/white.mp3`,
    category: `Colors`,
  },
  {
    word: `brownie`,
    translation: `брауни`,
    image: `candy/brownie.svgz`,
    audioSrc: `candy/brownie.mp3`,
    category: `Candy`,
  },
  {
    word: `cake`,
    translation: `кекс`,
    image: `candy/cake.svgz`,
    audioSrc: `candy/cake.mp3`,
    category: `Candy`,
  },
  {
    word: `chocolate`,
    translation: `шоколад`,
    image: `candy/chocolate.svgz`,
    audioSrc: `candy/chocolate.mp3`,
    category: `Candy`,
  },
  {
    word: `honey`,
    translation: `мёд`,
    image: `candy/honey.svgz`,
    audioSrc: `candy/honey.mp3`,
    category: `Candy`,
  },
  {
    word: `lollipop`,
    translation: `леденец`,
    image: `candy/lollipop.svgz`,
    audioSrc: `candy/lollipop.mp3`,
    category: `Candy`,
  },
  {
    word: `muffin`,
    translation: `маффин`,
    image: `candy/muffin.svgz`,
    audioSrc: `candy/muffin.mp3`,
    category: `Candy`,
  },
  {
    word: `pie`,
    translation: `пирог`,
    image: `candy/pie.svgz`,
    audioSrc: `candy/pie.mp3`,
    category: `Candy`,
  },
  {
    word: `yogurt`,
    translation: `йогурт`,
    image: `candy/yogurt.svgz`,
    audioSrc: `candy/yogurt.mp3`,
    category: `Candy`,
  },
  {
    word: `amazed`,
    translation: `изумленный`,
    image: `emotion/amazed.svgz`,
    audioSrc: `emotion/amazed.mp3`,
    category: `Emotion`,
  },
  {
    word: `furious`,
    translation: `яростный`,
    image: `emotion/furious.svgz`,
    audioSrc: `emotion/furious.mp3`,
    category: `Emotion`,
  },
  {
    word: `glad`,
    translation: `радостный`,
    image: `emotion/glad.svgz`,
    audioSrc: `emotion/glad.mp3`,
    category: `Emotion`,
  },
  {
    word: `positive`,
    translation: `позитивный`,
    image: `emotion/positive.svgz`,
    audioSrc: `emotion/positive.mp3`,
    category: `Emotion`,
  },
  {
    word: `sad`,
    translation: `печальный`,
    image: `emotion/sad.svgz`,
    audioSrc: `emotion/sad.mp3`,
    category: `Emotion`,
  },
  {
    word: `euphoric`,
    translation: `восторженный`,
    image: `emotion/euphoric.svgz`,
    audioSrc: `emotion/euphoric.mp3`,
    category: `Emotion`,
  },
  {
    word: `terrified`,
    translation: `напуганный`,
    image: `emotion/terrified.svgz`,
    audioSrc: `emotion/terrified.mp3`,
    category: `Emotion`,
  },
  {
    word: `bored`,
    translation: `скучающий`,
    image: `emotion/bored.svgz`,
    audioSrc: `emotion/bored.mp3`,
    category: `Emotion`,
  },
  {
    word: `bank`,
    translation: `банк`,
    image: `building/bank.svgz`,
    audioSrc: `building/bank.mp3`,
    category: `Building`,
  },
  {
    word: `cathedral`,
    translation: `собор`,
    image: `building/cathedral.svgz`,
    audioSrc: `building/cathedral.mp3`,
    category: `Building`,
  },
  {
    word: `gym`,
    translation: `зал`,
    image: `building/gym.svgz`,
    audioSrc: `building/gym.mp3`,
    category: `Building`,
  },
  {
    word: `library`,
    translation: `библиотека`,
    image: `building/library.svgz`,
    audioSrc: `building/library.mp3`,
    category: `Building`,
  },
  {
    word: `mall`,
    translation: `торговый центр`,
    image: `building/mall.svgz`,
    audioSrc: `building/mall.mp3`,
    category: `Building`,
  },
  {
    word: `museum`,
    translation: `музей`,
    image: `building/museum.svgz`,
    audioSrc: `building/museum.mp3`,
    category: `Building`,
  },
  {
    word: `skyscraper`,
    translation: `небоскреб`,
    image: `building/skyscraper.svgz`,
    audioSrc: `building/skyscraper.mp3`,
    category: `Building`,
  },
  {
    word: `stadium`,
    translation: `стадион`,
    image: `building/stadium.svgz`,
    audioSrc: `building/stadium.mp3`,
    category: `Building`,
  },
  {
    word: `cape`,
    translation: `плащ`,
    image: `clothes/cape.svgz`,
    audioSrc: `clothes/cape.mp3`,
    category: `Clothes`,
  },
  {
    word: `dress`,
    translation: `платье`,
    image: `clothes/dress.svgz`,
    audioSrc: `clothes/dress.mp3`,
    category: `Clothes`,
  },
  {
    word: `jacket`,
    translation: `пиджак`,
    image: `clothes/jacket.svgz`,
    audioSrc: `clothes/jacket.mp3`,
    category: `Clothes`,
  },
  {
    word: `jeans`,
    translation: `джинсы`,
    image: `clothes/jeans.svgz`,
    audioSrc: `clothes/jeans.mp3`,
    category: `Clothes`,
  },
  {
    word: `shirt`,
    translation: `Рубашка`,
    image: `clothes/shirt.svgz`,
    audioSrc: `clothes/shirt.mp3`,
    category: `Clothes`,
  },
  {
    word: `overalls`,
    translation: `комбинезон`,
    image: `clothes/overalls.svgz`,
    audioSrc: `clothes/overalls.mp3`,
    category: `Clothes`,
  },
  {
    word: `pants`,
    translation: `брюки`,
    image: `clothes/pants.svgz`,
    audioSrc: `clothes/pants.mp3`,
    category: `Clothes`,
  },
  {
    word: `t-shirt`,
    translation: `футболка`,
    image: `clothes/t-shirt.svgz`,
    audioSrc: `clothes/t-shirt.mp3`,
    category: `Clothes`,
  },
  {
    word: `calculator`,
    translation: `калькулятор`,
    image: `school/calculator.svgz`,
    audioSrc: `school/calculator.mp3`,
    category: `School`,
  },
  {
    word: `exercise`,
    translation: `упражнение`,
    image: `school/exercise.svgz`,
    audioSrc: `school/exercise.mp3`,
    category: `School`,
  },
  {
    word: `lab`,
    translation: `лаборатория`,
    image: `school/lab.svgz`,
    audioSrc: `school/lab.mp3`,
    category: `School`,
  },
  {
    word: `lesson`,
    translation: `урок`,
    image: `school/lesson.svgz`,
    audioSrc: `school/lesson.mp3`,
    category: `School`,
  },
  {
    word: `playground`,
    translation: `двор`,
    image: `school/playground.svgz`,
    audioSrc: `school/playground.mp3`,
    category: `School`,
  },
  {
    word: `schedule`,
    translation: `расписание`,
    image: `school/schedule.svgz`,
    audioSrc: `school/schedule.mp3`,
    category: `School`,
  },
  {
    word: `school`,
    translation: `школа`,
    image: `school/school.svgz`,
    audioSrc: `school/school.mp3`,
    category: `School`,
  },
  {
    word: `teacher`,
    translation: `учитель`,
    image: `school/teacher.svgz`,
    audioSrc: `school/teacher.mp3`,
    category: `School`,
  },
  {
    word: `beet`,
    translation: `свекла`,
    image: `vegetable/beet.svgz`,
    audioSrc: `vegetable/beet.mp3`,
    category: `Vegetable`,
  },
  {
    word: `bean`,
    translation: `фасоль`,
    image: `vegetable/bean.svgz`,
    audioSrc: `vegetable/bean.mp3`,
    category: `Vegetable`,
  },
  {
    word: `cabbage`,
    translation: `капуста`,
    image: `vegetable/cabbage.svgz`,
    audioSrc: `vegetable/cabbage.mp3`,
    category: `Vegetable`,
  },
  {
    word: `cucumber`,
    translation: `огурец`,
    image: `vegetable/cucumber.svgz`,
    audioSrc: `vegetable/cucumber.mp3`,
    category: `Vegetable`,
  },
  {
    word: `pepper`,
    translation: `перец`,
    image: `vegetable/pepper.svgz`,
    audioSrc: `vegetable/pepper.mp3`,
    category: `Vegetable`,
  },
  {
    word: `potato`,
    translation: `картошка`,
    image: `vegetable/potato.svgz`,
    audioSrc: `vegetable/potato.mp3`,
    category: `Vegetable`,
  },
  {
    word: `tomato`,
    translation: `помидор`,
    image: `vegetable/tomato.svgz`,
    audioSrc: `vegetable/tomato.mp3`,
    category: `Vegetable`,
  },
  {
    word: `turnip`,
    translation: `репа`,
    image: `vegetable/turnip.svgz`,
    audioSrc: `vegetable/turnip.mp3`,
    category: `Vegetable`,
  },
];
