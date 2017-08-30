import * as React from 'react';

interface IHeaderProps{
    text: string
}

class Header extends React.Component<IHeaderProps, {}> {
    render() {
        return (
            <div className="row">
                <h1 className="col-md-12">{this.props.text}</h1>
            </div>

        );
    }
}

export default Header;
