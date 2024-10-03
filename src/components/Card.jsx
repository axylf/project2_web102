import React, { useState } from "react";

const Card = (props) => {
    const [text, setText] = useState(props.front);
    const [answerUp, setAnswerUp] = useState(false);
    function flipCard() {
        setAnswerUp(!answerUp);
    }
    return (
        <div className="card" onClick={flipCard}>
            {answerUp ? props.back : props.front}
        </div>
    )
}

export default Card;