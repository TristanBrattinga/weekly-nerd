export type HeaderProps = {
    links: LinkType[]
    avatar: string
}

type LinkType = {
    label: string
    link: string
    outbound?: boolean
}
