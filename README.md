# Trailblazer Esports Arena — Website

A simple static website for Trailblazer Esports Arena. This repository contains the HTML pages and image resources for a small site that presents membership tiers, coaching services, contact and enquiry forms.

## Contents / Features
- Home page (Index.html) with a short overview and links to other pages.
- About, Products, Enquiry and Contact pages with basic content for the arena.
- Images and other static assets live in Images_Resources/.
- Simple navigation header shared across pages.

> Note: The pages reference a stylesheet at `CSS/style.css`, but the `CSS/` directory or `style.css` file is not present in the repository root. If you intend to use custom styling, add `CSS/style.css` or update the link in the HTML.

## File structure (at repository root)
- Index.html — Home page
- About.html — About page (mission, team)
- Products.html — Memberships, training & merch
- Enquiry.html — Contact/enquiry form
- Contact.html — Contact details and hours
- Images_Resources/ — image assets used by the site
- Documents/ — (present as a directory)
- README.md — this file

## How to view the site locally
1. Clone the repository:

   git clone https://github.com/J5Molapo/ST10524130_Molapo_WD5020_POE_P1.git

2. Open Index.html in your browser:
   - double-click Index.html, or
   - run a simple static server (recommended) from the repo root:
     - Python 3: `python -m http.server 8000`
     - then open http://localhost:8000/Index.html

## Development / Editing
- The site is plain HTML and can be edited with any text editor.
- If you add CSS, create a `CSS/style.css` file and adjust layout/colors as needed.
- Add or replace images inside Images_Resources/ and update the <img> src paths in the HTML pages.

## Deployment
- This is a static site and can be hosted on GitHub Pages:
  - In repository Settings → Pages, set the source to the main branch (or a docs/ branch) and the site will be published.
  - Ensure Index.html is at the root or the configured folder for GitHub Pages.

## To-do / Recommendations
- Add the missing CSS file (`CSS/style.css`) or update page references to point to the correct stylesheet.
- Replace placeholder contact info (phone/email/address) with real details.
- Add alt text to images where needed and check accessibility (labels, form elements).
- Consider adding a favicon and a README screenshot or demo link.

## Contributing
- Fork the repo, make changes, and open a pull request describing your edits.
- For small fixes (typos, content updates) open a PR against the default branch.

## License
Specify a license here (e.g., MIT) if you want others to reuse the content. If you’d like, I can add a LICENSE file.

## Contact
Owner / Manager: Jeffery Yelnats
Developer: Napo Molapo (WIL project)

Company phone: +27 12 452 8690
Locations: Pretoria, Johannesburg, Cape Town
