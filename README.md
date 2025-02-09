# Boat Monitor Homepage

## Description

Boat Monitor Homepage is a web application designed to monitor and display various metrics and statuses of the B is for Build boat fleet. It provides real-time data and a user-friendly interface.

## Features

- Real-time boat status updates
- User-friendly dashboard
- Historical data analysis

## Adding New Boats

To add a new boat to the application, follow these steps:

1. Open the `constants.ts` file located in the `src` directory.
2. Add a new entry to the `BOATS` array with the details of the new boat. For example:

   ```typescript
   // filepath: /boat_monitor_homepage/src/constants.ts

   export const BOATS_TO_DISPLAY = [
     // ...existing boats...
     {
       name: "Pontoon Boat", // The name of the boat
       thingSpeakChannelId: 1234567, // The ThingSpeak channel id of the boat
       monitors: [
         // An array of charts we want to show for the boat
         {
           title: "Battery voltage", // The title of the chart
           key: "voltage", // The case sensitive field name from ThingSpeak for the value we want to display
           unitPostfix: "v", // The unit shown beside the tick values in the y axis
         },
       ],
     },
   ];
   ```

## Deployment

GitHub Actions are used to automatically build and deploy the application.
In order for this to work:

1. Go to your repository on GitHub.
2. Click on the `Settings` tab.
3. In the left sidebar, click on `Pages`.
4. Under `Source`, select `GitHub Actions`.

Anytime the main branch has new commits, the application will build and become available at:
`https://{yourusername}.github.io/boat_monitor_homepage/`

## Installation

To install and run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/boat_monitor_homepage.git
   ```
2. Navigate to the project directory:
   ```bash
   cd boat_monitor_homepage
   ```
3. Ensure you are using the correct version of node (v20):
   ```bash
   nvm use
   ```
4. Install dependencies:
   ```bash
   npm install
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```
6. Once the development server is running, open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## Technologies Used

- **Vite**: https://vite.dev/
- **ThingSpeak API**: https://www.mathworks.com/help/thingspeak/rest-api.html
- **styled-components**: https://styled-components.com/
- **Recharts**: https://recharts.org
- **Axios**: https://axios-http.com/
- **TanStack Query**: https://tanstack.com/query/latest
