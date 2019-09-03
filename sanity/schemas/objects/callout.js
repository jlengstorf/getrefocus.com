import { FaInfoCircle } from 'react-icons/fa';

export default {
  title: 'Callout Section',
  name: 'callout',
  type: 'object',
  icon: FaInfoCircle,
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'figure'
    },
    {
      title: 'Type',
      name: 'type',
      type: 'string',
      options: {
        list: [
          { value: 'good', title: '“Good Habit” Callout' },
          { value: 'bad', title: '“Bad Habit” Callout' }
        ]
      }
    },
    {
      title: 'Label',
      name: 'label',
      type: 'string',
      description: 'Small text above the heading.'
    },
    {
      title: 'Heading',
      name: 'heading',
      type: 'string'
    },
    {
      title: 'Text',
      name: 'text',
      type: 'content'
    }
  ]
};
