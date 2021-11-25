import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Categories.css";
import title from "./img/categoriesTitle.png";
import { Container, Row, Col } from "react-bootstrap";

//change the categories from null to an array /w enum
// no loading

export class Categories extends Component {
  state = {
    categories: ["Facecare", "Bodycare", "Housecare", "Play", "Food", "Drink"],
  };

  /*   componentDidMount() {
    recipeService.getCategories
      .then((response) => {
        this.setState({ categories: response.data, isLoading: false });
      })
      .catch((err) => {
        this.props.history.push("/500");
      });
  } */

  render() {
    const { categories } = this.state;
    return (
      <div>
        <img src={title} alt="title" className="title" />
        <div className="listContainer">
          <Container>
            <Row className="justify-content-md-center">
              {categories.map((eachCategory) => {
                return (
                  <Col xs lg="4" key={eachCategory}>
                    <NavLink
                      activeClassName="navlink"
                      className="buttonStyles category-link"
                      to={`/${eachCategory.toLowerCase()}/howdiy`}
                    >
                      {eachCategory}
                    </NavLink>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Categories;

// for each --> NavLink with the category to="/:category/howdiy" (this will be the list of that category)

// in the list display we would need after render -- const { category } = this.props.match.params; from the /:category/howdiy URL
