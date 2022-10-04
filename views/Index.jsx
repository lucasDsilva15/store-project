const React = require('react')
const DefaultLayout = require('./layouts/DefaultLayout')

class Index extends React.Component{
    render() {
        const {products} = this.props

        return(
            <DefaultLayout>
                <div className='titleheader'>
                <h1>All Products</h1>
                </div>
                <div id='indexproducts'>
                <ul id='products-index'>
                    {products?.map((product) => {
                        return(
                            <div className='perproduct'>
                            <li key={product._id}>
                                <a href= {`/crunchy-spin/${product._id}`}>
                               <img src={product.productimage} height='400'/><br/>
                               </a>
                               <a href={`/crunchy-spin/${product._id}`}>{product.name}</a> &nbsp; <br/>
                               {'$'+product.price} &nbsp; <br/>
                               {product.inventory == 0? 'OUT OF STOCK' : 'In Stock'} &nbsp; <br/>                                    
                            </li>
                            </div>
                        )
                    })}
                </ul>
                </div>      
                <nav>
                    <a href='/crunchy-spin/new'>Add a product</a>
                </nav>          
            </DefaultLayout>
        )
    } 
}

module.exports = Index