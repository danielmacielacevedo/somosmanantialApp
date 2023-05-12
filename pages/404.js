import Head from 'next/head';
import BackHeader from './components/BackHeader';
import Header from './components/Header';
import Cover from './components/Cover';
import AniversaryEvents from './components/AniversaryEvents';
import MonthEvents from './components/MonthEvents';
import NewsBar from './components/NewsBar';
import PredicasBar from './components/PredicasBar';
import Footer from './components/Footer';
import ManantialServices from './components/ManantialServices';
import { useContext } from 'react';
import { UserContext } from './UserProvider';
import Page404 from "./components/404"

export default function Home() {
  const { user } = useContext(UserContext);
  // {user && user.email && 

  // }

  return (
    <div id="Top" className="theme">
      <Head>
        <title>Inicio | Manantial</title>
        <meta
          name="description"
          content="Porque contigo está el manantial de la vida; En tu luz veremos la luz."
        />
        <meta property="og:title" content="Inicio | Manantial" />
        <meta property="og:url" content="https://somosmamantial.org/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon_manantial.png" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        ></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+Display:wght@100;200;400;700;900&family=Roboto:wght@100;400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Page404 />
    </div>
  );
}