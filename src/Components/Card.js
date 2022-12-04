import FlashCard from "./FlashCard"
import Logo from "./Logo"



export default function Card({ card, contador, setCount}) {
    return (
        <>
            <Logo/>

            {card.map((card , i)  =>  (
                <FlashCard
                key={i} 
                numero={i+1} 
                question={card.question}
                contador={contador}
                setCount={setCount} 
                answer={card.answer}
                />
            ))}

        </>
    )
}

