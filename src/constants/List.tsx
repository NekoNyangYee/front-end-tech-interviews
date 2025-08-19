import type { ListItemProps } from "../type";
import { JS_LISTS } from ".";

interface ListItem {
  category: string;
  data: ListItemProps[];
}

export const LIST: ListItem[] = [
  {
    category: "JS",
    data: JS_LISTS,
  },
];
