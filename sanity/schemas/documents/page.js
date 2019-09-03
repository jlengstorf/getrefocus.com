export default {
  title: 'Pages',
  name: 'page',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string'
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name'
      }
    },
    {
      title: 'Content',
      name: 'content',
      type: 'content'
    },
    {
      title: 'SEO Information',
      name: 'seo',
      type: 'seo'
    }
  ]
};
