import { type SchemaTypeDefinition } from 'sanity'
import { blog } from './blog'
import { comment } from './comment'
import { tag } from './tag'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog,comment,tag],
}
