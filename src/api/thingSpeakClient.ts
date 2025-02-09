import axios from "axios";

const thingSpeakClient = axios.create({
  baseURL: "https://api.thingspeak.com/channels",
  timeout: 30000,
});

export default thingSpeakClient;
