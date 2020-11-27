type TCardItem = {
  word: string,
  translation: string,
  image: string,
  audioSrc: string
};
type TCardsCollections = {
  Animals: Array<TCardItem>
};

const categoryCards: Array<string> = [`Animals`, `Colors`,
  `Candy`, `Emotion`, `Building`,
  `Clothes`, `School`, `Vegetable`];

const cards: TCardsCollections = {
  Animals: [
    {
      word: `ant`,
      translation: `муравей`,
      image: `img/animals/ant.svgz`,
      audioSrc: `audio/animals/ant.mp3`,
    },
    {
      word: `bear`,
      translation: `медведь`,
      image: `img/animals/bear.svgz`,
      audioSrc: `audio/animals/bear.mp3`,
    },
    {
      word: `beetle`,
      translation: `жук`,
      image: `img/animals/beetle.svgz`,
      audioSrc: `audio/animals/beetle.mp3`,
    },
    {
      word: `bison`,
      translation: `бизон`,
      image: `img/animals/bison.svgz`,
      audioSrc: `audio/animals/bison.mp3`,
    },
    {
      word: `bull`,
      translation: `бык`,
      image: `img/animals/bull.svgz`,
      audioSrc: `audio/animals/bull.mp3`,
    },
    {
      word: `camel`,
      translation: `верблюд`,
      image: `img/animals/camel.svgz`,
      audioSrc: `audio/animals/camel.mp3`,
    },
    {
      word: `dog`,
      translation: `собака`,
      image: `img/animals/dog.svgz`,
      audioSrc: `audio/animals/dog.mp3`,
    },
    {
      word: `elephant`,
      translation: `слон`,
      image: `img/animals/elephant.svgz`,
      audioSrc: `audio/animals/elephant.mp3`,
    },
  ],
};
export { cards, categoryCards, TCardsCollections };
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
