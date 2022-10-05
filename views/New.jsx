const React = require('react')
const DefaultLayout = require('./layouts/DefaultLayout')

class New extends React.Component{
    render(){
        return(
            <DefaultLayout>
                <h1>New Product</h1> 
                <form action='/crunchy-spin' method='POST' id='newform'>
                    <label htmlFor='name'>Product Name:</label>
                    <input type='text' id='name' name='name'/> <br/>
                    
                    <label htmlFor='productimage'>Product Image:</label>
                    <input type='text' id='productimage' name='productimage'/><br/>

                    <label htmlFor='price'>Price:</label>
                    <input type='number' step='0.01' id='price' name='price'/><br/>

                    <label htmlFor='productdescription'>Product Description:</label>
                    <input type='textarea' id='productdescription' name='productdescription'/><br/>

                    <label htmlFor='inventory'>Inventory:</label>
                    <input type='number' id='inventory' name='inventory'/><br/>
                    

                    <input type='submit' value='Submit' className='submitbtn'/>
                </form>
            </DefaultLayout>
            

        )
    }
}

module.exports = New