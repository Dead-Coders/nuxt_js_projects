# Blog & Portfolio Website

Built with Nuxt 3, Tailwind CSS and GraphQL

## Demo Links

Main Link:
[Live Site](https://blog.brandonwinger-air.com/)

gh-pages Link:
[GitHub Pages](https://brandonwingerair.github.io/portfolio-nuxt-tailwind-graphql/)

## About The Project

Custom Features:
- Color scheme, spacing & UI additions
- Animated gradient background
- Nuxt pages and layouts
- Github Actions workflow & deployment
- API token environment secret and baseURL variable
- Responsive styles and graphic design

Redesign based on a [tutorial series](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gqdtrsPXR3K7nJhvYugyni) by [Dan Vega](https://www.danvega.dev/).

## Setup

### Add the following to environment file (.env)

```Dotenv
# GitHub API for Projects page
GH_TOKEN=YOUR_PERSONAL_ACCESS_TOKEN

# Optional: Enable search engine crawl & index
# SEO_ENV=production

# Optional: Set port if required
# PORT=3000

# Optional: Subdirectory for Nuxt config baseURL
# NUXT_APP_BASE_URL='/your-subdomain'
```

### SEO Configuration (nuxt.config.ts)

Check out the [robots module documentation](https://nuxtseo.com/robots/getting-started/installation) for more information.

### Make sure to install the dependencies

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

### Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

### Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.