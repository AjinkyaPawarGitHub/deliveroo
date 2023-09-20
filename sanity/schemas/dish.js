import { Rule } from 'postcss'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields:
    [
      {
        name: 'name',
        title: 'name of dish',
        type: 'string',
        validation: (Rule) => Rule.required(),


      },

      {
        name: 'short_description',
        title: 'Short description',
        type: 'string',
        validation: (Rule) => Rule.max(200),


      },

      {
        name: 'price',
        title: 'Price of the dish in Rs',
        type: 'number',


      },

      {
        name: 'image',
        title: 'Image of the Dish',
        type: 'image',


      },

    ]
})
