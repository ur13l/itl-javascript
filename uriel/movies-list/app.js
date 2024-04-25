const { useState, useEffect } = React;
const { createRoot } = ReactDOM;

const MovieRandom = () => {
  const [index, setIndex] = useState(0);

  const randomize = () => {
    setIndex(Math.floor(Math.random() * movies.length));
  };

  useEffect(() => {
    console.log("El index fue cambiado a:" + index);
  }, [index]);

  return (
    <div
      className="container bg-white flex flex-col items-center py-8 px-12 rounded-lg shadow-lg"
      id="movie-list"
    >
      <img
        src={`https://image.tmdb.org/t/p/original${movies[index].poster_path}`}
        className="object-contain h-80 rounded-lg"
      />
      <h1 className="text-2xl text-blue-400 text-center w-1/2 font-bold">
        {movies[index].title}
      </h1>
      <p className="text-gray-600 w-1/2 text-center text-xs">
        {movies[index].overview}
      </p>
      <p>Da click en el botón para elegir una película aleatoria</p>
      <button
        onClick={randomize}
        className="bg-blue-800 text-white px-4 py-2 rounded-lg mt-4"
      >
        Randomizar
      </button>
    </div>
  );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<MovieRandom />);
