const React = require('react')

class Edit extends React.Component{
    render(){
        const {products} = this.props
        return(
            <div>
                <h1>New Product</h1> 
                <form action={`/crunchy-spin/${products._id}?_method=PUT`} method='POST'>
                    <label htmlFor='name'>Product Name:</label>
                    <input type='text' id='name' name='name' defaultValue={products.name}/>

                    <label htmlFor='productimage'>Product Image:</label>
                    <input type='text' id='productimage' name='productimage' defaultValue={products.productimage}/>

                    <label htmlFor='price'>Price:</label>
                    <input type='number' id='price' name='price' defaultValue={products.price}/>

                    <label htmlFor='productdescription'>Product Description:</label>
                    <input type='textarea' id='productdescription' name='productdescription' defaultValue={products.productdescription}/>

                    <label htmlFor='inventory'>Inventory:</label>
                    <input type='number' id='inventory' name='inventory' defaultValue={products.inventory}/>
                    

                    <input type='submit' value='submit'/>
                </form>
            </div>
            

        )
    }
}

module.exports = Edit