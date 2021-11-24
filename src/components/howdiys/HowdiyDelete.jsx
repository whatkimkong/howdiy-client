//only the owner can see in the profile or details
// only on the profile list
// admin rights on the main list
// edit delete buttons
// how to make delete 2-step (approval via " kim and sina")


/* 
  deleteHowdiy = (theOneToDelete) => {
    const clonedList = [...this.state.howdiyList];

    clonedList.splice(theOneToDelete, 1);

    this.setState({ howdiyList: clonedList });
  };
 */
/* <button
                onClick={() => {
                  this.deleteContact(index);
                }}
              >
                Delete
              </button> 


deleteHowdiy = (id) => {
    axios
      .delete(`${process.env.REACT_APP_API_HOST}/recipes/delete/${id}`, {
        withCredentials: true,
      })
      .then((response) => {
        //find the element in the state manually and remove it
        const newHowdiys = this.state.myHowdiys.filter((eachHowdiy) => {
          return eachHowdiy._id !== id;
        });
        this.setState({ myHowdiys: newHowdiys });
      })
      .catch((err) => {
        console.log(err.response.status); // => the error message status code
        if (err.response.status === 403) {
          this.props.history.push("/login");
        }
      });
  };





<button
                  onClick={() => {
                    this.deleteHowdiy(eachHowdiy._id);
                  }}
                >
                  Delete
                </button>



const buttonStyles = {
    backgroundColor: '#8eac8c',
    color: 'white',
    padding: '20px',
    textDecoration: 'none',
    margin: '10px',
    borderRadius: '5px',
    width: '10%',
    display: 'flex',
    justifyContent: 'center'
}

 background-color: #fdf3ec;



*/


