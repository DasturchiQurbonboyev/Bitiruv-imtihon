import React from 'react'
import HeroKatalog from '../../components/hero-katalog/HeroKatalog'
import Brend from '../../components/brend/Brend'
import Blog from '../../components/blog/Blog'
import Lamps from '../../components/lamps/Lamps'

const KatalogPage = () => {
    return (
        <div>
            <p className='kontainer text-[64px] font-[700] text-[#454545] leading-[70.4px]'>Каталог</p>
            <HeroKatalog count={11} klass={"hidden"} />
            <Brend />
            <Blog count={3} />
            <Lamps />
        </div>
    )
}

export default KatalogPage