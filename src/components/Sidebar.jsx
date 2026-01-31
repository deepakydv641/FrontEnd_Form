import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const steps = [
  { title: "Personal Details", path: "/" },
  { title: "Academic Profile", path: "/academic" },
  { title: "Employment History", path: "/employment" },
  { title: "Publications", path: "/publications" },
  { title: "Awards & Patents", path: "/awards" },
  { title: "References", path: "/references" },
  { title: "Upload Documents", path: "/documents" },
  { title: "Declaration", path: "/declaration" },
];

function Sidebar() {
  return (
    <aside className="w-64 hidden lg:block">
      <div className="sticky top-24">
        {steps.map((item, index) => {
          const stepNumber = index + 1;

          return (
            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center px-4 py-2 mb-2 rounded transition 
     border-l-4 ${
       isActive
         ? "border-red-600 bg-red-100 text-red-600 font-semibold"
         : "border-transparent text-gray-400 hover:bg-gray-100"
     }`
              }
            >
              <span className="flex-shrink-0 w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-sm">
                {index + 1}
              </span>
              <span>{ item.title}</span>
            </NavLink>
          );
        })}
      </div>
    </aside>
  );
}

export default Sidebar;
