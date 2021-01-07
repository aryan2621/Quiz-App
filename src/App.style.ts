import styled,{createGlobalStyle} from  'styled-components';
import bgimage  from './back.jpg'



export const GlobalStyle=createGlobalStyle`
html{
    heigth:100%;
}
body{
    background-image:url(${bgimage});
    background-size:cover;
    margin:auto;
    padding:0 20px;
    display:flex;
    justify-center:center;
    align-items:center;


}
*{
    box-sizing:border-box;
    font-family:cursive;

}

`
;
export const Wrapper=styled.div`
display:flex;
flex-direction:column;
align-items:center;

>p{
    color:white;

}
.score{
    color:white;
    font-size:2rem;
    margin:0;

}
h1{
    font-family:cursive;
    background-image:linear-gradient(180deg,#fff,#87f1ff);
    background-size:100%;
background-clip:text;
font-size:50px;
text-align:center;
margin:20px auto;
padding:20px;
border-radius:5px;

}

.start ,.next{
    cursor:pointer;
    background:linear-gradient(180deg,#fff,#ffcc91);
    border:2px solid #d38558;
     box-shadow:0px 5px 10px rgba(0,0,0,0.25);
     border-radius:10px;
     height:40px;
     margin:20px 0;
     padding:0 40px;
}
.start{
    max-width:200px
}


`