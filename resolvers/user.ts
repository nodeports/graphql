import User from "../models/User";

const resolvers = {
  Query: {
    getUser: async (_: any, { id }: { id: string }) => {
      return await User.findById(id);
    },
    getUsers: async () => {
      return await User.find();
    },
  },
  Mutation: {
    createUser: async (_: any, { userInput }: { userInput: any }) => {
      const user = new User(userInput);
      await user.save();
      return user;
    },
    updateUser: async (
      _: any,
      { id, userInput }: { id: string; userInput: any }
    ) => {
      return await User.findByIdAndUpdate(id, userInput, { new: true });
    },
    deleteUser: async (_: any, { id }: { id: string }) => {
      await User.findByIdAndDelete(id);
      return "User deleted";
    },
  },
};

export default resolvers;
