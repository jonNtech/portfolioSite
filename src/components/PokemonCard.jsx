import React from "react";

const PokemonCard = () => {
  const [count, setCount] = useState(0);
  const [pokeList, setPokeList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      const apiUrl = "/api/pokemon/1";
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
  return <div>PokemonCard: {pokeList.name}</div>;
};

export default PokemonCard;
