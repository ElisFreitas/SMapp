import React from 'react';
import './CategoriesPage.css'

class CategoriesPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='categories-page'>
                <div className='category'>
                    <img className='category-image' src='Restaurant-category.jpeg' onClick={this.openGamePage.bind(this)}/>
                    <div className='category-caption'>{"Restaurant"}</div>
                </div>

                <div className='category'>
                    <img className='category-image' src='School-category.jpeg' onClick={this.openGamePage.bind(this)}/>
                    <div className='category-caption'>{"School"}</div>
                </div>

                <div className='category'>
                    <img className='category-image' src='Party-category.jpeg' onClick={this.openGamePage.bind(this)}/>
                    <div className='category-caption'>{"Party"}</div>
                </div>

                <div className='category'>
                    <img className='category-image' src='Transport-category.png' onClick={this.openGamePage.bind(this)}/>
                    <div className='category-caption'>{"Transport"}</div>
                </div>
            </div>
        )
    }

    openGamePage() {
        this.props.handler("GamePage");
    }
}

export default CategoriesPage;
