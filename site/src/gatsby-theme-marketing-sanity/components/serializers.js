import React from 'react';
// import { Styled } from "theme-ui"
import BlockRenderer from 'gatsby-theme-marketing-sanity/src/components/block-renderer';
import Hero from './hero';

export default {
  container: React.Fragment,
  types: {
    block: BlockRenderer,
    hero: Hero,
    callout: ({ node }) => <pre>{JSON.stringify(node, null, 2)}</pre>,
  },
};
