import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishItem: this.props.dish,
        }
    }
    

    renderDish(dish) {
        if (dish != null) {
            return(
               
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        }
        else {
            return(
                <div></div>
            );
        }
    }
    
    
    render() {
        // console.log(this.props.dish)
        return(
            <div> 
                {this.renderDish(this.props.dish) }
            </div>
            

        )
    }
}

export default DishDetail;