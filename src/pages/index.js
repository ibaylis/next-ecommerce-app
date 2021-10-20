import Head from 'next/head'
import Image from 'next/image'

import Header from '@components/Header';
import Container from '@components/Container';
import Button from '@components/Button';

import styles from '@styles/Home.module.scss'

import products from '@data/products.json';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Container>
          <h1>Quantum Bros. Trading Cards</h1>
          <h2>Available Cards</h2>
          <ul className={styles.products}>
          {products.map(product => {
            return (
              <li key={product.id}>
                <Image width="864" height="1200" src={product.image} alt={`Card of ${product.title}`} />
                <h3 className={styles.productTitle}>{product.title}</h3>
                <p>
                  ${product.price}
                </p>
                <p className={styles.productPrice}>
                  <Button>Add to Cart</Button>
                </p>
            </li>
            )
          })}
          </ul>
        </Container>
      </main>

      <footer className={styles.footer}>
        &copy; TheBaylisCode, { new Date().getFullYear() }
      </footer>
    </div>
  )
}