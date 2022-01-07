import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import { DashboardPage, DashboardPageProps } from '../src/pages/DashboardPage';

type Props = DashboardPageProps;

// Nextへ依存するコードはこの層に置く
const Component: React.VFC<Props> = () => (
  <>
    <Head>
      <title>ダッシュボード</title>
    </Head>

    <DashboardPage />
  </>
);

const Page: NextPage = () => {
  return <Component />;
};

export default Page;
