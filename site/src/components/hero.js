/** @jsx jsx */
import { jsx } from 'theme-ui';
import BGTile from '../assets/header-tile.svg';

const Hero = ({ node }) => (
  <div
    sx={{
      backgroundImage: `url(${BGTile})`,
      backgroundSize: 120,
      borderBottom: '1px solid',
      borderBottomColor: 'accent',
      gridColumn: '1 / 4',
      py: 5,
      textAlign: 'center',
    }}
  >
    <h1
      sx={{
        color: 'primary',
        display: 'block',
        fontFamily: 'heading',
        fontSize: 7,
        fontWeight: 900,
        maxWidth: '90vw',
        mx: 'auto',
        my: 0,
        textRendering: 'optimizeLegibility',
        textShadow: '3px 3px 0 rgba(69,76,82,.2)',
        textTransform: 'uppercase',
        width: 750,
        '-webkit-font-smoothing': 'antialiased',
      }}
    >
      {node.heading}
    </h1>
    <p
      sx={{
        color: '#585e63',
        display: 'block',
        fontFamily: 'heading',
        fontSize: 5,
        fontWeight: 500,
        maxWidth: '92vw',
        mt: 0,
        mx: 'auto',
        textRendering: 'optimizeLegibility',
        textShadow: '1px 1px 0 rgba(69,76,82,.2)',
        width: 750,
        '-webkit-font-smoothing': 'antialiased',
      }}
    >
      {node.subheading}
    </p>
    <p
      sx={{
        display: 'block',
        fontFamily: 'heading',
        fontSize: 4,
        fontWeight: 300,
        maxWidth: '90vw',
        mx: 'auto',
        textRendering: 'optimizeLegibility',
        width: 750,
        '-webkit-font-smoothing': 'antialiased',
      }}
      dangerouslySetInnerHTML={{ __html: node.text.replace(/\n/g, '<br/>') }}
    />
  </div>
);

export default Hero;
