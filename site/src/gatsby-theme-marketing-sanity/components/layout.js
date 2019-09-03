/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { Global } from '@emotion/core';

const Layout = ({ children }) => (
  <Styled.root>
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
