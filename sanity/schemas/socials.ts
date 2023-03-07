import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'socials',
  title: 'Socials',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Title of Platform for social media',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'url',
      type: 'url',
    }),
  ],
})
