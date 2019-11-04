import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishItem: this.props.dish,
        }
    }
    
    renderComments(comment) {
        if (comment != null) {
            return(
                <div className="row">

                         <CardBody>
                             
                             {/* <CardText>{dish.comments[0].comment}</CardText>
                             <CardText>-- {dish.comments[0].author}</CardText> */}
                         </CardBody>

                </div>
                 
            )
        }
    }
    renderDish(dish) {
        
        if (dish != null) {
            return(
               <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">

                        <CardBody>
                            
                            <CardText>{dish.comments[0].comment}</CardText>
                            <CardText>-- {dish.comments[0].author}</CardText>
                            HARDCODED
                        </CardBody>

                    </div>
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