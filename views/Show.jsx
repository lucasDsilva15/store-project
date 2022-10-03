const React = require('react')

class Show extends React.Component{
    render(){
        const {products} = this.props
        return(
            <div>
                <h1>{products.name}</h1>
                <p>
                    {products.image}
                </p>
                <p>
                    {'$'+products.price}
                </p>
                <p>
                    {products.productdescription}
                </p>
                <p>
                    {products.inventory == 0? 'Sold Out' : 'In Stock'} 
                </p>
                <button>
                    <a href={`/crunchy-spin/${products._id}/edit`}>Edit Product</a>
                </button>
                <form action={`/crunchy-spin/${products._id}?_method=DELETE`} method="POST">
                    <input type='submit' value="Delete"/>
                </form>
                <p>
                    <a href='/logs'>Back</a>
                </p>
            </div>
        )
    }
}
module.exports = Show