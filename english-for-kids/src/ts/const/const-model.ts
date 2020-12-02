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
