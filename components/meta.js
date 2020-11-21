import Head from "next/head";
import { CMS_NAME, HOME_OG_IMAGE_URL } from "../lib/constants";

export default function Meta() {
  return (
    <Head>
      <link rel='shortcut icon' href='/favicon.ico' />
      <meta name='msapplication-TileColor' content='#000000' />
      <meta name='msapplication-config' content='/favicon/browserconfig.xml' />
      <meta name='theme-color' content='#000' />
      <link
        href='//fonts.googleapis.com/css2?family=Flamenco&display=swap'
        rel='stylesheet'
      ></link>
      <link
        href='//fonts.googleapis.com/css2?family=Open+Sans&display=swap'
        rel='stylesheet'
      ></link>
      <link rel='alternate' type='application/rss+xml' href='/feed.xml' />
      <meta
        name='description'
        content='Sonhadouro é uma coletânea de curtos documentários poéticos sobre indivíduos e seus desejos expressos sob a premissa do sonho.'
      />
      <meta property='og:image' content={HOME_OG_IMAGE_URL} />
    </Head>
  );
}
