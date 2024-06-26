const movies = [
  {
    adult: false,
    backdrop_path: "/qrGtVFxaD8c7et0jUtaYhyTzzPg.jpg",
    genre_ids: [28, 878, 12, 14],
    id: 823464,
    original_language: "en",
    original_title: "Godzilla x Kong: The New Empire",
    overview:
      "Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own.",
    popularity: 2213.825,
    poster_path: "/gmGK5Gw5CIGMPhOmTO0bNA9Q66c.jpg",
    release_date: "2024-03-27",
    title: "Godzilla x Kong: The New Empire",
    video: false,
    vote_average: 6.663,
    vote_count: 710,
  },
  {
    adult: false,
    backdrop_path: "/87IVlclAfWL6mdicU1DDuxdwXwe.jpg",
    genre_ids: [878, 12],
    id: 693134,
    original_language: "en",
    original_title: "Dune: Part Two",
    overview:
      "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.",
    popularity: 2101.535,
    poster_path: "/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    release_date: "2024-02-27",
    title: "Dune: Part Two",
    video: false,
    vote_average: 8.283,
    vote_count: 3253,
  },
  {
    adult: false,
    backdrop_path: "/1XDDXPXGiI8id7MrUxK36ke7gkX.jpg",
    genre_ids: [16, 28, 10751, 35, 14],
    id: 1011985,
    original_language: "en",
    original_title: "Kung Fu Panda 4",
    overview:
      "Po is gearing up to become the spiritual leader of his Valley of Peace, but also needs someone to take his place as Dragon Warrior. As such, he will train a new kung fu practitioner for the spot and will encounter a villain called the Chameleon who conjures villains from the past.",
    popularity: 1811.637,
    poster_path: "/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg",
    release_date: "2024-03-02",
    title: "Kung Fu Panda 4",
    video: false,
    vote_average: 7.161,
    vote_count: 1217,
  },
  {
    adult: false,
    backdrop_path: "/4woSOUD0equAYzvwhWBHIJDCM88.jpg",
    genre_ids: [28, 27, 53],
    id: 1096197,
    original_language: "en",
    original_title: "No Way Up",
    overview:
      "Characters from different backgrounds are thrown together when the plane they're travelling on crashes into the Pacific Ocean. A nightmare fight for survival ensues with the air supply running out and dangers creeping in from all sides.",
    popularity: 1712.647,
    poster_path: "/hu40Uxp9WtpL34jv3zyWLb5zEVY.jpg",
    release_date: "2024-01-18",
    title: "No Way Up",
    video: false,
    vote_average: 6.4,
    vote_count: 397,
  },
  {
    adult: false,
    backdrop_path: "/fUC5VsQcU3m6zmYMD96R7RqPuMn.jpg",
    genre_ids: [28, 80, 53],
    id: 1105407,
    original_language: "en",
    original_title: "Damaged",
    overview:
      "A Chicago detective travels to Scotland after an emerging serial killer’s crimes match those that he investigated five years earlier, one of which was the crime scene of his murdered girlfriend.",
    popularity: 1127.177,
    poster_path: "/tMO0YLXgJZBnIAjoTSz26zE33YN.jpg",
    release_date: "2024-04-12",
    title: "Damaged",
    video: false,
    vote_average: 5.589,
    vote_count: 28,
  },
  {
    adult: false,
    backdrop_path: "/unCdljyU2FuUBDUcdZezeI9yaaj.jpg",
    genre_ids: [878, 9648, 53, 28],
    id: 720321,
    original_language: "en",
    original_title: "Breathe",
    overview:
      "Air-supply is scarce in the near future, forcing a mother and daughter to fight for survival when two strangers arrive desperate for an oxygenated haven.",
    popularity: 886.367,
    poster_path: "/wTW2t8ocWDlHns8I7vQxuqkyK58.jpg",
    release_date: "2024-04-04",
    title: "Breathe",
    video: false,
    vote_average: 5.4,
    vote_count: 49,
  },
  {
    adult: false,
    backdrop_path: "/qnVm19Vu2Sc14LoEj82pmqAYr3p.jpg",
    genre_ids: [12, 28, 18],
    id: 845111,
    original_language: "fr",
    original_title: "Les trois mousquetaires : Milady",
    overview:
      "D'Artagnan, on a quest to rescue the abducted Constance, runs into the mysterious Milady de Winter again. The tension between the Catholics and the Protestants finally escalates, as the king declares war — forcing the now four musketeers into battle. But as the war goes on, they are tested physically, mentally and emotionally.",
    popularity: 878.62,
    poster_path: "/rtosxP5sXuoRFPH4sVbMccLIPiV.jpg",
    release_date: "2023-12-13",
    title: "The Three Musketeers: Milady",
    video: false,
    vote_average: 6.594,
    vote_count: 308,
  },
  {
    adult: false,
    backdrop_path: "/7ZP8HtgOIDaBs12krXgUIygqEsy.jpg",
    genre_ids: [878, 28, 14, 12],
    id: 601796,
    original_language: "ko",
    original_title: "외계+인 1부",
    overview:
      "Gurus in the late Goryeo dynasty try to obtain a fabled, holy sword, and humans in 2022 hunt down an alien prisoner that is locked in a human's body. The two parties cross paths when a time-traveling portal opens up.",
    popularity: 854.88,
    poster_path: "/8QVDXDiOGHRcAD4oM6MXjE0osSj.jpg",
    release_date: "2022-07-20",
    title: "Alienoid",
    video: false,
    vote_average: 6.915,
    vote_count: 281,
  },
  {
    adult: false,
    backdrop_path: "/oe7mWkvYhK4PLRNAVSvonzyUXNy.jpg",
    genre_ids: [28, 53],
    id: 359410,
    original_language: "en",
    original_title: "Road House",
    overview:
      "Ex-UFC fighter Dalton takes a job as a bouncer at a Florida Keys roadhouse, only to discover that this paradise is not all it seems.",
    popularity: 848.609,
    poster_path: "/bXi6IQiQDHD00JFio5ZSZOeRSBh.jpg",
    release_date: "2024-03-08",
    title: "Road House",
    video: false,
    vote_average: 7.047,
    vote_count: 1530,
  },
  {
    adult: false,
    backdrop_path: "/2KGxQFV9Wp1MshPBf8BuqWUgVAz.jpg",
    genre_ids: [16, 28, 12, 35, 10751],
    id: 940551,
    original_language: "en",
    original_title: "Migration",
    overview:
      "After a migrating duck family alights on their pond with thrilling tales of far-flung places, the Mallard family embarks on a family road trip, from New England, to New York City, to tropical Jamaica.",
    popularity: 815.938,
    poster_path: "/ldfCF9RhR40mppkzmftxapaHeTo.jpg",
    release_date: "2023-12-06",
    title: "Migration",
    video: false,
    vote_average: 7.545,
    vote_count: 1218,
  },
  {
    adult: false,
    backdrop_path: "/FUnAVgaTs5xZWXcVzPJNxd9qGA.jpg",
    genre_ids: [878, 28, 18, 10770],
    id: 934632,
    original_language: "en",
    original_title: "Rebel Moon - Part Two: The Scargiver",
    overview:
      "The rebels gear up for battle against the Motherworld as unbreakable bonds are forged, heroes emerge — and legends are made.",
    popularity: 804.055,
    poster_path: "/cxevDYdeFkiixRShbObdwAHBZry.jpg",
    release_date: "2024-04-19",
    title: "Rebel Moon - Part Two: The Scargiver",
    video: false,
    vote_average: 6.24,
    vote_count: 327,
  },
  {
    adult: false,
    backdrop_path: "/pwGmXVKUgKN13psUjlhC9zBcq1o.jpg",
    genre_ids: [28, 14],
    id: 634492,
    original_language: "en",
    original_title: "Madame Web",
    overview:
      "Forced to confront revelations about her past, paramedic Cassandra Webb forges a relationship with three young women destined for powerful futures...if they can all survive a deadly present.",
    popularity: 706.004,
    poster_path: "/rULWuutDcN5NvtiZi4FRPzRYWSh.jpg",
    release_date: "2024-02-14",
    title: "Madame Web",
    video: false,
    vote_average: 5.621,
    vote_count: 1123,
  },
  {
    adult: false,
    backdrop_path: "/pIFGZRCWjdQwECoXcphCCe1tl0B.jpg",
    genre_ids: [27, 9648, 53],
    id: 1041613,
    original_language: "en",
    original_title: "Immaculate",
    overview:
      "An American nun embarks on a new journey when she joins a remote convent in the Italian countryside. However, her warm welcome quickly turns into a living nightmare when she discovers her new home harbours a sinister secret and unspeakable horrors.",
    popularity: 705.298,
    poster_path: "/fdZpvODTX5wwkD0ikZNaClE4AoW.jpg",
    release_date: "2024-03-20",
    title: "Immaculate",
    video: false,
    vote_average: 6.294,
    vote_count: 216,
  },
  {
    adult: false,
    backdrop_path: "/cIztAxDn3H8JylRaJwiHHpkGe53.jpg",
    genre_ids: [10751, 35, 16],
    id: 1239146,
    original_language: "en",
    original_title: "Woody Woodpecker Goes to Camp",
    overview:
      "After getting kicked out of the forest, Woody thinks he's found a forever home at Camp Woo Hoo — until an inspector threatens to shut down the camp.",
    popularity: 698.959,
    poster_path: "/mMnzNYvpqLLLdgF5TMmXfuy6wzx.jpg",
    release_date: "2024-04-12",
    title: "Woody Woodpecker Goes to Camp",
    video: false,
    vote_average: 7.014,
    vote_count: 70,
  },
  {
    adult: false,
    backdrop_path: "/uv2twFGMk2qBdyJBJAVcrpRtSa9.jpg",
    genre_ids: [10752, 28, 18],
    id: 929590,
    original_language: "en",
    original_title: "Civil War",
    overview:
      "In the near future, a group of war journalists attempt to survive while reporting the truth as the United States stands on the brink of civil war.",
    popularity: 679.17,
    poster_path: "/sh7Rg8Er3tFcN9BpKIPOMvALgZd.jpg",
    release_date: "2024-04-10",
    title: "Civil War",
    video: false,
    vote_average: 7.529,
    vote_count: 311,
  },
  {
    adult: false,
    backdrop_path: "/qekky2LbtT1wtbD5MDgQvjfZQ24.jpg",
    genre_ids: [28, 53],
    id: 984324,
    original_language: "fr",
    original_title: "Le salaire de la peur",
    overview:
      "When an explosion at an oil well threatens hundreds of lives, a crack team is called upon to make a deadly desert crossing with nitroglycerine in tow.",
    popularity: 650.954,
    poster_path: "/jFK2ZLQUzo9pea0jfMCHDfvWsx7.jpg",
    release_date: "2024-03-28",
    title: "The Wages of Fear",
    video: false,
    vote_average: 5.796,
    vote_count: 181,
  },
  {
    adult: false,
    backdrop_path: "/dcnSWFCtk4b2aIzkhq6IDbzoIf1.jpg",
    genre_ids: [28, 35],
    id: 942047,
    original_language: "en",
    original_title: "Outsource",
    overview:
      "A police chief hires an old friend, who is an international spy, to help him search for a wanted suspect in the Philippines. When the chief dies, all evidence points towards the spy, and he must go to extremes to defend himself.",
    popularity: 620.566,
    poster_path: "/zIAF0UXtCJTJOYNYWiBfyifaaOi.jpg",
    release_date: "2022-01-18",
    title: "Outsource",
    video: false,
    vote_average: 3.5,
    vote_count: 2,
  },
  {
    adult: false,
    backdrop_path: "/9c0lHTXRqDBxeOToVzRu0GArSne.jpg",
    genre_ids: [878, 28],
    id: 935271,
    original_language: "en",
    original_title: "After the Pandemic",
    overview:
      "Set in a post-apocalyptic world where a global airborne pandemic has wiped out 90% of the Earth's population and only the young and immune have endured as scavengers. For Ellie and Quinn, the daily challenges to stay alive are compounded when they become hunted by the merciless Stalkers.",
    popularity: 603.016,
    poster_path: "/p1LbrdJ53dGfEhRopG71akfzOVu.jpg",
    release_date: "2022-03-01",
    title: "After the Pandemic",
    video: false,
    vote_average: 4.755,
    vote_count: 55,
  },
];
