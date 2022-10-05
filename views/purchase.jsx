const React = require('react')
const DefaultLayout = require('./layouts/DefaultLayout')

class Purchase extends React.Component{
    render(){
       const {products} = this.props
        return(
            <DefaultLayout>
                <div id='purchasemaincontainer'>
                    <img src='https://freepngimg.com/thumb/anime/31318-2-hyouka-transparent.png' width='600' height='400' id='thankyouimg'></img>
                        <p id='thankyoumsg'>
                            Thank you for purchasing your {products.name}!
                        </p>
                        <a href={`/crunchy-spin/${products._id}`}>
                        <button id='purchasemsgbtn'>
                            Your Welcome!
                        </button>
                        </a>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Purchase