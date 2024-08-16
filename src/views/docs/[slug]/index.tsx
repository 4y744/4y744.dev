//Import React
import { Fragment } from "react/jsx-runtime";

//Import React Router
import { NavLink, useParams } from "react-router-dom";

//Import docs
import docs from "../../../docs";

//Import hooks
import { useGetDocsArticle } from "../../../hooks/docs/useGetDocsArticle";

//Import components
import { Overview } from "../../../components/Overview";

export const Doc = () => {
  const { topic, category, article } = useParams();
  const element = useGetDocsArticle(topic!, category!, article!);

  return (
    <>
      <nav
        className="sticky top-16 flex h-8 z-50
        bg-dark-950/90 backdrop-blur
        border-b border-b-dark-700"
      >
        {docs.map((doc) => (
          <NavLink
            className={({ isActive }) => `
            flex items-center px-4 font-medium text-sm 
            text-dark-400 hover:text-dark-300
            ${
              isActive &&
              `border-b border-b-white 
            text-white font-bold hover:text-white`
            }`}
            key={doc.id}
            to={`/docs/${doc.id}/${doc.categories[0].id}/${doc.categories[0].articles[0].id}`}
          >
            {doc.title}
          </NavLink>
        ))}
      </nav>
      <div className="flex">
        <nav
          className="sticky top-24 self-start
          flex flex-col w-64 px-4 text-sm"
        >
          {docs
            .find((doc) => doc.id == topic)
            ?.categories.map((cat) => (
              <Fragment key={cat.id}>
                <span className="px-4 py-2 font-bold">{cat.title}</span>
                {cat.articles.map((art) => (
                  <NavLink
                    className={({ isActive }) => `
                    px-4 py-2 rounded-lg select-none
                    text-dark-400 hover:text-dark-300
                    ${
                      isActive &&
                      `what-kind-of-bug-is-this
                    bg-dark-800 font-medium`
                    }`}
                    draggable={false}
                    key={art.id}
                    to={`/docs/${topic}/${cat.id}/${art.id}`}
                  >
                    {art.title}
                  </NavLink>
                ))}
              </Fragment>
            ))}
        </nav>
        <Overview.Wrapper>{element}</Overview.Wrapper>
      </div>
    </>
  );
};
