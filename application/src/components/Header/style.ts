import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
    column-gap: .5rem ;
    
    a{
       width: 3rem;
       height: 3rem;

       display: flex;
       align-items: center;
       justify-content: center;
   
       text-decoration:  none;
       cursor: pointer;
       transition: .2s filter ;
       border-top: 3px solid transparent;
       border-bottom: 3px solid transparent;
       color: ${props => props.theme["gray-100"]};


       &:hover{
        border-bottom-color: ${props => props.theme["green-500"]};
        color: ${props => props.theme["green-500"]};
        filter: opacity(.8);
      }

   
      &.active{
        color: ${props => props.theme["green-500"]}
      
      }


    }

  }


  



`