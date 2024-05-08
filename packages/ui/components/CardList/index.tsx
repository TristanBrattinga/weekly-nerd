import { CardListProps } from './types'
import Card from '../Card'

const CardList = ({ cards }: CardListProps) => {
    return (
        <section className="container max-w-4xl my-16 lg:my-32">
            <ul className="">
                {cards.map((card, index) => (
                    <li key={index} className="even:translate-x-10 odd:-translate-x-10 mb-10">
                        <Card
                            title={card.title}
                            description={card.description}
                            image={card.image}
                            lecturer={card.lecturer}
                            link={card.link}
                            reverse={card.reverse}
                        />
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default CardList
