import { Helmet } from 'react-helmet'
import Category from './Category'

const Products = ({ categories }) => {
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
                        <Category category={ category } key={ category.id } />
                    )) }
                </div>
            </main>
        </div>
    )
}

export default Products
