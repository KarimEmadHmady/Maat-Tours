import Navbar from "./component/navbar/Navbar";
import MainSection from "./component/navbar/MainSection/MainSection";
import { Spotlight } from "./component/ui/Spotlight";
import { FlipWords } from "./component/ui/flip-words";
import Card from "./component/card-server/Card";
import {
  imagepira2,
  imagepira3,
  imagepira4,
  imagepira5,
  imagepira6,
  imagepira7,
  imagepira8,
} from "./assets/Image";
import FuriosaPoster from "./component/card-3d/3d";
import Contact from "./component/Contact/Contact";
import Footer from "./component/footer/Footer";
import BackToTopButton from "./component/BackToTopButton/BackToTopButton";
import Coupon from "./component/StarRating/Coupon";
import React, { useState, useEffect } from "react";

import styled from "styled-components";
import ReviewForm from "./component/SendReview/SendReview";

const reviews = [
  { stars: 5, comment: "Choosing Ma'at Travel was the best decision for our family vacation. They have great team who's took care of every detail, allowing us to relax and enjoy every moment of our trip in Egypt I recommend it ."},
  { stars: 4, comment: "Booking with Ma'at Travel was seamless from start to finish. Their knowledgeable guides in Cairo and Luxor were make our tour perfect and their team helped us plan the perfect itinerary, and everything went off without a hitch", },
  { stars: 5, comment: "We travelled to Egypt for 10 days and visited Luxor and Cairo. Before the trip Mostafa was super helpful and responded to all our questions really quickly. We booked 2 day tours in both Cairo and Luxor and airport transfers with MA'AT TOURS. Everything went really well. In Luxor and in Cairo The guides were both very knowledgable and we enjoyed touring with them. I would definitely recommend booking tours with MA'AT TOURS. as we had an amazing and worryfree vacation!" },
  { stars: 5, comment: "Ma'at Travel exceeded my expectations! Their attention to detail and personalized service made my vacation unforgettable. I highly recommend them!"},
  { stars: 4, comment: "It was a fantastic trip, or rather a stop in Cairo on my way to Rome. Fantastic in its speed, organization, execution, saturation, informativeness and impressions. Many thanks to the entire team of ma'at tours for the warm welcome at the plane ramp and the escort to the private car with a guide and driver. Special thanks to the wonderful guide sohila , my exceptional guide, who accompanied me everywhere and told me as much as possible about the history of Egypt from ancient civilization to the present day, especially in the Cairo Museum!" },
  { stars: 4, comment: "Everything was amazing! If you don't remember the history of the Ancient World very well, but want to embrace the immensity in a few hours, then in Egypt you should come to ma'at tours with sohila"/* , businessName: "Name of Client" */ },
];

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  padding: 20px 0;
`;

const Arrow = styled.div`
  cursor: pointer;
  font-size: 2rem;
  margin: 0 20px;
  color: #fff;
`;

function App() {
  const words = [
    "Adventure",
    "Journey",
    "Exploration",
    "Discovery",
    "Culture",
    "Ancient Wonders",
  ];
  const wordss = ["Our Server", "Our Advantages"];
  const wordsss = ["Our Client Review", "Share Your Opinion"];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <Navbar />
      <div id="home">
        <MainSection />
      </div>
      <div id="about">
        <FlipWords words={words} />
      </div>
      <Spotlight className="custom-class">
        <div className="content-secand">
          <p>
            Embark on unforgettable journeys through the heart of Egypt.
            Discover ancient wonders, vibrant cultures, and breathtaking
            landscapes. Let Maat Tours turn your dream trip into a reality
          </p>
        </div>
      </Spotlight>
      <br />
      <br />
      <br />
      <div id="services" className="common-container">
        <FlipWords words={wordss} />
        <div className="card-container">
          <Card
            imageUrl={imagepira4}
            title="Book Fully Customised Itineraries"
            description="Design your ideal Egyptian adventure with our bespoke itinerary services. We meticulously tailor your travel plans to align with your preferences and interests, ensuring a personalized and unforgettable journey through Egypt, whether you're seeking adventure, relaxation, or cultural immersion."
          />
          <Card
            imageUrl={imagepira2}
            title="Private Tours & Sharing Tours"
            description="Explore the magnificence of Egypt with our range of tour options. Opt for private tours for a personalized experience or join our sharing tours to discover Egypt alongside fellow travelers. Our expert guides provide insightful commentary, enriching your understanding of Egypt's historical and cultural treasures."
          />
          <Card
            imageUrl={imagepira3}
            title="Day Tours & Local Experiences"
            description="Engage with Egypt's rich heritage and vibrant culture through our carefully curated day tours and local experiences. From exploring ancient landmarks to indulging in authentic local cuisine, our programs offer a comprehensive and immersive glimpse into Egypt's unique way of life."
          />
          <Card
            imageUrl={imagepira5}
            title="Private Guides & Private Rides"
            description="Enhance your travel experience with our exclusive private guides and transportation services. Our knowledgeable guides offer personalized insights and dedicated assistance, while our private rides ensure your comfort and convenience throughout your Egyptian journey."
          />
          <Card
            imageUrl={imagepira6}
            title="Hotel Reservations"
            description="Secure the perfect accommodation with our hotel reservation services. We collaborate with premier hotels across Egypt, offering a selection that caters to your preferences, whether you desire luxury, comfort, or budget-friendly options, all ensuring a restful and pleasant stay."
          />
          <Card
            imageUrl={imagepira7}
            title="Flight Tickets"
            description="Streamline your travel arrangements with our flight booking services. We assist in finding the most suitable flights to and from Egypt to any place, ensuring that your travel plans are both convenient and cost-effective, allowing you to focus on enjoying your trip."
          />
          <Card
            imageUrl={imagepira8}
            title="Airport Shuttle Service"
            description="Ensure a seamless travel experience with our dependable airport shuttle service. We provide punctual and comfortable transfers between the airport and your accommodation, ensuring a smooth and stress-free start and conclusion to your Egyptian adventure."
          />
        </div>
      </div>
      <div>
        <FuriosaPoster />
      </div>
      <br />
      <br />
      <div id="contact">
        <Contact />
      </div>

      <div id="Review" >
      <FlipWords words={wordsss} />
      </div>
      <br />
      <br />
      <br />

      
      <Container>
        <Arrow onClick={handlePrev}>&lt;</Arrow>
        <Coupon
          stars={reviews[currentIndex].stars}
          comment={reviews[currentIndex].comment}
          businessName={reviews[currentIndex].businessName}
        />
        <Arrow onClick={handleNext}>&gt;</Arrow>
      </Container>
      

      <ReviewForm />

      <Footer />
      <BackToTopButton />
    </>
  );
}

export default App;
