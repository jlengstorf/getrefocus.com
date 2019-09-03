import { system } from '@theme-ui/presets';

export default {
  ...system,
  fonts: {
    ...system.fonts,
    heading: "'Gotham A', 'Gotham B', gotham, sans-serif",
  },
  fontSizes: [14, 16, 18, 20, 26, 30, 36, 48],
  colors: {
    ...system.colors,
    primary: '#225378',
    accent: '#eb7f00',
    heading: '#454c52',
    text: '#454c52',
    background: '#fafcf8',
  },
};
