export default {
  title: 'Figure',
  name: 'figure',
  type: 'image',
  fields: [
    {
      title: 'Alt Text',
      name: 'alt',
      type: 'string',
      description:
        'Add a description of the image contents for people using assistive technology.',
      validation: Rule => Rule.required()
    }
  ]
};
