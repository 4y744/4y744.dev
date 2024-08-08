
const get = async (imp: Promise<typeof import("*.mdx")>) => (await imp).default({});

export default [
  {
    id: "html",
    title: "HTML",
    categories: [
      {
        id: "intro",
        title: "Introduction",
        articles: [
          {
            id: "what-is-html",
            title: "Article 1",
            element: <>art1</>
          },
          {
            id: "what-is-html2",
            title: "Article 2",
            element: <>art2</>
          },
          {
            id: "what-is-html3",
            title: "Article 3",
            element: <>art3</>
          }
        ]
      },
      {
        id: "elements",
        title: "Elements",
        articles: [
          {
            id: "h1",
            title: "<h1>",
            element: await get(import("./html/elements/h1.mdx"))
          },
          {
            id: "span",
            title: "<span>",
            element: await get(import("./html/elements/span.mdx"))
          },
          {
            id: "p",
            title: "<p>",
            element: await get(import("./html/elements/p.mdx"))
          }
        ]
      }
    ]
  },
  {
    id: "css",
    title: "CSS",
    categories: [
      {
        id: "introduction",
        title: "Introduction",
        articles: [
          {
            id: "what-is-html",
            title: "Article 1",
            element: <></>
          },
          {
            id: "what-is-html2",
            title: "Article 2",
            element: <></>
          },
          {
            id: "what-is-html3",
            title: "Article 3",
            element: <></>
          }
        ]
      }
    ]
  },
  {
    id: "js",
    title: "JavaScript",
    categories: [
      {
        id: "intro",
        title: "Introduction",
        articles: [
          {
            id: "what-is-html",
            title: "Article 1",
            element: <></>
          },
          {
            id: "what-is-html2",
            title: "Article 2",
            element: <></>
          },
          {
            id: "what-is-html3",
            title: "Article 3",
            element: <></>
          }
        ]
      }
    ]
  }
]