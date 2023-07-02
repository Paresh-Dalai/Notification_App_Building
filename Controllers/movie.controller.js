

// const Movie = require('../Models/Movie');

// exports.getShowSeats = (req, res) => {
//   const showId = req.params.id;

//   // Fetch the show details from the database based on the showId
//   const show = Movie.find(showId);

//   if (!show) {
//     return res.status(404).json({ message: 'Show not found' });
//   }

//   // Assume the show has a property called 'seats' containing the seat information
//   const seats = show.seats;

//   return res.json({ seats });
// };


// exports.createMovie = (req, res) => {
//   const { title, description, duration, releaseDate, seats } = req.body;

//   // Create a new movie instance
//   const newMovie = new Movie({
//     title,
//     description,
//     duration,
//     releaseDate,
//     seats,
//   });

//   // Save the movie to the database
//   newMovie.save((err, movie) => {
//     if (err) {
//       console.error('Error creating movie:', err);
//       return res.status(500).json({ message: 'Failed to create movie' });
//     }
//     return res.status(201).json({ movie });
//   });
// };