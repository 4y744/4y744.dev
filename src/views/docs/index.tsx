import { useParams } from "react-router-dom"
import { Sidebar } from "../../layout/Sidebar"
import { Topbar } from "../../layout/Topbar"
import docs from "../../docs"
import { useGetDocsArticle } from "../../hooks/docs/useGetDocsArticle"
import { Fragment } from "react/jsx-runtime"
import { Overview } from "../../components/Overview"

export const Docs = () => {

  const {topic, category, article} = useParams();

  const element = useGetDocsArticle(topic!, category!, article!);

  return (
    <>
      <Topbar>
        {docs.map(doc => (
          <Topbar.Link
          key={doc.id}
          to={`/docs/${doc.id}`}>
            {doc.title}
          </Topbar.Link>
        ))}
      </Topbar>
      <div
      className="flex">
        <Sidebar>
          {docs.find(doc => doc.id == topic)
          ?.categories.map(cat => (
            <Fragment
            key={cat.id}>
              <Sidebar.Heading>
                {cat.title}
              </Sidebar.Heading>
              {cat.articles.map(art => (
                <Sidebar.Link
                key={art.id}
                to={`/docs/${topic}/${cat.id}/${art.id}`}>
                  {art.title}
                </Sidebar.Link>
              ))}
            </Fragment>
          ))}
        </Sidebar>
        <Overview.Wrapper>
          {element}
        </Overview.Wrapper>
        <Overview>
          {element}
        </Overview>
      </div>
    </>
  )
}