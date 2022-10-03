const React = require('react')

class Index extends React.Component{
    render() {
        const {products} = this.props

        return(
            <div>
                <h1>All Products</h1>
                <ul id='products-index'>
                    {products?.map((product) => {
                        return(
                            <li key={product._id}>
                               {product.productimage} <br/>
                               {product.name} &nbsp; <br/>
                               {product.price} &nbsp; <br/>
                               {product.productdescription} &nbsp; <br/>
                               {product.inventory == 0? 'Sold Out' : 'In Stock'} &nbsp; <br/>
                               <p>
                                
                               </p>
                            </li>
                        )
                    })}
                </ul>                
            </div>
        )
    } 
}

module.exports = Index