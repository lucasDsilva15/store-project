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
                    <nav>
                        1
                        2
                        3    
                    </nav>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = DefaultLayout