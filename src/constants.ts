/*
 * The boats that will be displayed on the dashboard.
 * Each boat has a name, a ThingSpeak channel ID, and a list of monitors.
 * The monitors have a title, a key that corresponds to the field in the ThingSpeak channel, and a unit postfix.
 * The key is used to extract the value from the JSON response.
 * The unit postfix is displayed next to the y value ticks in the graph.
 */
export const BOATS_TO_DISPLAY = [
  {
    name: "Riva",
    thingSpeakChannelId: 2605389,
    monitors: [
      {
        title: "Battery Voltage",
        key: "Voltage",
        unitPostfix: "v",
      },
      {
        title: "Temperature",
        key: "Temperature",
        unitPostfix: "°F",
      },
    ],
  },
];

/*
 * The interval in which the data is fetched from the ThingSpeak API.
 * The value is in milliseconds.
 * We use 11 minutes because the boat does not always send data every 10 minutes exactly.
 */
export const DATA_UPDATE_INTERVAL = 11 * 60 * 1000;
