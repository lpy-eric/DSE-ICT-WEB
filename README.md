# DSE-ICT

This website contains revision resources and topic pages for HKDSE ICT.

## Structure

- `index.html`: Home page with topic cards.
- `pages/past-papers.html`: Past papers archive page.
- `pages/topics/`: Topic sub-pages directory.
- `assets/css/topic-page.css`: Shared style for topic sub-pages.

## Topic Sub-Page Naming Convention

Use lowercase kebab-case with syllabus code and topic name:

- `compulsory-a1-information-processing.html`
- `compulsory-c2-internet-applications.html`
- `elective-b-web-application-development.html`

## Add a New Topic Page

1. Create a new `.html` file under `pages/topics/`.
2. Copy the existing topic-page template structure.
3. Keep asset paths relative to nested depth, for example `../../assets/...`.
4. Call `loadNavbar({ basePath: '../../', pagesPath: '../' });`.
5. Add or update mapping in `assets/js/script.js` so the corresponding card links to the new page.