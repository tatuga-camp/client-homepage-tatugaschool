import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { announcementType } from "./announcementType";
import { news } from "./newsType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    news,
    blockContentType,
    categoryType,
    postType,
    authorType,
    announcementType,
  ],
};
