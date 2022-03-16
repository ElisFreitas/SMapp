import React from 'react';
import './CategoriesPage.css'

class CategoriesPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='categories-page'>
                <div id="categories-blurb">
                    {`Hi ${this.props.userName}, choose a category:`}
                </div>
                <div className='category' onClick={this.openGamePage.bind(this)}>
                    <img className='category-image' src='Restaurant-category.png' />
                    <div className='category-caption'>{"Restaurant"}</div>
                </div>

                <div className='category' onClick={this.openGamePage.bind(this)}>
                    <img className='category-image' src='School-category.png' />
                    <div className='category-caption'>{"School"}</div>
                </div>

                <div className='category' onClick={this.openGamePage.bind(this)}>
                    <img className='category-image' src='Party-category.png' />
                    <div className='category-caption'>{"Party"}</div>
                </div>

                <div className='category' onClick={this.openGamePage.bind(this)}>
                    <img className='category-image' src='Transport-category.png' />
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
