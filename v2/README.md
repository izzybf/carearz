# Carearz 2.0

Keep one base resume on your profile, paste any job description, and get a resume and cover letter tailored to that job. Then keep revising them in plain language until they're right.

## What it does

- **Base resume on your profile.** Upload a PDF, Word (.docx) or text file, or paste the text. It's saved to your profile and every application starts from it.
- **Tailor for a job.** Paste a job posting (and optionally a note like "emphasize my volunteer leadership"). Claude writes a tailored resume, a cover letter and short fit notes, using only facts from your resume.
- **Iterate.** Ask for changes ("make it shorter", "lead with the analytics project"), aimed at the resume, the cover letter or both. Every revision and every hand edit is saved as a new version.
- **Compare versions.** Switch between versions and turn on "Show changes" to see what was added and removed.
- **Export.** Copy, or download as Word (.docx) or Markdown.

## Running it

It's one static file, `v2/index.html`, with no build step. Open it in a browser or serve the folder from any static host such as GitHub Pages.

- **Inside the Claude app** (as a published Artifact), it uses your Claude account, so no API key is needed, and your profile and applications save to your account.
- **Anywhere else**, add your own Claude API key under **My resume**. The key stays in your browser's local storage and goes only to `api.anthropic.com`. Your profile and applications are kept in your browser.

PDF and Word reading uses [pdf.js](https://github.com/mozilla/pdf.js) and [mammoth](https://github.com/mwilliamson/mammoth.js); Word export uses [docx](https://github.com/dolanmiu/docx). All three load from jsDelivr only when needed.
