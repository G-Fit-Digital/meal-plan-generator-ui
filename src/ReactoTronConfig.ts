import Reactotron from "reactotron-react-js";

// Reactotron.configure () // controls connection & communication settings
//   .useReactNative () // add all built-in react native plugins
//   .connect (); // let's connect!
const reactotron = Reactotron.configure({
  name: "React Project"
}).connect();

export default reactotron;
