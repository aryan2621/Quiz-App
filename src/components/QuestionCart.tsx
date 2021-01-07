import React from 'react';
import {AnswerObject} from '../App'
import {Wrapper,ButtonWrapper}from '../QuestionCart.style'

type Props={
    question:string;
    answers:string[];
    callback:(e:React.MouseEvent<HTMLButtonElement>)=>void;
    userAnswer:AnswerObject |undefined;
    questionNr:number;
    totalQuestions:number
}
const QuestionCart:React.FC<Props>=({question,
answers,
callback,
userAnswer,
questionNr,
totalQuestions,})=>(

<Wrapper>
<p className="number">Question:{questionNr}/{totalQuestions}</p>
<p dangerouslySetInnerHTML={{__html:question}}/>
<div>
    {answers.map(answer=>(
        <ButtonWrapper key={answer}
        correct={userAnswer?.correctAnswer===answer}
        userClicked={userAnswer?.answer===answer}
        
        >

            <button value={answer} disabled={!!userAnswer} onClick={callback}>

                <span dangerouslySetInnerHTML={{__html:answer}}/>
            </button>
            </ButtonWrapper>
    ))}
</div>
</Wrapper>


);

export default QuestionCart;