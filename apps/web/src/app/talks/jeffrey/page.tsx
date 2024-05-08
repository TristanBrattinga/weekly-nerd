import BlogPost from 'ui/components/BlogPost'

const Page = () => {
    return (
        <>
            <BlogPost
                title="Art on the Web"
                lecturer="Jeffrey Arts"
                content={`<p>Jeffrey is een kunstenaar en een front-end developer.</p>`}
                reflection="Jeffey is echt een kundig mens en heel creatief. Zijn kunstwerken zagen er echt heel tof uit en ik vond het ook echt nice dat hij eigen tools had gebouwd, om zijn ontwikkelingsproces te versnellen. Ik weet alleen niet of ik er nou echt iets van heb geleerd, omdat het zo specifiek om hem en zijn werk ging. Het is niet alsof ik straks zelf ook die kunstwerken ga maken. Ik vond dit gastcollege dus niet heel leerzaam, maar opzich wel leuk om te zien."
            />
        </>
    )
}

export default Page
