import { CardProps } from './types'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

const Card = ({ title, description, image, lecturer, link, reverse }: CardProps) => {
    return (
        <Link
            href={link.link}
            className={clsx(
                'flex border rounded-3xl overflow-hidden focus-visible:scale-105 hover:scale-105 transition-all duration-300',
                {
                    'flex-row-reverse': reverse === true,
                    'flex-row': !reverse,
                },
            )}
        >
            <div className="w-1/3">
                <Image
                    src={image.src}
                    alt={image.alt}
                    width={200}
                    height={300}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex flex-col justify-between w-2/3 p-10">
                <div>
                    <h2 className=" font-semibold text-3xl mb-2">{title}</h2>
                    <p>Lecturer: {lecturer}</p>
                </div>
                <p className="my-4">{description}</p>
            </div>
        </Link>
    )
}

export default Card
