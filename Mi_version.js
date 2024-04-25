const { useState, createElement: e, useEffect } = React;
const { createRoot } = ReactDOM;

const MovieList = () => {
  const [index, setIndex] = useState(0);

  const randomize = () => {
    setIndex(Math.floor(Math.random() * movies.length));
  };

  useEffect(() => {
    console.log("El index fue cambiado a:" + index);
  }, [index]);

  return e(
    "div",
    {
      className:
        "container bg-gray-900 flex flex-col items-center py-8 px-12 rounded-lg text-white",
      id: "movie-list",
    },
    [
      e("img", {
        src: `https://image.tmdb.org/t/p/original${movies[index].poster_path}`,
        className: "object-contain h-80 rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-105",
      }),
      e(
        "h1",
        { className: "text-2xl text-blue-400 text-center w-1/2 font-bold mt-4" },
        movies[index].title
      ),
      e(
        "p",
        { className: "text-gray-400 w-1/4 text-justify text-sm mt-2" },
        movies[index].overview
      ),
      e(
        "button",
        {
          onClick: randomize,
          className: "bg-blue-800 text-white px-4 py-2 rounded-lg mt-4 transition-colors duration-300 ease-in-out hover:bg-blue-700",
        },
        "Randomizar"
      ),
    ]
  );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(e(MovieList));
