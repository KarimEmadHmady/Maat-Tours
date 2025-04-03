import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const CouponContainer = styled(animated.div)`
  width: 350px;
  margin: 10px;
  padding: 20px;
  border: 1px solid gold;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: transparent;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  gap: 15px 0;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;

const Stars = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const Star = styled.span`
  color: #ffd700;
  margin-right: 5px;
`;

const Comment = styled.p`
  font-size: 14px;
  color: #eee;
`;

const BusinessName = styled.h3`
  margin-top: 10px;
  font-size: 14px;
  color: #999;
`;

const Coupon = ({ stars, comment, businessName }) => {
  const animationProps = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { tension: 120, friction: 14 },
  });

  return (
    <CouponContainer style={animationProps}>
      <Stars>
        {[...Array(stars)].map((_, i) => (
          <Star key={i}>★</Star>
        ))}
      </Stars>
      <Comment>{comment}</Comment>
      <BusinessName>{businessName}</BusinessName>
    </CouponContainer>
  );
};

export default Coupon;
