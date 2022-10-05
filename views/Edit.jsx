const React = require('react')
const DefaultLayout = require('./layouts/DefaultLayout')

class Edit extends React.Component{
    render(){
        const {products} = this.props
        return(
            <DefaultLayout>
                <h1>New Product</h1> 
                <form action={`/crunchy-spin/${products._id}?_method=PUT`} method='POST'>
                    <label htmlFor='name'>Product Name:</label>
                    <input type='text' id='name' name='name' defaultValue={products.name}/> <br/>

                    <label htmlFor='productimage'>Product Image:</label>
                    <input type='text' id='productimage' name='productimage' defaultValue={products.productimage}/> <br/>

                    <label htmlFor='price'>Price:</label>
                    <input type='number' id='price' name='price' defaultValue={products.price}/> <br/>

                    <label htmlFor='productdescription'>Product Description:</label>
                    <input type='textarea' id='productdescription' name='productdescription' defaultValue={products.productdescription}/> <br/>

                    <label htmlFor='inventory'>Inventory:</label>
                    <input type='number' id='inventory' name='inventory' defaultValue={products.inventory}/> <br/>
                    

                    <input type='submit' value='submit'/>
                </form>
            </DefaultLayout>
            

        )
    }
}

module.exports = Edit