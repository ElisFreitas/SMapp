import React from 'react';
import './CategoriesPage.css'

const restaurantData = [
    { imageSource: "ice-cream.png", audioSource: null, scoreCount: 0, phrase: ["This is phrase 1", "This is phrase 2", "This is phrase 3"] },
    { imageSource: "burger.png", audioSource: null, scoreCount: 0, phrase: ["This is phrase 1", "This is phrase 2", "This is phrase 3"] },
    { imageSource: "restroom.png", audioSource: null, scoreCount: 0, phrase: ["This is phrase 1", "This is phrase 2", "This is phrase 3"] },
];

const schoolData = [];
const partyData = [];
const transportData = [];
 
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
                <div className='category' onClick={this.openGamePage.bind(this, restaurantData)}>
                    <img className='category-image' src='Restaurant-category.png' />
                    <div className='category-caption'>{"Restaurant"}</div>
                </div>

                <div className='category'>
                    <img className='category-image' src='School-category.png' />
                    <div className='category-caption'>{"School"}</div>
                </div>

                <div className='category'>
                    <img className='category-image' src='Party-category.png' />
                    <div className='category-caption'>{"Party"}</div>
                </div>

                <div className='category'>
                    <img className='category-image' src='Transport-category.png' />
                    <div className='category-caption'>{"Transport"}</div>
                </div>
            </div>
        )
    }

    openGamePage(categoryData) {
        this.props.handler("GamePage", categoryData);
    }
}

export default CategoriesPage;
