// THIS url will be - howdiy/:id 
import React, { Component, Fragment } from 'react';

export class Howdiy extends Component {

    state = {
        category: null,
        funName: null,
        descriptiveName: null,
        ingredients: [
          {
            name: null,
            quantity: null,
          },
        ],
        preparation: [],
        productImg: null,
        isGiftable: false,
        gallery: [],
        timeOfPreparation: 0, // specify mins in form
        costRating: 0, // TIP on how to calculate in form
        difficultyRating: 0,
        createdBy: null,
      };
    

    render() {
        const {
            funName,
            descriptiveName,
            createdBy,
            ingredients,
            preparation,
            productImg,
            isGiftable,
            gallery,
            timeOfPreparation,
            costRating,
            difficultyRating } = this.state;
        return (
            <>
                <h5>Descriptive Name: Orange Lavendar Bath Bomb {descriptiveName}</h5>
                <h5>Also Known As: Gobbley FloopMaster {funName} </h5>
                
                <h5> Cost Rating xxx {costRating} / Difficulty Rating xxx {difficultyRating} </h5>
                <h5> Created By: {createdBy} </h5>
    
                <h5> Time to prepare: {timeOfPreparation} mins (to show in hours divide /60) </h5>
                <h5> is Giftable: {isGiftable} we will need this -- http://react.tips/checkboxes-in-react/ </h5>
    
                <h5>Ingredients: --- NEEDS A MAP for {ingredients} </h5>
                <ul>
                    <li> Here instead of ingredient would be eachIngredient {ingredients.name} {ingredients.quantity}</li>
                </ul>
                <h5>Preparation: --- NEEDS A MAP for {preparation} Step</h5>
                <ul>
                    <li>eachPreparation</li>
                </ul>
      
                <h5>Product image: {productImg} </h5>
    
                <h5> A Dropdown here for Gallery Below {gallery} </h5>
       
                <h3> COMMENTS SECTION</h3>                
            </>
        )
    }
}

export default Howdiy;


/* 
getComment = (comment) => { 
    commentService
      .getComment(comment)
      .then((response) => {
        this.setState({ commentList: response.data, isLoading: false });
      })
      .catch((err) => {
        this.props.history.push("/500");
      });

 // in commentService base: /comments
  getComment = (comment) => {
    return this.service.get('/all')
  };

// routes in comment.routes 
} */