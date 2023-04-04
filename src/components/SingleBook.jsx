import { Card } from "react-bootstrap";

const SingleBook = (props) => {
  // ** codice precedente alla nuova implementazione: **
  // state = {
  //   selected: false
  // };



    return (
      <>
        <Card
          onClick={() => props.changeSelectedBook(props.book.asin)}

          style={{
            border:
              setSelectedBook === props.book.asin
                ? "3px solid red"
                : "3px solid #ebebeb",
          }}
        >
          <Card.Img variant="top" src={props.book.img} />
          <Card.Body>
            <Card.Title style={{ color: "black" }}>
              {props.book.title}
            </Card.Title>
          </Card.Body>
        </Card>
      </>
    );
  }


export default SingleBook;
