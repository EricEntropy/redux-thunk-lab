import React, { Component } from 'react';

class CatList extends Component{

    catsToRender = () =>{
        return this.props.catPics.map(cat =><img key={cat.id} src={cat.url} alt={cat.id} />);
    }
    render(){
        return(
            <div>
                {this.catsToRender()}
            </div>
        )
    }
};

export default CatList;