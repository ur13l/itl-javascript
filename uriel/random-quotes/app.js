const { useState } = React;
const { createRoot } = ReactDOM;

const quotes = [
  {
    author: "Albert Einstein",
    text: "La vida es como andar en bicicleta. Para mantener el equilibrio, debes seguir moviéndote.",
  },
  {
    author: "Isaac Newton",
    text: "Lo que sabemos es una gota de agua; lo que ignoramos es el océano.",
  },
  {
    author: "Marie Curie",
    text: "Nada en la vida debe ser temido, solo comprendido.",
  },
];

function QuoteCard() {
  const [index, setIndex] = useState(0);

  const randomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setIndex(randomIndex);
  };

  return React.createElement(
    "div",
    { className: "max-w-sm rounded overflow-hidden shadow-lg bg-white p-4" },
    React.createElement(
      "div",
      { className: "font-bold text-xl mb-2" },
      quotes[index].author
    ),
    React.createElement(
      "p",
      { className: "text-red-500 text-base" },
      quotes[index].text
    ),
    React.createElement(
      "button",
      {
        onClick: randomQuote,
        className:
          "mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
      },
      "Nueva Cita"
    )
  );
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(React.createElement(QuoteCard));
