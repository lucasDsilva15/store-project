const React = require('react')

class New extends React.Component{
    render(){
        return(
            <div>
                <h1>New Product</h1> 
                <form action='/crunchy-spin' method='POST'>
                    <label htmlFor='name'>Product Name:</label>
                    <input type='text' id='name' name='name'/>

                    <label htmlFor='productimage'>Product Image:</label>
                    <input type='text' id='productimage' name='productimage'/>

                    <label htmlFor='price'>Price:</label>
                    <input type='number' step='0.01' id='price' name='price'/>

                    <label htmlFor='productdescription'>Product Description:</label>
                    <input type='textarea' id='productdescription' name='productdescription'/>

                    <label htmlFor='inventory'>Inventory:</label>
                    <input type='number' id='inventory' name='inventory'/>
                    

                    <input type='submit' value='submit'/>
                </form>
            </div>
            

        )
    }
}

module.exports = New