import { userList, moviesList } from "../fakeData.js";
import _ from "lodash";

export const resolvers = {
  Query: {
    users: () => {
      return userList;
    },
    user: (parent, args) => {
      const id = args.id;
      const user = _.find(userList, { id: Number(id) });
      return user;
    },
    movies: () => {
      return moviesList;
    },
    movie: (parent, args) => {
      const movieTitle = args.name;
      const movie = _.find(moviesList, { title: movieTitle });
      return movie;
    },
  },
  User: {
    favoriteMovies: () => {
      const movies = _.filter(
        moviesList,
        (movie) => movie.yearOfPublication <= 2033
      );
      return movies;
    },
  },
  Mutation: {
    createUser: (parent, args) => {
      const user = args.input;
      console.log(user);
    },
  },
};
