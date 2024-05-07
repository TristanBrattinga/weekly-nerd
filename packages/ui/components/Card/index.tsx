import { CardProps } from './types'
import Image from 'next/image'

const Card = ({ title, description, image, lecturer, link }: CardProps) => {
    return (
        <div className="flex border rounded-3xl overflow-hidden">
            <div>
                <Image src={image.src} alt={image.alt} width={200} height={400} />{' '}
            </div>
            <div className="bg-white p-4">
                <h2>{title}</h2>
                <p>{lecturer}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Card
