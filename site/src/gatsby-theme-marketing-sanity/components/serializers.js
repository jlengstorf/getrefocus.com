import React from 'react';
import BlockRenderer from 'gatsby-theme-marketing-sanity/src/components/block-renderer';
import Hero from '../../components/hero';

export default {
  container: React.Fragment,
  types: {
    block: BlockRenderer,
    hero: Hero,
    callout: ({ node }) => <pre>{JSON.stringify(node, null, 2)}</pre>,
  },
};
