import { FaStar } from 'react-icons/fa';
export default {
  title: 'Hero Section',
  name: 'hero',
  type: 'object',
  icon: FaStar,
  fields: [
    {
      title: 'Heading',
      type: 'string',
      name: 'heading'
    },
    {
      title: 'Subheading',
      type: 'string',
      name: 'subheading'
    },
    {
      title: 'Text',
      type: 'text',
      name: 'text'
    }
  ]
};
