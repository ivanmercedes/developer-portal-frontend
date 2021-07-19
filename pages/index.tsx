import Head from 'next/head';
import { useContext } from 'react';
import HeroComponent from '../components/home/hero.component';
import PopularApisComponent from '../components/apis/summary-apis.component';
import { LanguageContext } from '../context/language.context';
import { getPopularApis } from '../services/apis.service';

export default function Home({ pupularApis }: any) {
  const { t } = useContext<any>(LanguageContext);
  return (
    <div>
      <Head>
        <title>{t.app.displayName}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-blue-50 min-h-screen">
        <HeroComponent />
        <PopularApisComponent pupularApis={pupularApis} />
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const data = await getPopularApis();

  return {
    props: {
      pupularApis: data,
    },
  };
}
