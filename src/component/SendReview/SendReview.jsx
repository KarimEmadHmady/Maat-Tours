import React, { useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";

const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto 30px auto;
  padding: 20px;
  border: 1px solid gold;
  border-radius: 8px;
  background-color: transparent;
  color: #eee;
  text-align: center;
`;

const FormTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;

  @media (min-width: 768px) {
    width: auto;
  }
`;

const Label = styled.label`
  margin-bottom: 10px;
  font-size: 16px;
`;

const StarRating = styled.div`
  margin-bottom: 20px;
`;

const Star = styled.span`
  font-size: 35px;
  margin-left: 3px;
  cursor: pointer;
  color: ${(props) => (props.filled ? "#FFD700" : "#ccc")};
`;

const CommentInput = styled.textarea`
  height: 120px;
  padding: 10px;
  font-size: 14px;
  border: 1px solid gold;
  background-color: transparent;
  color: #eee;
  border-radius: 4px;
  resize: vertical;
  margin-bottom: 20px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  background-color: gold;
  color: #222;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #978101;
  }
`;

const StarDisplay = styled.div`
  margin-top: 10px;
  font-size: 18px;
  color: gold;
`;

const ReviewForm = () => {
  const [stars, setStars] = useState(0);
  const [comment, setComment] = useState("");

  const handleStarClick = (starCount) => {
    setStars(starCount);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("stars", stars);

    formData.append("access_key", "069348b3-ea90-46ff-aba1-dad6760f67d2");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());
    console.log(res);

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Review Sent Successfully!",
        icon: "success",
        iconColor: "gold",
        confirmButtonColor: "gold",
      });
      event.target.reset();
    }
  };

  return (
    <FormContainer>
      <FormTitle>Leave a Review</FormTitle>
      <Form onSubmit={onSubmit}>
        <Label>Select your rating:</Label>
        <StarRating>
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              filled={index < stars}
              onClick={() => handleStarClick(index + 1)}
            >
              ★
            </Star>
          ))}
        </StarRating>
        <StarDisplay>
          {stars === 0 ? "Please select a rating" : `You rated: ${stars} stars`}
        </StarDisplay>
        <Label>Write your comment:</Label>
        <CommentInput
          name="comment"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          placeholder="Write your comment here..."
          required
        />
        <SubmitButton type="submit">Submit Review</SubmitButton>
      </Form>
    </FormContainer>
  );
};

export default ReviewForm;
