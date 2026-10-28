const mockMovies = [
  {
    _id: 'movie-1',
    title: 'Inception',
    image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1200&q=80',
    genre: 'action, sci-fi, adventure',
    language: 'english',
    director: 'Christopher Nolan',
    cast: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page',
    description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    duration: 148,
    releaseDate: '2024-01-01',
    endDate: '2035-12-31'
  },
  {
    _id: 'movie-2',
    title: 'Interstellar',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    genre: 'adventure, drama, sci-fi',
    language: 'english',
    director: 'Christopher Nolan',
    cast: 'Matthew McConaughey, Anne Hathaway, Jessica Chastain',
    description: 'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.',
    duration: 169,
    releaseDate: '2024-02-01',
    endDate: '2035-12-31'
  },
  {
    _id: 'movie-3',
    title: 'The Dark Knight',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
    genre: 'action, crime, drama',
    language: 'english',
    director: 'Christopher Nolan',
    cast: 'Christian Bale, Heath Ledger, Aaron Eckhart',
    description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    duration: 152,
    releaseDate: '2024-03-01',
    endDate: '2035-12-31'
  },
  {
    _id: 'movie-4',
    title: 'Avatar: The Way of Water',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    genre: 'action, adventure, fantasy',
    language: 'english',
    director: 'James Cameron',
    cast: 'Sam Worthington, Zoe Saldana, Sigourney Weaver',
    description: 'Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri to protect their home.',
    duration: 192,
    releaseDate: '2024-04-01',
    endDate: '2035-12-31'
  },
  {
    _id: 'movie-5',
    title: 'Cyberpunk Odyssey',
    image: 'https://images.unsplash.com/photo-1515260268569-9271009adfdb?auto=format&fit=crop&w=1200&q=80',
    genre: 'sci-fi, action, thriller',
    language: 'english',
    director: 'Denis Villeneuve',
    cast: 'Ryan Gosling, Harrison Ford, Ana de Armas',
    description: 'A young blade runner unearths a long-buried secret that leads him to track down former blade runner Rick Deckard, who has been missing for thirty years.',
    duration: 164,
    releaseDate: '2030-01-01',
    endDate: '2035-12-31'
  },
  {
    _id: 'movie-6',
    title: 'Galactic Horizon',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&q=80',
    genre: 'adventure, fantasy, sci-fi',
    language: 'english',
    director: 'Ridley Scott',
    cast: 'Matt Damon, Jessica Chastain, Kristen Wiig',
    description: 'An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive.',
    duration: 144,
    releaseDate: '2030-05-01',
    endDate: '2035-12-31'
  },
  {
    _id: 'movie-7',
    title: 'Neon Shadows',
    image: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=1200&q=80',
    genre: 'mystery, thriller, crime',
    language: 'english',
    director: 'David Fincher',
    cast: 'Jake Gyllenhaal, Mark Ruffalo, Robert Downey Jr.',
    description: 'Between 1968 and 1983, a San Francisco cartoonist becomes an amateur detective obsessed with tracking down the infamous Zodiac Killer.',
    duration: 157,
    releaseDate: '2030-08-01',
    endDate: '2035-12-31'
  },
  {
    _id: 'movie-8',
    title: 'Grand Cinema Royale',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80',
    genre: 'comedy, drama, musical',
    language: 'english',
    director: 'Damien Chazelle',
    cast: 'Ryan Gosling, Emma Stone, Rosemarie DeWitt',
    description: 'While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.',
    duration: 128,
    releaseDate: '2024-05-01',
    endDate: '2035-12-31'
  }
];

const mockCinemas = [
  {
    _id: 'cinema-1',
    name: 'iMovies IMAX Cinema',
    city: 'New York',
    ticketPrice: 15,
    seatsAvailable: 42,
    seats: [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
    ],
    image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800&q=80'
  },
  {
    _id: 'cinema-2',
    name: 'iMovies Grand Palace',
    city: 'Los Angeles',
    ticketPrice: 18,
    seatsAvailable: 38,
    seats: [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 0],
      [0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
    ],
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80'
  },
  {
    _id: 'cinema-3',
    name: 'iMovies Dolby Screen',
    city: 'San Francisco',
    ticketPrice: 14,
    seatsAvailable: 40,
    seats: [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
    ],
    image: 'https://images.unsplash.com/photo-1574267432553-4b4628081c31?auto=format&fit=crop&w=800&q=80'
  },
  {
    _id: 'cinema-4',
    name: 'iMovies Starlight Theater',
    city: 'Chicago',
    ticketPrice: 12,
    seatsAvailable: 42,
    seats: [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
    ],
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80'
  }
];

const mockShowtimes = [
  {
    _id: 'showtime-1',
    startAt: '18:00',
    startDate: '2024-01-01',
    endDate: '2035-12-31',
    movieId: 'movie-1',
    cinemaId: 'cinema-1'
  },
  {
    _id: 'showtime-2',
    startAt: '21:00',
    startDate: '2024-01-01',
    endDate: '2035-12-31',
    movieId: 'movie-1',
    cinemaId: 'cinema-2'
  },
  {
    _id: 'showtime-3',
    startAt: '19:30',
    startDate: '2024-01-01',
    endDate: '2035-12-31',
    movieId: 'movie-2',
    cinemaId: 'cinema-1'
  },
  {
    _id: 'showtime-4',
    startAt: '20:15',
    startDate: '2024-01-01',
    endDate: '2035-12-31',
    movieId: 'movie-3',
    cinemaId: 'cinema-3'
  },
  {
    _id: 'showtime-5',
    startAt: '17:00',
    startDate: '2024-01-01',
    endDate: '2035-12-31',
    movieId: 'movie-4',
    cinemaId: 'cinema-4'
  }
];

const mockUser = {
  _id: 'user-demo-1',
  name: 'Demo Admin',
  username: 'admin',
  email: 'admin@imovies.com',
  role: 'superadmin',
  phone: '1234567890'
};

module.exports = {
  mockMovies,
  mockCinemas,
  mockShowtimes,
  mockUser
};
