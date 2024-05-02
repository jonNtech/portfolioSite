import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [pokeList, setPokeList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPokemon = async () => {
      const apiUrl = "/api/jobs?_limit=3";
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setPokeList(data);
      } catch (err) {
        console.log("error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPokemon();
  }, []);
  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>{pokeList.name}</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
