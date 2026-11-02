# Template source and adaptation

The Climate City landing page uses the user-supplied **Curevo v1.0 HTML template by Unifato**, located at `/Users/mac/Downloads/Curevo_v1.0/HTML/`.

- `dist/curevo.css` is the retained compiled `HTML/dist/assets/app.css` from that template.
- The navigation structure, split full-image hero, introductory image strip, three-column values, white feature card, dark specialty split section, and pill buttons are adapted from `HTML/src/index.html` and `HTML/src/partials/navbar.html`.
- `dist/climate-landing.css` adjusts the template palette, scale and responsive composition for Climate City.
- All medical stock copy, imagery, testimonials, pricing and appointments were removed. Project content comes from the supplied Climate City brochure and the current conceptual visualisation brief.
- The template's JavaScript dependencies are not needed by this adaptation. `dist/landing.js` supplies a small accessible mobile menu and destination rendering from `data.json`.
- The original interactive world remains at `dist/explore.html`, with `app.js` and `styles.css` unchanged. No template assets overwrite the generated destination imagery.

The source template remains governed by the user's existing template license. This project does not grant a new license to redistribute it independently.
