import React, { useState, useEffect } from 'react';
import BackHeader from './BackHeader'
import HeaderMembers from './HeaderMembers'
import Reproductor from './Reproductor/Reproductor'
import NewsBar from './NewsBar'
import DynamicHead from './DynamicHead'
import MenuMobile from './MenuMobile';
import BackMenuMobile from './BackMenuMobile';
import BackSidebar from './BackSidebar'
import MenuMembers from './MenuMembers'

export default function Predica(props) {
  const [scrollDown, setScrollDown] = useState(false);



  return (
    <div id='Top' className='Site theme'>
      <DynamicHead nombre={props.nombre} indice={props.indice} />
      <HeaderMembers />
      <BackHeader />
      <div className='PageGlobalContainer'>
        <BackSidebar />
        <div className='SidebarSectionContent'>
          <MenuMembers />  
        </div>
        <div className='PrincipalSectionContent'>
          <div className="MainContainer">
          <div className='PrimarySection'>
            <Reproductor nombre={props.nombre} indice={props.indice} />
          </div>
      </div>
      <NewsBar />
        </div>
      </div>
      <BackMenuMobile />
      <MenuMobile />
      <style jsx>{`
        .Site
        {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: auto;
          align-items: center;
          background-color: var(--primary-color);
        }
        .MainContainer
        {
          display: flex;
          width: 100%;
          height: auto;
          gap: 5%;
          padding: 0 5%;
          justify-content: center;
        }
        .PrimarySection
        {
          display: flex;
          flex: 2;
          width: 100%;
          max-width: 700px;
          height: auto;
          padding-top: 20px;
        }
        .SecondarySection
        {
          display: flex;
          flex-direction: column;
          flex: 1;
          width: 100%;
          height: auto;
          gap: 20px;
        }
        @media only screen and (max-width: 860px)
        {
          .MainContainer
          {
            flex-direction: column;
            padding: 0;
            gap: 20px
          }
          .MainContainer.scroll-down
          {
            max-width: none;
            padding: 0;
          }
          .PrimarySection
          {
            padding-top: 0px;
            max-width: none;
          }
          .SecondarySection
          {
            padding: 0 20px
          }
        }
      `}</style>
    </div>
  )
}