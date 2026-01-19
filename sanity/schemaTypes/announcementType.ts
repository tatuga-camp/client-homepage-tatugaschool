import { BlockContentIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const announcementType = defineType({
  name: "announcement",
  title: "Announcement",
  type: "document",
  icon: BlockContentIcon,
  fields: [
    defineField({
      name: "title",
      title: "title",
      type: "string",
      validation: (Rule) =>
        Rule.required().min(1).warning("must fill the data"),
    }),
    defineField({
      name: "description",
      title: "description",
      type: "blockContent",
      validation: (Rule) =>
        Rule.required().min(1).warning("must fill the data"),
    }),
    defineField({
      name: "type",
      title: "type",
      type: "string",
      options: {
        list: [
          { title: "success", value: "success" },
          { title: "info", value: "info" },
          { title: "warning", value: "warning" },
          { title: "error", value: "error" },
        ], // <-- predefined values
        layout: "radio", // <-- defaults to 'dropdown'
      },
    }),
    defineField({
      title: "expired At",
      name: "expiredAt",
      type: "datetime",
      validation: (rule) => rule.required().min(new Date().toISOString()),
      options: {
        dateFormat: "DD-MM-YYYY",
        timeFormat: "HH:mm",
      },
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
