export type TCardItem = {
  word: string,
  translation: string,
  image: string,
  audioSrc: string,
  category: string,
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
];
// export { cards, categoryCards, TCardsCollections, TCardItem };
//
// [
//   {
//     word: `cry`,
//     translation: `плакать`,
//     image: `img/cry.svgz`,
//     audioSrc: `audio/cry.mp3`
//   },
//   {
//     word: `dance`,
//     translation: `танцевать`,
//     image: `img/dance.svgz`,
//     audioSrc: `audio/dance.mp3`
//   },
//   {
//     word: `dive`,
//     translation: `нырять`,
//     image: `img/dive.svgz`,
//     audioSrc: `audio/dive.mp3`
//   },
//   {
//     word: `draw`,
//     translation: `рисовать`,
//     image: `img/draw.svgz`,
//     audioSrc: `audio/draw.mp3`
//   },
//   {
//     word: `fish`,
//     translation: `ловить рыбу`,
//     image: `img/fish.svgz`,
//     audioSrc: `audio/fish.mp3`
//   },
//   {
//     word: `fly`,
//     translation: `летать`,
//     image: `img/fly.svgz`,
//     audioSrc: `audio/fly.mp3`
//   },
//   {
//     word: `hug`,
//     translation: `обнимать`,
//     image: `img/hug.svgz`,
//     audioSrc: `audio/hug.mp3`
//   },
//   {
//     word: `jump`,
//     translation: `прыгать`,
//     image: `img/jump.svgz`,
//     audioSrc: `audio/jump.mp3`
//   }
// ]
