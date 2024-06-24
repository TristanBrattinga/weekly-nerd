import Button from 'ui/components/Button'
import Link from 'next/link'

const Page = () => {
    return (
        <section className="container my-12 lg:my-24 max-w-5xl">
            <h2 className="text-4xl mb-4">Mijn leerdoelen</h2>
            <ul className="list-decimal list-inside mb-4">
                <li>
                    Meer een design aanpak gebruiken. Ik moet vanaf de grond af leren werken en eerst de basis
                    vereisten. Bijvoorbeeld gebruik maken van MoSCoW.
                </li>
                <li>
                    Niet tot in de nacht door moeten werken, omdat ik uitstel. Het komt wel af en ook heel goed maar
                    voor mijn slaap is het niet heel goed.
                </li>
                <li>Een project opbreken in stappen voor mezelf.</li>
            </ul>
            <Button as={Link} href="/posts/reflectie">
                Lees hier meer over mijn leerdoelen
            </Button>
        </section>
    )
}

export default Page
