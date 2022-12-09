import React, { useEffect } from "react";
import { Outlet, createBrowserRouter, RouterProvider, Route, NavLink, useParams} from "react-router-dom";
import styles from "./Pokemon.module.css";

interface IPokemon {
  name: string;
  url: string;
}

const Home = () => {
  return(
    <>
    <div className={styles.home}>
      <img src="https://www.pngitem.com/pimgs/m/5-56389_professor-oak-based-on-professor-oak-pokemon-hd.png" alt="Professor Oak" width={500} />
        <div>
          <p>Hello there! Welcome to the world of POKEMON!</p>
          <p>My name is OAK! People call me the POKEMON PROF!</p>
          <p>This world is inhabited by creatures called POKEMON!</p>
          <p>For some people, POKEMON are pets. Others use them for fights. Myself...I study POKEMON as a profession.</p>
        </div>
    </div>
    </>
  )
};

const Pokemon = () => {
 const [pokemon, setPokemon] = React.useState<IPokemon[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [search, setSearch] = React.useState<string>("");
 useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then(response => response.json())
    .then(allpokemon => setPokemon(allpokemon.results)).then(()=>
      setLoading(false)
    )
  }, []);
  return (
    <>
    <h1>Hello Pokemon</h1>
    <div className={styles.search}>
      <input type="text" placeholder="Search for a pokemon" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
      <button>Search</button>
    </div>
    <div className={styles.pokemon}>
      {loading? <p>Loading pokemon ...</p> : pokemon.filter((poke)=>{
        if(search === ""){
          return poke
        }else if(poke.name.toLowerCase().includes(search.toLowerCase())){
          return poke
        }
       }).map((pokemon, index) => (
        <div className={styles.pokemonList}>
          <NavLink key={index} to={`/pokemon/${index +1}`}>{pokemon.name}</NavLink>
        </div>
      ))}
    </div>

    </>
  )
}

interface IPokemonDetail {
  name: string;
  id: number;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  }
}

const PokemonDetail = ()=> {
  let { id } = useParams();
  const [pokemon, setPokemon] = React.useState<IPokemonDetail>();
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => response.json())
    .then(pokemon => setPokemon(pokemon))
  }, [id]);
  return(
    <>
    <div className={styles.container}>
      <h1>Name: {pokemon?.name}</h1>
      <p>Id: {pokemon?.id}</p>
      <p>Height: {pokemon?.height}</p>
      <p>Weight: {pokemon?.weight}</p>
      <img src={pokemon?.sprites?.front_default} height={250} alt={pokemon?.name} />
      <br/><NavLink to="/pokemon">Back</NavLink>
    </div>
    </>
  )
}
const Root = () => {
  return (
    <div>
        <div className={styles.nav}>
          <NavLink className={({isActive}:any)=> isActive ? styles.activeNavLink : styles.NavLink}to="/">Home</NavLink>
          <NavLink className={({isActive}:any)=> isActive ? styles.activeNavLink : styles.NavLink}to="/pokemon">Pokemon</NavLink>
        </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

const PokemonApp = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
          path: "",
          element: <Home/>
        },
        {
          path: "pokemon",
          element: <Pokemon/>
        },
        {
          path: "pokemon/:id",
          element: <PokemonDetail/>
        }
      ]
    }
  ]);
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default PokemonApp;
