/** @jsx jsx */
import { jsx } from 'theme-ui';
import BGTile from '../../assets/header-tile.svg';

const Hero = ({ node }) => (
  <div
    sx={{
      backgroundImage: `url(${BGTile})`,
      backgroundSize: 120,
      borderBottom: '1px solid',
      borderBottomColor: 'primary',
      gridColumn: '1 / 4',
      p: 6,
      textAlign: 'center',
    }}
  >
    <h1>{node.heading}</h1>
    <p>{node.subheading}</p>
    <p
      dangerouslySetInnerHTML={{ __html: node.text.replace(/\n/g, '<br/>') }}
    />
  </div>
);

export default Hero;
