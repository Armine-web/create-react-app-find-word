import { faker } from '@faker-js/faker';
import { useState, useEffect } from 'react';

export const Main = ({ numberOfWords }) => {
    const [isOpen, setIsOpen] = useState(true);
    const [words, setWords] = useState([]); 
    const [userInputs, setUserInputs] = useState([]); 
    const [gameResult, setGameResult] = useState(null); 

    useEffect(() => {
        const newWords = Array.from({ length: numberOfWords }, () => faker.word.noun());
        setWords(newWords);
        setUserInputs(Array(numberOfWords).fill(''));
        setGameResult(null); 
    }, [numberOfWords]);


    const handleInputChange = (index, value) => {
        const newInputs = [...userInputs];
        newInputs[index] = value;
        setUserInputs(newInputs);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            if (userInputs.every((input, index) => input === words[index])) {
                setGameResult("YOU WIN");
            } else {
                setGameResult("GAME OVER");
            }
        }
    };

    return (
        <div>
            <button className="hide-button" onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}>
                {isOpen ? "HIDE WORDS" : "SHOW WORDS"}
            </button>

            <form className="inputs-container" onKeyDown={handleKeyPress}>
                {Array.from({ length: numberOfWords }, (_, index) => (
                    <div className="inputs" key={index}>
                        <input
                            type="text"
                            placeholder='?'
                            value={isOpen ? words[index] : (userInputs[index] || '')}  
                            onChange={(e) => handleInputChange(index, e.target.value)}
                        />
                    </div>
                ))}
            </form>

            {gameResult && <p className='game-result'>{gameResult}</p>}
        </div>
    );
};
