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
      </Head>

      <main>
          { images.map((img) => card(img)) }
      </main>
      <footer>
      </footer>
  </>
  )
}
