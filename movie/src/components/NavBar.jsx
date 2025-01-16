import React from 'react';
import styled from 'styled-components'




const Header = styled.nav`
    width: 100%;
    height: 100%;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    /* padding: 20px 10px; */
    gap: 20px;

    input {
        flex-grow: 1;
        height: 30px;
    }

    span, button {
        display: flex;
        align-items: center;
    }
`




export default function NavBar () {



  return (
    <>
        <Header>
               <span>🎬</span>
               <input type="text" />
               <button>로그인</button>
               <button>회원가입</button>
        </Header>

    </>
  );
};





