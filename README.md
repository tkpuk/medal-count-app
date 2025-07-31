## Medal Count App

Medal Count App to display the Olympic games results. The app shows up to 10 countries that have won the most medals.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Make sure the following environment variable(s) are in your `.env.local` file.

```bash
MEDAL_COUNT_API_BASE_URL=http://localhost:3000/api
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the app. Use following URLs to access the app.

Home page: [http://localhost:3000](http://localhost:3000)

Medal Count page: [http://localhost:3000/medal-count](http://localhost:3000/medal-count)

Medal Count page with sort param: [http://localhost:3000/medal-count?sort=silver](http://localhost:3000/medal-count?sort=silver)

Medal Count api route: [http://localhost:3000/api/medal-count](http://localhost:3000/api/medal-count)

## Next Steps

Here are the next steps we can take:

- Implement accessibility standards
- Add unit tests
- Remove unused Create React App default code
