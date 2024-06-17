import { Link } from "react-router-dom";
import Card from "./Card";
import { SiDotnet, SiJavascript, SiOracle, SiJira } from "react-icons/si";
import { FaAngular, FaReact, FaNode } from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";

const HomeCards = () => {
  return (
    <>
      <section className="py-4">
        <div className="container-xl lg:container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            <Card>
              <h2 className="text-2xl font-bold">Full Stack Engineer</h2>
              <p className="mt-2 mb-4">
                I have over 2 years professional development work experience
                including most recently an engineering supervisor position. I
                have over 12 years of management experience. I led teams as
                large as 300 people. I currently work as a .NET developer with
                Angular on the frontend. I have built APIs, databases, custom
                endpoints, and full web applications for corporations.
              </p>
              <Link
                to="/jobs"
                className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
              >
                Contact
              </Link>
            </Card>
            <Card bg="bg-indigo-100">
              <h2 className="text-2xl font-bold">Technologies</h2>
              <p className="mt-2 mb-4">
                <SiDotnet />
                <FaAngular />
                <FaReact />
                <SiJavascript />
                <FaNode />
                <SiOracle />
                <BsFiletypeSql />
                <SiJira />
              </p>
              <Link
                to="/add-job"
                className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
              >
                Browse Body of Work
              </Link>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeCards;
