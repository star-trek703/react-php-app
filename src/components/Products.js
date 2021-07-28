import { useState } from 'react'
import Category from './Category'

const Products = ({ API_URL }) => {
    const [categories, setCategories] = useState(null)
    
    const getCategories = async () => {
        const res = await fetch(API_URL +'get_categories.php')
        const data = await res.json()
        
        return data
    }
    
    getCategories().then(data => setCategories(data.categories))
    
    return (
        <div className='container'>
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
