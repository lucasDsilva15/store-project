const React = require('react')

class DefaultLayout extends React.Component{
    render(){
        return(
            <html>
                <head>
                    <title>{this.props.name}</title>
                    <link rel='stylesheet' href='/css/style.css'/>
                </head>
                <body>
                    <nav className='headermenu'>
                        <word id='storemenuitem'>Crunchy Spin | STORE</word>
                        <a href='/crunchy-spin' className='menulink'>All Products</a>
                        
                    </nav>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = DefaultLayout