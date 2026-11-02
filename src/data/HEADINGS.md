# Website headings

Edit mainHeadings.json to change website hero and section headings.

- defaults.hero controls all hero headings.
- defaults.section controls all section headings.
- headings holds text by component or service key.
- Each heading can optionally override mobile, tablet, desktop, weight, lineHeight, and letterSpacing. Sizes and letterSpacing are in pixels. Tablet starts at 768px; desktop starts at 1024px.
- Use \n inside text for an intentional line break.

Example individual heading:

```json
"HomeHero": {
  "text": "We build software that moves businesses forward.",
  "mobile": 32,
  "tablet": 38,
  "desktop": 52,
  "weight": 700
}
```

Delivery and portfolio JSON refer to headings using headingKey. Their heading text is maintained only in mainHeadings.json. Section labels have separate text in sectionLabels.json and typography in SectionLabel.css.

MainHeading.tsx and MainHeading.css render the common heading style. Admin headings, article titles/content from the database, and card titles remain controlled by their respective features.
