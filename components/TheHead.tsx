import Head from "next/head";
import React from "react";

type Props = {};

const TheHead = (props: Props) => {
  return (
    <Head>
      <title></title>
      <meta name="description" content="" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="" />
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin=""
      ></link>
    </Head>
  );
};

export default TheHead;
