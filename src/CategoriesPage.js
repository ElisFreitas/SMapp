import React from 'react';

class CategoriesPage extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id='categories-page'>
                <div className='category'>
                    <img className='category-image' src='Restaurant-category.jpeg' />
                    <div className='category-caption'>{"Restaurant"}</div>
                </div>

                <div className='category'>
                    <img className='category-image' src='School-category.jpeg' />
                    <div className='category-caption'>{"School"}</div>
                </div>

                <div className='category'>
                    <img className='category-image' src='Party-category.jpeg' />
                    <div className='category-caption'>{"Party"}</div>
                </div>

                <div className='category'>
                    <img className='category-image' src='Transport-category.png' />
                    <div className='category-caption'>{"Transport"}</div>
                </div>
            </div>
        )
    }
}

export default CategoriesPage;
