import { Link } from "react-router-dom";
import docs from "../../docs";
import { Icon } from "../../components/Icons";

export const Docs = () => {
  return (
    <div className="xl:px-64 lg:px-32 md:px-16 sm:px-8 px-4">
      <h1>Docs</h1>
      <p className="ml-auto pt-0">
        A repository of information about things I find interesting.
      </p>
      <div className="grid gap-2 auto-cols-max lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {docs.map((doc) => (
          <div
            className="flex flex-col
            bg-dark-800 rounded-lg p-4"
            key={doc.id}
          >
            <div className="flex items-center gap-2">
              <div className="text-2xl">{doc.icon}</div>
              <h2 className="text-lg py-0">{doc.title}</h2>
            </div>
            <p className="text-sm py-2">{doc.description}</p>
            <Link
              className="flex items-center gap-2
              ml-auto mt-auto text-sm
              text-dark-400 hover:text-dark-300"
              to={`/docs/${doc.id}/${doc.categories[0].id}/${doc.categories[0].articles[0].id}`}
            >
              <span>View</span>
              <Icon.Link />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
