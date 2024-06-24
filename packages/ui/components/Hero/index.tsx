import Button from '../Button'
import Link from 'next/link'

const Hero = () => {
    return (
        <section className="container my-12 lg:my-24">
            <h2 className="mb-4">Welkom bij mijn Weekly Nerd Blog</h2>
            <Button as={Link} href="/posts">
                Ga naar de Nerds
            </Button>
        </section>
    )
}

export default Hero
