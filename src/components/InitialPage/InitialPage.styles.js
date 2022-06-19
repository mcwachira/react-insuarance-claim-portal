import styled from "styled-components";
import PageImage from '../../assets/background.jpg'

export const Container = styled.div`
background-image: linear-gradient(to bottom left, rgba(0, 0, 0, 0.4),rgba(0, 0, 0, 1)) , url(${PageImage});
background-size: cover;
background-repeat: no-repeat;
background-position: center center;
width: 100%;
height: 100vh;

/* overflow: hidden; */
`

export const TextContainer = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
color: #fff;

`

export const Heading = styled.h1`
font-size: 5rem;
text-align: center;
margin:2rem  auto;
font-weight: 500;

`

export const MainText = styled.h2`
font-size: 2.5rem;
text-align: center;
margin:1rem  auto;
margin-bottom: 1rem;
font-weight: 500;


`

export const SubText = styled.h2`
font-size: 1.7rem;
text-align: center;
margin:0  auto;
margin-bottom: 2rem;
font-weight: 300;


`


export const Paragraph = styled.p`
font-size: 1.4rem;
text-align: left;
line-height:1.5;
margin:3rem  auto;
display:flex;
align-items: center;
padding:0 10rem;
font-weight: 300;


`

export const GetStartedButton = styled.button`
background-color: #C0B597;
font-size: 1.2rem;
border-radius: 7px;
color: #fff;
padding: 1rem 3rem;
outline: none;
border: none;
cursor: pointer;

&:hover{
    background-color: #c0c0c097;
}

`