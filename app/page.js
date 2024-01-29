import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  // async function onSubmit(event) {
  //   event.preventDefault()
 
  //   const formData = new FormData(event.target)
  //   const response = await fetch('/api/submit', {
  //     method: 'POST',
  //     body: formData,
  //   })
 
  //   // Handle response if necessary
  //   const data = await response.json()
  //   // ...
  // }

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          <code className={styles.code}>Troca Fácil</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Por {"Houdini Services"}
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <h1>Consulte as trocas de óleo do seu automovel.</h1>

          <form className={styles.form}> 
            <input className={styles.inputPlate} type="text" name="Placa" placeholder="xxx0x00" maxLength={7} />
            <Link href="/about" className={styles.submit} type="button">
              Procurar
            </Link>
          </form>

      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Cadastre sua troca de óleo <span>-&gt;</span>
          </h2>
          <p>Cadastre sua empresa e faça com que seus clientes nunca perca informaçoes de seus veiculos.</p>
        </a>
      </div>
    </main>
  );
}
