import styled from 'styled-components';

const Conteiner = styled.div`
margin:0 auto;  
width: 100%;
background: red;
`

const HeadeR = styled.div`
width: 1110px;
margin:0 auto;
padding:0 20px;
    height: 60px;
    display: flex;
    align-items: center;
    gap:20px;
    h2{
        border-radius: 5px;
        color:blue;
        background-color: white;
        padding: 5px 10px;
        span{
            color:red;
        }
    }
input{
    box-sizing:border-box;
    padding: 20px;
    height: 35px;
    width: 400px;
}
`;
const Dropdown = styled.div`
position: relative;
    display: inline-block;
    button{
        font-size: 18px;
        height: 37px;
        width: 130px;
        background: #fff;
        border:none;
    }
`;
const MyDropdown = styled.div`
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    overflow: auto;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
`;
const Link = styled.a`
color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    font-size: 16;
`;



export {HeadeR,Dropdown,MyDropdown,Link,Conteiner}