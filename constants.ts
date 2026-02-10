import { Movie } from './types';

// Your Actual Bot Username
export const BOT_USERNAME = 'Cinaflix_Streembot';

// Demo Data - এখানে real movies দেখাবে preview এর জন্য
export const INITIAL_MOVIES: Movie[] = [
  {
    id: '1',
    title: 'Avengers: Endgame',
    thumbnail: 'https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
    category: 'Exclusive',
    telegramCode: 'avengers_endgame_4k',
    rating: 9.5,
    views: '2.8M',
    year: '2019',
    quality: '4K HDR',
    description: 'After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more to reverse Thanos actions.'
  },
  {
    id: '2',
    title: 'Squid Game',
    thumbnail: 'https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg',
    category: 'Korean Drama',
    telegramCode: 'squid_game_s1',
    rating: 9.2,
    views: '3.5M',
    year: '2021',
    quality: '4K',
    description: 'Hundreds of cash-strapped players accept a strange invitation to compete in children\'s games for a tempting prize, but the stakes are deadly.',
    episodes: [
      { id: 'e1', number: 1, season: 1, title: 'Red Light, Green Light', duration: '59m', telegramCode: 'sq_s1_ep1' },
      { id: 'e2', number: 2, season: 1, title: 'Hell', duration: '63m', telegramCode: 'sq_s1_ep2' },
      { id: 'e3', number: 3, season: 1, title: 'The Man with the Umbrella', duration: '55m', telegramCode: 'sq_s1_ep3' },
      { id: 'e4', number: 4, season: 1, title: 'Stick to the Team', duration: '56m', telegramCode: 'sq_s1_ep4' },
    ]
  },
  {
    id: '3',
    title: 'Stranger Things',
    thumbnail: 'https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg',
    category: 'Series',
    telegramCode: 'stranger_things_s4',
    rating: 9.0,
    views: '2.9M',
    year: '2022',
    quality: '4K',
    description: 'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.',
    episodes: [
      { id: 'e1', number: 1, season: 4, title: 'The Hellfire Club', duration: '1h 18m', telegramCode: 'st_s4_ep1' },
      { id: 'e2', number: 2, season: 4, title: 'Vecna\'s Curse', duration: '1h 18m', telegramCode: 'st_s4_ep2' },
      { id: 'e3', number: 3, season: 4, title: 'The Monster and the Superhero', duration: '1h 03m', telegramCode: 'st_s4_ep3' },
    ]
  },
  {
    id: '4',
    title: 'The Batman',
    thumbnail: 'https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg',
    category: 'Exclusive',
    telegramCode: 'the_batman_2022',
    rating: 8.8,
    views: '2.3M',
    year: '2022',
    quality: '4K HDR',
    description: 'When the Riddler, a sadistic serial killer, begins murdering key political figures in Gotham, Batman is forced to investigate the city\'s hidden corruption.'
  },
  {
    id: '5',
    title: 'Spider-Man: No Way Home',
    thumbnail: 'https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
    category: 'Exclusive',
    telegramCode: 'spiderman_nwh_4k',
    rating: 9.3,
    views: '3.2M',
    year: '2021',
    quality: '4K',
    description: 'Peter Parker seeks help from Doctor Strange when his identity as Spider-Man is revealed. But a spell goes wrong, causing villains from other universes to enter.'
  },
  {
    id: '6',
    title: 'Breaking Bad',
    thumbnail: 'https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
    category: 'Series',
    telegramCode: 'breaking_bad_complete',
    rating: 9.5,
    views: '2.7M',
    year: '2013',
    quality: 'HD',
    description: 'A high school chemistry teacher diagnosed with cancer turns to producing meth to secure his family\'s future.',
    episodes: [
      { id: 'e1', number: 1, season: 1, title: 'Pilot', duration: '58m', telegramCode: 'bb_s1_ep1' },
      { id: 'e2', number: 2, season: 1, title: 'Cat\'s in the Bag...', duration: '48m', telegramCode: 'bb_s1_ep2' },
    ]
  },
  {
    id: '7',
    title: 'Interstellar',
    thumbnail: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
    category: 'Exclusive',
    telegramCode: 'interstellar_4k',
    rating: 9.1,
    views: '2.5M',
    year: '2014',
    quality: '4K IMAX',
    description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.'
  },
  {
    id: '8',
    title: 'Money Heist',
    thumbnail: 'https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg',
    category: 'Series',
    telegramCode: 'money_heist_complete',
    rating: 8.9,
    views: '3.1M',
    year: '2021',
    quality: '4K',
    description: 'An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.',
    episodes: [
      { id: 'e1', number: 1, season: 1, title: 'Episode 1', duration: '47m', telegramCode: 'mh_s1_ep1' },
      { id: 'e2', number: 2, season: 1, title: 'Episode 2', duration: '41m', telegramCode: 'mh_s1_ep2' },
    ]
  },
  {
    id: '9',
    title: 'Parasite',
    thumbnail: 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
    category: 'Exclusive',
    telegramCode: 'parasite_movie',
    rating: 9.0,
    views: '1.8M',
    year: '2019',
    quality: '4K',
    description: 'All unemployed, Ki-taek and his family take peculiar interest in the wealthy and glamorous Parks, until they get entangled in an unexpected incident.'
  },
  {
    id: '10',
    title: 'Itaewon Class',
    thumbnail: 'https://image.tmdb.org/t/p/w500/6V0FxmeC2DYNdv7mFYawyOdGGM0.jpg',
    category: 'Korean Drama',
    telegramCode: 'itaewon_class_hd',
    rating: 8.7,
    views: '2.1M',
    year: '2020',
    quality: 'HD',
    description: 'On his first day of attending his father\'s former high school, a young man runs into trouble and becomes the mortal enemy of the school\'s most powerful student.',
    episodes: [
      { id: 'e1', number: 1, season: 1, title: 'Episode 1', duration: '1h 09m', telegramCode: 'ic_ep1' },
      { id: 'e2', number: 2, season: 1, title: 'Episode 2', duration: '1h 03m', telegramCode: 'ic_ep2' },
    ]
  },
  {
    id: '11',
    title: 'The Dark Knight',
    thumbnail: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    category: 'Exclusive',
    telegramCode: 'dark_knight_4k',
    rating: 9.0,
    views: '2.6M',
    year: '2008',
    quality: '4K',
    description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological tests.'
  },
  {
    id: '12',
    title: 'Inception',
    thumbnail: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
    category: 'Exclusive',
    telegramCode: 'inception_4k',
    rating: 8.8,
    views: '2.4M',
    year: '2010',
    quality: '4K',
    description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.'
  }
];

export const CATEGORIES = ['Exclusive', 'Korean Drama', 'Series', 'All'];