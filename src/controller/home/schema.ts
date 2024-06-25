import {createSchema} from "fire-cat";
export default {
  test: createSchema({
    name: {
      type: 'string',
      empty: false,
      max: 255,
    },
  })
}