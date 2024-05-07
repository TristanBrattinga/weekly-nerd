export type CardProps = {
    title: string
    description: string
    image: ImageType
    link?: LinkType
    lecturer: string
}

type ImageType = {
    src: string
    alt: string
}

type LinkType = {
    link: string
    label: string
}
