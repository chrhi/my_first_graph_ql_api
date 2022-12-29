import { userList } from "../fakeData.js";

export const resolvers = {
  Query: {
    users() {
      return userList;
    },
  },
};
