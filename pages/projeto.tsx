import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Head from "next/head";

const Project = () => (
  <div className={styles.container}>
    <main className={styles.main}>
      <Head>
        <title>sonhadouro - projeto</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          href='//fonts.googleapis.com/css2?family=Flamenco&display=swap'
          rel='stylesheet'
        ></link>
        <link
          href='//fonts.googleapis.com/css2?family=Open+Sans&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      <Navbar />
      <div className={styles.content}>
        <div className={styles.colLeft}>
          <h2>projeto</h2>
          <p>
            Sonhadouro é um projeto audiovisual multiplataforma em que
            convidamos diferentes pessoas para falar sobre sonhos, aqueles que
            temos acordados – os grandes desejos – e os que nos inquietam
            enquanto dormimos.
          </p>
          <p>
            O projeto foi idealizado em 2012 por alunos do curso de Comunicação
            Social – Habilitação em Midialogia da Universidade Estadual de
            Campinas (SP – Brasil), para a disciplina Projeto de TV e Vídeo,
            ministrada pelo Professor Doutor Gilberto Alexandre Sobrinho. Foi
            contemplado pela edição 2012/2013 da Bolsa SAE Aluno-Artista da
            Unicamp e ganhou o edital 1º Ocupa Atibaia da organização Incubadora
            de Artistas em março de 2014. contato
          </p>
          <p>sonhadouro@gmail.com</p>
          <p>
            Instituto de Artes
            <br />
            Rua Elis Regina, 50
            <br />
            Cidade Universitária “Zeferino Vaz”
            <br />
            Barão Geraldo, Campinas, SP
            <br />
            13083-970 – Caixa Postal 6159
          </p>
        </div>
        <div className={styles.colRight}>
          <h2>ficha técnica</h2>
          <p>
            <span className={styles.uppercase}>Direção</span>
            <br />
            Beatriz Iozzi
            <br />
            Fernando Gregório
          </p>
          <p>
            <span className={styles.uppercase}>Produção</span>
            <br />
            Myung Hwa Baldini
          </p>
          <p>
            <span className={styles.uppercase}>Ass. Produção</span>
            <br />
            Franco Simões
            <br />
            Renan Vieira
          </p>
          <p>
            <span className={styles.uppercase}>Direção de Fotografia</span>
            <br />
            Luiza Folegatti
          </p>
          <p>
            <span className={styles.uppercase}>Ass. Fotografia</span>
            <br />
            Samuel Baptista
          </p>
          <p>
            <span className={styles.uppercase}>Direção de Arte</span>
            <br />
            Ana Rute Mendes
            <br />
            Isabela Maia
          </p>
          <p>
            <span className={styles.uppercase}>Som Direto</span>
            <br />
            Adriano Gorni
            <br />
            Gabriel Hidalgo
            <br />
            Olívia Fiusa
            <br />
            Victor Negri
          </p>
          <p>
            <span className={styles.uppercase}>Still</span>
            <br />
            Tamara Gigliotti
          </p>
          <p>
            <span className={styles.uppercase}>Montagem</span>
            <br />
            Gabriela Belderrain
            <br />
            Natalia Pelizari
          </p>
          <p>
            <span className={styles.uppercase}>Trilha</span>
            <br />
            Gabriel Hidalgo
          </p>
          <p>
            <span className={styles.uppercase}>Edição de Som</span>
            <br />
            Victor Negri
          </p>
          <p>
            <span className={styles.uppercase}>Animação</span>
            <br />
            Daniel Angione
          </p>
          <p>
            <span className={styles.uppercase}>Site</span>
            <br />
            Ana Rute Mendes
          </p>
          <p>
            <span className={styles.uppercase}>Orientação de projeto</span>
            <br />
            Gilberto Alexandre Sobrinho
          </p>
        </div>
      </div>
    </main>
    <footer className={styles.footer}></footer>
  </div>
);
export default Project;
