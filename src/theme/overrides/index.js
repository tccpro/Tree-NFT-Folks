import { merge } from "lodash";
import Card from "./Card";

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme) {
  return merge(Card(theme));
}
