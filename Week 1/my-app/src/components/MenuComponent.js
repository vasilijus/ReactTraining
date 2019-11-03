import React, { Component } from 'react';
import { Media } from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: [
                {id:0, name: 'asd1', image: '', price: 4.40, description: 'blabla1' },
                {id:1, name: 'asd2', image: '', price: 2.40, description: 'blabla2' },
                {id:2, name: 'asd3', image: '', price: 3.40, description: 'blabla3' },
            ]
        }
    }

    render() {
        const menu = this.state.dishes.map(dish => {
            return (
                <div key={dish.id} className="col-12 mt-5">
                    <Media tag="li">
                        <Media left middle>
                            <Media object src={dish.image} alt={dish.name}></Media>
                        </Media>
                        <Media body className="ml-5">
                            <Media heading>{dish.name}</Media>
                            <p>{dish.description}</p>
                        </Media>
                    </Media>
                </div>
            )
        });

        return (
            <div className="container">
                <div className="row">
                    <Media list>
                        {menu}
                    </Media>
                </div>
            </div>
        );
    }
}

export default Menu;