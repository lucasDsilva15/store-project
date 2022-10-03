const React = require('react')
const DefaultLayout = require('./layouts/DefaultLayout')

class Index extends React.Component{
    render() {
        const {products} = this.props

        return(
            <DefaultLayout>
                <h1>All Products</h1>
                <ul id='products-index'>
                    {products?.map((product) => {
                        return(
                            <li key={product._id}>
                               <img src={product.productimage} href={`/crunchy-spin/${product._id}`}/><br/>
                               <a href={`/crunchy-spin/${product._id}`}>{product.name}</a> &nbsp; <br/>
                               {'$'+product.price} &nbsp; <br/>
                               {product.productdescription} &nbsp; <br/>
                               {product.inventory == 0? 'Sold Out' : 'In Stock'} &nbsp; <br/>
                               <p>
                                
                               </p>
                            </li>
                        )
                    })}
                </ul>      
                <nav>
                    <a href='/crunchy-spin/new'>Add a product</a>
                </nav>          
            </DefaultLayout>
        )
    } 
}

module.exports = Index