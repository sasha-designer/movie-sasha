import React from 'react';
import styled from 'styled-components'
import NavBar from './components/NavBar';
import { Outlet } from 'react-router-dom';



// const Card = styled.div`

// `


export default function Layout () {



  return (
    <>
     <header style={{background: 'lightgray', padding: 16, fontSize: 24}}>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>


    </>
  );
};





