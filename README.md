# Advanced-IPM Scheduling

[Deployed Site](https://aipm-client.herokuapp.com/)

This application was built using a React with DevExtreme's React Scheduler library on the front end with a Ruby On Rails API on the back end. The biggest challenge was incorporating the Scheduler library together with deliverables required on this project such as the pop-up module when clicking open time slots, and configuring API data from Rails to play well with the library's components.

If I continued working on this project, my immediate next step would be to build full CRUD capabilities for technicians, work orders, and locations. Using the scheduler library, it is easy importing plug-ins to alter appointments on the calendar, but I would make sure those changes are persisted in Rails on new creations, updates, or deletions.

## Technologies

- React | React Scheduler | Bootstrap | Material UI
- Ruby on Rails | PostgreSQL [GitHub link here](https://github.com/ekhu94/aipm-scheduling-server)

## Setup and Installation

### Clone the repository from [Github](https://github.com/ekhu94/aipm-scheduling-client).

```bash
git clone git@github.com:ekhu94/aipm-scheduling-client.git
```

### Check your node version with `node -v`.

You will need to have `Node Package Manager` in order to run this application. You can install node/npm using [node](https://nodejs.org/en/download/).

### Install dependencies using NPM or Yarn

Run `npm install` or `yarn add` to install all required dependencies.

### Configure API endpoint

By default, the server-side API endpoint is set to its deployed address on Heroku. If you have the back end server repository running locally on `localhost:3000`, you will need to change the value of `BACKEND_URL` inside `src/services/api.js`.

#### `src/services/api.js`

```bash
const BACKEND_URL = 'https://localhost:3000/api/v1/';
```

## Serve

Once dependencies are installed, use `npm start` to boot up the application.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Created By

Erik Huang - https://github.com/ekhu94
