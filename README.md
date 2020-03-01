# Mary Warrington Nike Take Home Challenge

### Local Development
For local development, run the following commands from the root of this project:

`npm install`

`npm start`

[localhost:8080](localhost:8080) should automatically open in your browser.

To run tests, use command `npm run cypress:open`.

### Known Issues

- Webpack. This is my first time setting up WebPack from scratch, so I'm sure there are some issues there. This is an area I'm hoping to learn more about, with guidance from someone more experience than I!
- Error handling while fetching from the Unsplash API in `index.js` could be improved. There are errors being thrown in the console that I can't track down. I'd love to know why they're there!
- API Key: This relates to Webpack, but I couldn't quite figure out how to utilize a `.env` file to keep my API key secure. Luckily this isn't an app that really requires it, but I'm eager to learn best practices and more node.js to solve this issue.