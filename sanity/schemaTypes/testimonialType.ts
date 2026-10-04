import { CommentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

/**
 * A teacher's or school's quote about Tatuga School, shown on the homepage.
 * The privacy policy promises quotes are only published with permission, so
 * `permission` must be ticked before a document can be published.
 */
export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  icon: CommentIcon,
  groups: [
    { name: "person", title: "Person", default: true },
    { name: "thai", title: "ไทย (Thai)" },
    { name: "english", title: "English" },
    { name: "settings", title: "Settings" },
  ],
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      group: "person",
      description: "As the person wants to be credited, e.g. ครูสมศรี ใจดี",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "schoolName",
      title: "School",
      type: "string",
      group: "person",
    }),
    defineField({
      name: "photo",
      title: "Photo",
      type: "image",
      group: "person",
      description: "Optional. A square face photo works best.",
      options: { hotspot: true },
    }),
    defineField({
      name: "permission",
      title: "This person agreed to have this quote shown on our website",
      type: "boolean",
      group: "person",
      initialValue: false,
      validation: (rule) =>
        rule
          .required()
          .custom((value) =>
            value === true
              ? true
              : "Only publish quotes the person has agreed to share.",
          ),
    }),
    defineField({
      name: "quoteTh",
      title: "Quote (Thai)",
      type: "text",
      rows: 4,
      group: "thai",
      validation: (rule) => [
        rule.required(),
        rule.max(420).warning("Long quotes get cut off on phones."),
      ],
    }),
    defineField({
      name: "roleTh",
      title: "Role (Thai)",
      type: "string",
      group: "thai",
      description: "e.g. ครูวิชาคณิตศาสตร์ ม.ต้น",
    }),
    defineField({
      name: "quoteEn",
      title: "Quote (English)",
      type: "text",
      rows: 4,
      group: "english",
      description: "Leave empty to show the Thai quote on the English page.",
      validation: (rule) =>
        rule.max(420).warning("Long quotes get cut off on phones."),
    }),
    defineField({
      name: "roleEn",
      title: "Role (English)",
      type: "string",
      group: "english",
      description: "e.g. Lower-secondary maths teacher",
    }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
      group: "settings",
      description: "Optional, 1–5. Leave empty to hide stars.",
      validation: (rule) => rule.min(1).max(5).integer(),
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      group: "settings",
      description: "Shown large above the others. Feature one quote at a time.",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      group: "settings",
      description: "Lower numbers show first. Up to 13 quotes are shown.",
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "schoolName", media: "photo" },
  },
  orderings: [
    {
      title: "Display order",
      name: "orderAsc",
      by: [
        { field: "featured", direction: "desc" },
        { field: "order", direction: "asc" },
      ],
    },
  ],
});
