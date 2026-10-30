# Pravin Gavali — Developer Portfolio

A responsive, single-page Angular portfolio for Pravin Gavali, built with standalone Angular components and SCSS. It presents CV-based professional experience, education, technical skills, project history, contact details, and CV actions alongside project filters and detail dialogs, seven persistent visual themes, mobile navigation, and a validated contact form.

## Run locally

```bash
npm ci
npm start
```

Open `http://localhost:4200/`. Create an optimized production build with `npm run build`.

## CV and personal configuration

The portfolio content was updated from Pravin's supplied CV. Experience duration is calculated from June 2022 and refreshed automatically at the start of each calendar month; update `careerStartMonth` in `src/app/app.ts` if the verified start date changes. The local PDF is served from `public/assets/pravin-gavali-resume.pdf`; the contact section provides a local PDF download. The hero links to the Google Drive CV for viewing and direct download. Drive access was not verified, so the file must be shared with the intended audience (for example, anyone with the link) for those actions to work.

The email address and phone number in `src/app/app.ts` are taken from the CV. The supplied LinkedIn profile is configured in the `contact` object and appears in the Home section, contact section, and footer. GitHub appears as a non-clickable "Profile coming soon" placeholder in those sections until a verified profile URL is added to `contact.github`, which automatically enables the links. Update the experience, education, skill, and project data in `src/app/app.ts` only when verified details are available. Do not add confidential client or patient information.

The contact form uses a `mailto:` fallback and does not send or store messages on a server. The Home section uses the supplied portrait, optimized and served locally as `public/assets/pravin-gavali-portrait.jpg`. Replace that file to update the photo, and update the image dimensions and alt text in `src/app/app.html` if needed. The responsive frame uses a face-focused crop without modifying the original attachment.

## Project images

The project cards use the supplied images stored in `public/assets/projects`: `imed-one.png` (uploaded healthcare image), `club-caddie.jpg` (supplied golf cart image), and `healthcare-appointments.png` (supplied appointment scheduling image). Update each project's `image` and descriptive `imageAlt` fields in `src/app/app.ts` when replacing an image. Images are served locally and lazy-loaded; no external image service is needed at runtime. These are illustrative images, not application screenshots. Ensure you have the appropriate rights to publish the supplied images.

## Project descriptions

Each project's **View Details** action opens an expanded overview with the role, organization, period, key features and modules, categorized technology stack, and responsibilities. Edit these fields in the `projects` array in `src/app/app.ts`. Descriptions expand on the CV-backed scope without introducing unverified achievements, metrics, architecture, or confidential implementation details. The cards and detail views share the same technology groups.

## Stack

- Angular standalone application
- TypeScript and Angular template control flow
- SCSS with CSS-variable theme presets
- Angular template-driven form validation
