
Omar's E-Comm shoes Store (Emp-ID 32211 - Associate Consultant Development @ SL)
Steps Implemented:

- Making shared components and building a few pages.
- Styling and layout
- Adding some UI library such as Tailwind and utilising it to build clean, user-friendly pages quickly
- Used approuter instead of page routing using trcp
- Dynamic routing (slug) based on products
- Fetching data from db on pages
- using Prisma ORM and using Supabase as the cloud provider
- Added loading and error states to the project to provide a better user experience
- Build API routes for your application
- Deployed on Vercel

## Deployments/Hosting

- Next.js: [Vercel](https://vercel.com/)

```bash
npm i
```

- Push and synchronize the prisma schema to the database (make sure you have prisma cli installed):

```bash
npx prisma db push
```

- Seed initial data:

```bash
npx prisma db seed
```

- Run locally:

```bash
npm run dev
```
