import Head from "next/head";
import React from "react";

type Props = {};

const TheHead = (props: Props) => {
  return (
    <Head>
      <title>Dcryptgirl</title>
      <meta name="description" content="" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/logo1.jpeg" />
    </Head>
  );
};

export default TheHead;
