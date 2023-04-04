import { Badge, ListGroup, Button } from "react-bootstrap";

const SingleComment = (props) => {
  const handleDelete = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${props.comment._id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJiMjRlYTBlNzg3MDAwMTRkODkxZTMiLCJpYXQiOjE2ODA1NDkwOTksImV4cCI6MTY4MTc1ODY5OX0.wZNhhXeC4pLpWKZ9WtjZw4t7oG5_9akjS-5YIWSviJg",
          },
        }
      );

      if (response.ok) {
        props.fetchComments();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ListGroup.Item key={props.comment._id} className="d-flex flex-wrap ">
      <span className="me-auto text-truncate">{props.comment.author}</span>
      <span>
        <Badge variant="dark">{props.comment.rate}</Badge>
        {props.comment.comment}
      </span>
      <Button
        variant="danger"
        className="btn-close"
        onClick={handleDelete}
      ></Button>
    </ListGroup.Item>
  );
};
export default SingleComment;
