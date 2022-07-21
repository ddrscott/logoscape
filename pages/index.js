import Head from 'next/head'

import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
  const images = fs.readdirSync(path.join(process.cwd(), 'public', 'logos')).
      filter((i) => /(png|svg)$/i.test(i)).
      map((i) => {
          return {
            name: i,
            href: path.join('/logos', i)
          }
      })

  return {
    props: {
      images
    },
  }
}

function card(img) {
    return (
            <a href={img.href} title="Download">
            <img
                 src={ img.href }
                 alt={ img.name }
            />
            </a>
    )
}

export default function Home({images}) {
return (
      <>
      <Head>
          <title>Logoscape</title>
          <meta name="description" content="Logoscape" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="https://ddrscott.github.com/logoscape" />
          <meta name="twitter:creator" content="@_ddrscott_" />
          <meta property="og:title" content="Logoscape" />
          <meta name="twitter:image" content="/card.png" />
          <meta property="og:image" content="/card.png" />
          <meta property="og:description" content="All the Logos in one place." />
          <meta name="description" content="All the logos in one place." />
      </Head>
      <main>
          { images.map((img) => card(img)) }
      </main>
      <footer>
      </footer>
  </>
  )
}
