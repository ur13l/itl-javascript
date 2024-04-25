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
        "container bg-white flex flex-col items-center py-8 px-12 rounded-lg shadow-lg",
      id: "movie-list",
    },
    [
      e("img", {
        src: `https://image.tmdb.org/t/p/original${movies[index].poster_path}`,
        className: "object-contain h-80 rounded-lg",
      }),
      e(
        "h1",
        { className: "text-2xl text-blue-400 text-center w-1/2 font-bold" },
        movies[index].title
      ),
      e(
        "p",
        { className: "text-gray-600 w-1/2 text-center text-xs" },
        movies[index].overview
      ),
      e(
        "button",
        {
          onClick: randomize,
          className: "bg-blue-800 text-white px-4 py-2 rounded-lg mt-4",
        },
        "Randomizar"
      ),
    ]
  );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(e(MovieList));
