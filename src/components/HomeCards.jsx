import { Link } from "react-router-dom";
import Card from "./Card";

const HomeCards = () => {
  return (
    <>
      <section className="py-4">
        <div className="container-xl lg:container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            <Card>
              <h2 className="text-2xl font-bold">Full Stack Engineer</h2>
              <p className="mt-2 mb-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Soluta, non nesciunt. Voluptatum, molestiae impedit quod
                inventore et suscipit similique, dolorem nobis asperiores harum
                error itaque vel exercitationem, voluptatibus saepe aliquid?
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Soluta, non nesciunt. Voluptatum, molestiae impedit quod
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
