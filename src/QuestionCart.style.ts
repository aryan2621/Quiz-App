import styled from  'styled-components';




export const Wrapper=styled.div`

max-width:110px;
border-radius:10px;
padding:20px;
background:#ebefff;
border:2px  solid  #0085a3;
box-shadow:0px 5px 10px rgba(0,0,0,0.25);
 p{
     font-size:1rem;

 }





`
type ButtonWrapperProps={
    correct:boolean;
    userClicked:boolean;
}


export const ButtonWrapper=styled.div<ButtonWrapperProps>`
transition:all 0.3s ease;

:hover{
    opacity:0.8;
}

button{
    cursor:pointer;
    font-size:0.8rem;
    width:100%;
    user-select:none;
    height:40px;
    margin:5px 0;
    background:${({correct,userClicked})=>

correct?'linear-gradient(90deg,#56ffa4,#59bc86)'
:!correct && userClicked 
? 'linear-gradient(90deg,#ff5656,#c16868)'
: 'linear-gradient(90deg,#56tca4,#59bdg6)'
};

border:2px solid white;
box-shadow:1px 2px 0px rgba(0,0,0,0.1);
border-radius:10px;

color:white;
text-shadow:0px 1px 0px rgba(0,0,0,0.25);
}


`;







