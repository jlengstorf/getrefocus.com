import React from 'react';
import PortableText from 'gatsby-theme-marketing-sanity/src/components/portable-text';

const Page = ({ content }) => {
  return <PortableText blocks={content} />;
};

export default Page;
