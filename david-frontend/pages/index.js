import Head from 'next/head'

export default function Home({ cat }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          This is David's Site
        </h1>

        <section>
          <p>This data was returned by the cat api</p>
          <code>{JSON.stringify(cat)}</code>
        </section>

        <section>
          {cat[0] &&
            <section>
              <p>
                And here's your kitty.
              </p>
              <p>
                <img src={cat[0].url} />
              </p>
            </section>
          }
        </section>

      </main>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://api.thecatapi.com/v1/images/search')
  const cat = await res.json()

  return {
    props: {
      cat,
    },
  }
}
