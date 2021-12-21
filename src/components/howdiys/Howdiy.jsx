// THIS url will be - howdiy/:id
import React, { useState, useEffect } from "react";
import { useParams, useNavigate} from "react-router-dom";
import { Navigate } from "react-router";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import "./Howdiy.css";
import howdiyHat from "../img/cowboyHat.png";

export function Howdiy({ user }) {
  const params = useParams();
  const navigate = useNavigate();
  const [commentList, setCommentList] = useState(null)
  const [howdiy, setHowdiy] = useState({ funName: null,
    descriptiveName: null,
    ingredients: [],
    preparation: [],
    productImg: null,
    isGiftable: false,
    gallery: [],
    timeOfPreparation: 0, 
    costRating: 0,
    difficultyRating: 0,
    createdBy: null})
  const [isLoadingHowdiy, setIsLoadingHowdiy] = useState(true)
  const [isLoadingComments, setIsLoadingComments] = useState(true)
  const [input, setInput] = useState("")

  const handleChange = (e) => {
    const {value} = e.target;
    setInput(value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `${process.env.REACT_APP_API_HOST}/comments/create/${params.id}`,
        { input, createdBy: user},
        { withCredentials: true }
      )
      .then((res) => {
        const addedComment = {...res.data};
        setInput("")
        setCommentList([...commentList, {addedComment}]);
      })
      .catch(() => navigate('/500'));
  };

  const handleDeleteComment = (id) => {
    axios
      .delete(`${process.env.REACT_APP_API_HOST}/comments/delete/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        const newCommentList = commentList.filter((eachComment) => {
          return eachComment._id !== id;
        });
        setCommentList(newCommentList);
      })
      .catch((err) => {
        console.log(err.response.status); // => the error message status code
        if (err.response.status === 403) {
          navigate('/login')
        }
      });
  };

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_HOST}/recipes/howdiy/${params.id}`,
        { withCredentials: true })
      .then((res) => {
        const {
          funName,
          descriptiveName,
          ingredients,
          preparation,
          productImg,
          isGiftable,
          gallery,
          timeOfPreparation,
          costRating,
          difficultyRating,
          createdBy,
        } = res.data;
        setHowdiy({
          funName,
          descriptiveName,
          ingredients,
          preparation,
          productImg,
          isGiftable,
          gallery,
          timeOfPreparation,
          costRating,
          difficultyRating,
          createdBy})
          setIsLoadingHowdiy(false)
      })
      .catch((err) => {
        <Navigate to='/500'/>;
      });
    }, [setHowdiy]);

    useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_HOST}/comments/all/${params.id}`,
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data)

        setCommentList([res.data]);
        setIsLoadingComments(false);
      })
      .catch((err) => {
        <Navigate to='/500'/>;
      });
  }, [setCommentList]);

    const emptyStar = "☆";
    const fullStar = "★";

    return (
      <>
        {isLoadingHowdiy && <h1>...isLoading!</h1>}
        {!isLoadingHowdiy && (
          <React.Fragment>
            <Container className="howdiy-container">
              <Row className="howdiy-view">
                {/* <Col sm={8}> */}
                <div className="howdiy-view-child">
                  <img
                    className="howdiy-view-img"
                    src={howdiy.productImg}
                    alt="productImage"
                  />
                  <div className="howdiy-view-text">
                    <h4>{howdiy.funName}</h4>
                    <h5>{howdiy.descriptiveName}</h5>
                    <h5>
                      
                      is Giftable: {howdiy.isGiftable ? "Yes!" : "Possibly Not"}
                    </h5>
                    <hr></hr>
                    <p>Created by: {howdiy.createdBy.username}</p>
                  </div>
                </div>
                {/* </Col> */}
                <Col sm={4}>
                  <div className="howdiy-view-text">
                    <h6>
                      Cost Rating:
                      {fullStar.repeat(Math.round(howdiy.costRating)) +
                        emptyStar.repeat(3 - Math.round(howdiy.costRating))}
                    </h6>
                    <h6>
                      
                      Difficulty Rating:
                      {fullStar.repeat(Math.round(howdiy.difficultyRating)) +
                        emptyStar.repeat(3 - Math.round(howdiy.difficultyRating))}
                    </h6>
                    <h6>
                      {" "}
                      Time Intensity:{" "}
                      {fullStar.repeat(Math.round(howdiy.timeOfPreparation)) +
                        emptyStar.repeat(3 - Math.round(howdiy.timeOfPreparation))}
                    </h6>
                  </div>
                </Col>
              </Row>
              <Row className="howdiy-view">
                <Col sm={4}>
                  <div className="howdiy-view-child">
                    <div>
                      <h5>Ingredients:</h5>
                      <ul className="accordion-list">
                        <br />
                        {howdiy.ingredients.map((eachIngredient) => {
                          return (
                            <React.Fragment
                              key={
                                eachIngredient.name + eachIngredient.quantity
                              }
                            >
                              <li className="accordion-list-item">
                                {eachIngredient.name} &emsp;{" "}
                                {eachIngredient.quantity}
                                &emsp; {eachIngredient.measure} &emsp;
                              </li>
                            </React.Fragment>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </Col>
                <Col sm={8}>
                  <div className="howdiy-view-child">
                    <div className="howdiy-view-text">
                      <h5>Preparation:</h5>
                      <ul className="accordion-list">
                        <br />
                        {howdiy.preparation.map((eachStep) => {
                          return (
                            <React.Fragment
                              key={eachStep.step + eachStep.description}
                            >
                              <li> Step {eachStep.step} </li>
                              <li>{eachStep.description}</li>
                              <br />
                            </React.Fragment>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </React.Fragment>
        )}
        <h2 className="howdiy-section">
          <img src={howdiyHat} alt="navbarimg" width="55" height="25" />
          <img src={howdiyHat} alt="navbarimg" width="70" height="35" />
        </h2>
        <div className="comment-section">
          <form onSubmit={handleCommentSubmit}>
            <input
              onChange={handleChange}
              placeholder="write here..."
              type="text"
              name="input"
              value={input}
            />
            <button className="accordion-submit" type="submit">
              Add a comment
            </button>
          </form>
        </div>

        {isLoadingComments && <h1>...isLoading!</h1>}
        {!isLoadingComments && (commentList.map((eachComment) => {
            return (
              <div className="comment-message comment-section">
                <p>
                  {eachComment.input} <br/>
                  Commented by: {eachComment.createdBy.username}
                  <br />
                  {eachComment.createdAt.slice(0,10)} at {eachComment.createdAt.slice(11,16)}
                </p>
                {user && eachComment.createdBy._id === user._id && (
                  <button
                    className="button-link"
                    onClick={() => {handleDeleteComment(eachComment._id)}}>
                    Delete
                  </button>
                )}
                <hr></hr>
              </div>
            );
          }))}
      </>
  )
}

export default Howdiy;

//         addedComment.createdBy = { ...user };
