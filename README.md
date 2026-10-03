# Carearz

A job search app with detailed filters that generates a resume and cover letter tailored to the job you pick.

**Live site:** https://izzybf.github.io/carearz/

## What it does

- **Searches you can stack.** Each search has its own filters, and results show jobs that match any of them. For example: "Remote" or "Part-time within 15 miles of home".
- **Detailed filters.** Keywords and words to exclude, remote/hybrid/on-site, schedule and max hours per week, any number of US zip codes with a distance, minimum pay (hourly or yearly), experience level, benefits, industry, employer type, how recently it was posted, and a match against your resume, your hobbies, or both.
- **Your profile.** Paste your resume, then add your skills, hobbies and home city.
- **Tailoring.** Pick a job to get a tailored resume, a cover letter and short notes on how well you fit. You can edit, copy and download each one.
- **Applications.** Every tailored set is saved so you can track its status.

The jobs that ship with the app are made-up examples. Use **+ Add a job** to paste a real posting from any site.

## Running it

It's one static file, `index.html`, with no build step. Open it in a browser or serve the folder with any static host.

- **On GitHub Pages or any other host**, tailoring and "fill in from posting" use your own Claude API key, which you add under **My resume**. The key stays in your browser's local storage and goes only to `api.anthropic.com`. Your profile, searches and applications are also kept in your browser.
- **Inside the Claude app** (as a published Artifact), it uses your Claude account instead, so you don't need a key, and your data saves to your account.

## Zip code data

Zip code locations come from the [zipcodes](https://www.npmjs.com/package/zipcodes) npm package (BSD license). They're inlined into `index.html` as a compact table, so the app makes no network requests for location lookups. To regenerate the table, use `scripts/build-zipdata.js`.
