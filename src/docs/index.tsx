import { Icon } from "../components/Icons";
import { Overview } from "../components/Overview";

//Get dynamic import function, extract default export and pass custom global overrides.
const get = async (imp: Promise<typeof import("*.mdx")>) =>
  (await imp).default({
    components: {
      h1: Overview.Anchor,
    },
  });

export default [
  {
    id: "html",
    title: "HTML",
    description: `The markup language of the web.
    This bad boy can help you define elements for 
    a web page and maybe add some functionality.`,
    icon: <Icon.HTML />,
    categories: [
      {
        id: "intro",
        title: "Introduction",
        articles: [
          {
            id: "intro",
            title: "Intro",
            element: <>Intro test</>,
          },
          {
            id: "what-is-html",
            title: "Article 1",
            element: <>art1</>,
          },
          {
            id: "what-is-html2",
            title: "Article 2",
            element: <>art2</>,
          },
          {
            id: "what-is-html3",
            title: "Article 3",
            element: <>art3</>,
          },
        ],
      },
      {
        id: "elements",
        title: "Elements",
        articles: [
          {
            id: "h1",
            title: "<h1>",
            element: await get(import("./html/elements/h1.mdx")),
          },
          {
            id: "span",
            title: "<span>",
            element: await get(import("./html/elements/span.mdx")),
          },
          {
            id: "p",
            title: "<p>",
            element: await get(import("./html/elements/p.mdx")),
          },
        ],
      },
    ],
  },
  {
    id: "css",
    title: "CSS",
    description: `Cascading Style Sheets - naked HTML 
    doesn't look that good, does it? Put some styles 
    on that thing and make it a beauty!`,
    icon: <Icon.CSS />,
    categories: [
      {
        id: "introduction",
        title: "Introduction",
        articles: [
          {
            id: "what-is-html",
            title: "Article 1",
            element: <></>,
          },
          {
            id: "what-is-html2",
            title: "Article 2",
            element: <></>,
          },
          {
            id: "what-is-html3",
            title: "Article 3",
            element: <></>,
          },
        ],
      },
    ],
  },
  {
    id: "js",
    title: "JavaScript",
    description: `The runtime of the web. Although
    disliked by many because of its weird behavior
    and lack of type safety, it sure can get stuff done.`,
    icon: <Icon.JavaScript />,
    categories: [
      {
        id: "intro",
        title: "Introduction",
        articles: [
          {
            id: "what-is-html",
            title: "Article 1",
            element: <></>,
          },
          {
            id: "what-is-html2",
            title: "Article 2",
            element: <></>,
          },
          {
            id: "what-is-html3",
            title: "Article 3",
            element: <></>,
          },
        ],
      },
    ],
  },
  {
    id: "react",
    title: "React",
    description: `Most used JavaScript framework...I mean library.
    It's pretty difficult for beginners, but an absolute joy to use
    when you get the basics down (most of the time).`,
    icon: <Icon.React />,
    categories: [
      {
        id: "intro",
        title: "Introduction",
        articles: [
          {
            id: "what-is-react",
            title: "What is React?",
            element: <>this is an article</>,
          },
        ],
      },
    ],
  },
  {
    id: "cpp",
    title: "C++",
    icon: <Icon.HTML />,
    description: `An absolute beast of a programming language.
    Low level access with high level abstractions, what
    else could you ask for? Bjarne cooked with this one!`,
    categories: [
      {
        id: "intro",
        title: "Introduction",
        articles: [
          {
            id: "what-is-cpp",
            title: "What is C++",
            element: await get(import("./cpp/intro/what-is-cpp.mdx")),
          },
        ],
      },
    ],
  },
];
