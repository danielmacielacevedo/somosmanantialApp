import Head from 'next/head'
import HeaderMembers from '../../components/HeaderMembers'
import BackHeader from '../../components/BackHeader'
import MenuMobileHome from '../../components/MenuMobileHome'
import BackMenuMobile from '../../components/BackMenuMobile'
import AllPost from '../../components/post/AllPost'
import BackSidebar from '../../components/BackSidebar'
import MenuMembers from '../../components/MenuMembers'
import Home from 'daniel/pages'

export default function Miembros() {

  return (
    <div className='theme'>
      <Head>
        <title>Panel Miembros | Manantial</title>
        <meta name="description" content="Panel para Miembros de Manantial de Vida." />
        <meta property="og:title" content="Panel miembros | Manantial" />
        <meta property="og:url" content="https://somosmamantial.org/miembros" />
        <meta property="og:image" content="/assets/icon_manantial.png" />
        <link rel="apple-touch-icon" href="/assets/icon_manantial.png"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon_manantial.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+Display:wght@100;200;400;700;900&family=Roboto:wght@100;400;700&display=swap" rel="stylesheet"></link>
      </Head>
      <HeaderMembers />
      <BackHeader />
            <div className='PageGlobalContainer'>
        <BackSidebar />
        <div className='SidebarSectionContent'>
          <MenuMembers />  
        </div>
        <div className='PrincipalSectionContent'>
          <div className='PageContainer'>
            <div className='PageContent PageContentIntern'>
              <Home />
            </div>
          </div>
        </div>
      </div>
      <BackMenuMobile />
      <MenuMobileHome />
    </div>
  )
}