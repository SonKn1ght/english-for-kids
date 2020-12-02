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
    image: `img/animals/ant.svgz`,
    audioSrc: `audio/animals/ant.mp3`,
    category: `Animals`,
  },
  {
    word: `bear`,
    translation: `медведь`,
    image: `img/animals/bear.svgz`,
    audioSrc: `audio/animals/bear.mp3`,
    category: `Animals`,
  },
  {
    word: `beetle`,
    translation: `жук`,
    image: `img/animals/beetle.svgz`,
    audioSrc: `audio/animals/beetle.mp3`,
    category: `Animals`,
  },
  {
    word: `bison`,
    translation: `бизон`,
    image: `img/animals/bison.svgz`,
    audioSrc: `audio/animals/bison.mp3`,
    category: `Animals`,
  },
  {
    word: `bull`,
    translation: `бык`,
    image: `img/animals/bull.svgz`,
    audioSrc: `audio/animals/bull.mp3`,
    category: `Animals`,
  },
  {
    word: `camel`,
    translation: `верблюд`,
    image: `img/animals/camel.svgz`,
    audioSrc: `audio/animals/camel.mp3`,
    category: `Animals`,
  },
  {
    word: `dog`,
    translation: `собака`,
    image: `img/animals/dog.svgz`,
    audioSrc: `audio/animals/dog.mp3`,
    category: `Animals`,
  },
  {
    word: `elephant`,
    translation: `слон`,
    image: `img/animals/elephant.svgz`,
    audioSrc: `audio/animals/elephant.mp3`,
    category: `Animals`,
  },
  {
    word: `black`,
    translation: `черный`,
    image: `img/colors/black.svgz`,
    audioSrc: `audio/colors/black.mp3`,
    category: `Colors`,
  },
  {
    word: `blue`,
    translation: `синий`,
    image: `img/colors/blue.svgz`,
    audioSrc: `audio/colors/blue.mp3`,
    category: `Colors`,
  },
  {
    word: `emerald`,
    translation: `изумрудный`,
    image: `img/colors/emerald.svgz`,
    audioSrc: `audio/colors/emerald.mp3`,
    category: `Colors`,
  },
  {
    word: `gray`,
    translation: `серый`,
    image: `img/colors/gray.svgz`,
    audioSrc: `audio/colors/gray.mp3`,
    category: `Colors`,
  },
  {
    word: `pink`,
    translation: `розовый`,
    image: `img/colors/pink.svgz`,
    audioSrc: `audio/colors/pink.mp3`,
    category: `Colors`,
  },
  {
    word: `red`,
    translation: `красный`,
    image: `img/colors/red.svgz`,
    audioSrc: `audio/colors/red.mp3`,
    category: `Colors`,
  },
  {
    word: `violet`,
    translation: `фиолетовый`,
    image: `img/colors/violet.svgz`,
    audioSrc: `audio/colors/violet.mp3`,
    category: `Colors`,
  },
  {
    word: `white`,
    translation: `белый`,
    image: `img/colors/white.svgz`,
    audioSrc: `audio/colors/white.mp3`,
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
