import { type SchemaTypeDefinition } from "sanity"
import { homepage } from "./schemas/homepage"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homepage],
}
