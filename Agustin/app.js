const { useState, createElement: e } = React;
const {createRoot} = ReactDOM;

const MovieList = () =>{
   const [index, setIndex] = useState(0);

   const randomizeMovies = () =>{
    setIndex(Math.floor(Math.random() * movies.length))
   };
   return e("div",
   {
    className: "container",
    id: "movie-list",
    },
    [
        e("h1" , {className: "text-2xl text-blue-400"}), movies[index].title,
        e("p", {className: "text-gray 600"}, movies[index].overview),
        e("img",
        {
            src: `https://image.tmdb.org/t/original${movies[index].poster_path}`,
            height: 500,
            className: "Object-contain h-96"
        }
            ),
        e(
            "button",
            {
                onClick: randomizeMovies,
            },
            "Cambiar"
        ),   
    ]
   )
};

const container = document.getElementById("app")
const root = createRoot(container)
root.render(e(MovieList))