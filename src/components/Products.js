import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import Category from './Category'

const Products = ({ API_URL }) => {
    const [categories, setCategories] = useState(null)
    
    useEffect(() => {
        fetch(API_URL +'get_categories.php')
            .then(res => res.json())
            .then(data => setCategories(data.categories))
    }, [])
    
    // const getCategories = async () => {
    //     const res = await fetch(API_URL +'get_categories.php')
    //     const data = await res.json()
        
    //     return data
    // }
    
    // getCategories().then(data => setCategories(data.categories))
    
    return (
        <div className='container'>
            <Helmet>
                <title>Products</title>
            </Helmet>
            
            <main className='main'>
                <h1>Products</h1>
                <div className='hr'></div>

                <div className='categories'>
                    { categories && categories.map(category => (
                        <Category category={ category } />
                    )) }
                </div>
            </main>
        </div>
    )
}

export default Products
