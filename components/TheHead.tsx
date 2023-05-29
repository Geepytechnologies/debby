import Head from "next/head";
import React from "react";

type Props = {};

const TheHead = (props: Props) => {
  return (
    <Head>
      <title>Dcryptgirl</title>
      <meta
        name="description"
        content="Blockchain Influencer, Digital Content creator"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow"></meta>
      <meta charSet="UTF-8"></meta>
      <link rel="icon" href="/logo1.jpeg" />
    </Head>
  );
};

export default TheHead;
