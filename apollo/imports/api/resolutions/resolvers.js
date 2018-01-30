import Resolutions from './resolutions';


// Resolutions.insert({
//   name: "Test Res"
// })



export default {
  Query: {
    resolutions(obj, args, { userId }) {
      console.log(userId);
      return Resolutions.find({
        userId
      }).fetch();
    }
  },

  Mutation: {
    createResolution(obj, { name }, context) {  // parameter:  obj, args, context
      console.log(name);
      const resolutionId = Resolutions.insert({
        name
      });
      return Resolutions.findOne(resolutionId);
    }
  }
};