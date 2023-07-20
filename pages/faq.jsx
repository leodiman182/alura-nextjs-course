import Head from 'next/head';
import Link from '../src/components/Link';

// [SSR] - Server Side Rendering
//  function getServerSideProps() {
//  console.log('EM MOVO DEV, AMBOS SEMPRE RODAM A CADA ACESSO');
//  console.log('Roda a cada novo acesso do usuário na página');

//  [SSG] - Static Site Generation
export async function getStaticProps() {
  console.log('Roda SOMENTE em build time (1 vez ao construir a aplicação)');

  const FAQ_API_URL =
    'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';

  const faq = await fetch(FAQ_API_URL)
    .then((serverRes) => serverRes.json())
    .then((res) => res);

  return {
    props: {
      faq,
    },
  };
}

export default function FAQPage({ faq }) {
  return (
    <div>
      <Head>
        <title>FAQ - Alura Cases Campanha</title>
      </Head>
      <h1>Página de FAQs</h1>
      <Link href="/">Ir para home</Link>
      <ul>
        {faq.map(({ answer, question }) => (
          <li key={question}>
            <article>
              <h2>{question}</h2>
              <p>{answer}</p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
