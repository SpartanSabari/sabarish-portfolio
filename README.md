# Sabarish N — Developer Portfolio

A mobile-first, production-ready static portfolio that can be deployed directly to Vercel.

## The easiest way to edit the portfolio

Most content is centralized in:

`content.js`

You can change:
- Name / role
- Hero text
- Email
- GitHub / LinkedIn
- Skills
- Experience
- Projects
- Planned project
- Education

The visual design is in:

`styles.css`

The page structure is in:

`index.html`

Interactive behavior is in:

`script.js`

Profile photo:

`profile.jpg`

## Run locally

Because this is a static site, you can simply open `index.html` in a browser for a basic preview.

For a local development server, use any static server, for example:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Vercel deployment

1. Upload this folder to a GitHub repository.
2. Sign in to Vercel.
3. Import the GitHub repository.
4. Deploy.
5. No build command is required.
6. Output is the project root.

After every GitHub update, Vercel can automatically redeploy the site.

## Important

Replace `[YOUR EMAIL]` in `content.js` before publishing.

No client names, confidential project information, credentials, private URLs or internal architecture are included.


## Phone upload structure

All files are intentionally in the repository root so they can be uploaded easily from Android:

- index.html
- styles.css
- script.js
- content.js
- profile.jpg
- README.md

There is no assets folder.
