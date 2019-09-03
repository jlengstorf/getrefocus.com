/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { Global } from '@emotion/core';
import Helmet from 'react-helmet';
import Header from './header';

const Layout = ({ children }) => (
  <Styled.root>
    <Helmet>
      <link
        rel="stylesheet"
        href="https://cloud.typography.com/6102252/800028/css/fonts.css"
      />
    </Helmet>
    <Global
      styles={{
        'html, body': {
          margin: 0,
          padding: 0,
        },
        '*': {
          margin: 0,
        },
        '* + *': {
          marginTop: '20px',
        },
        '#___gatsby': {
          marginTop: 0,
        },
      }}
    />
    <Header />
    <main
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 650px 1fr',
        '> *': {
          gridColumn: 2,
          overflowX: 'hidden',
        },
      }}
    >
      {children}
    </main>
  </Styled.root>
);

export default Layout;
