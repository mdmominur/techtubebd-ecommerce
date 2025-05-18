import React from 'react'
import Head from 'next/head';

const SeoComponent = (props) => {
  const {
    title,
    description
  } = props;
  return (
    <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="keywords" content="Tech, Gadgets, Bangladesh, Smartwatch, Smartphone" />
        <meta name="author" content="TechTubeBD" />
    </Head>
  )
}

export default SeoComponent;
