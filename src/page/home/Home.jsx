import React from 'react'
import Hero from '../../components/hero/Hero'
import HeroKatalog from '../../components/hero-katalog/HeroKatalog'
import NornLight from '../../components/nornlightt/NornLight'
import Products from '../../components/products/Products'
import Brend from '../../components/brend/Brend'
import Blog from '../../components/blog/Blog'
import Lamps from '../../components/lamps/Lamps'

const Home = () => {
    return (
        <div>
            <Hero />
            <HeroKatalog count={6} klass={""} />
            <NornLight hidden={"hidden"} />
            <Products />
            <Brend />
            <Blog count={3} hidden={""} />
            <Lamps />
        </div>
    )
}

export default Home