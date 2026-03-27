import { useState } from 'react'
import Events from '../../components/Events'
import Navbar from '../../components/Navbar'

const Home = () => {
    const [searchTerm, setSearchTerm] = useState("")

    const handleNavbarSearch = (term) => {
        setSearchTerm(term)
    }
    console.log(searchTerm, 10)
    return (
        <>
            <Navbar onSearch={handleNavbarSearch} />
            <Events searchTerm={searchTerm} />

        </>
    )



}

export default Home