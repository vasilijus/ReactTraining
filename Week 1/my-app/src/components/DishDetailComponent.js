import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import { cpus } from 'os';

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishItem: this.props.dish,
        }
    }
    formatDate(date) {
            console.log(date) // String: 2012-10-16T17:57:28.556094Z 
        // Parse to Miliseconds
        var miliseconds = Date.parse(date)
            console.log(miliseconds) // Number: 1350410248556 | (timestamp)
        // Make an object to work with
        var dateObj = new Date(miliseconds)
            console.log(dateObj) // Object: Date Tue Oct 16 2012 18:57:28 GMT+0100 (British Summer Time)

        // Output Month,day,year :  Oct 02, 2012
        var options = {
            year: 'numeric', month: 'short', day: '2-digit'
        }
        var newDate = new Date( dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDay() );
            newDate = newDate.toLocaleDateString("en-US", options) // required format
        console.log(newDate)

        return newDate;
    }
    renderComments(comments) {
        console.log(comments);
        
        const comms = comments.map( comment => {
            return(
                <div key={comment.id}>
                    <CardBody>
                        <CardText>{comment.comment}</CardText>
                        <CardText>-- {comment.author}, {this.formatDate(comment.date)}</CardText>
                    </CardBody>
                </div>
            )
        })
        return comms;
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
                        <CardTitle><b>Comments</b></CardTitle>
                                {this.renderComments(dish.comments)}
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