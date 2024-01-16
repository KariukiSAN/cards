import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';
import { Input } from "./Input";

const FeaturedBrandsPage = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const BrandsData =[
    {
        id:1,
        imageurl: "",
        name:"Nestle",
        

        

    },
    {
        id:2,
        imageurl: "",
        name:"Proctor and Gamble",
        
        

    },
    {
        id:3,
        imageurl: "",
        name:"Unilever",
        
        

    },
    {
        id:4,
        imageurl: "",
        name:"Johnson & Johnson",
        
        

    },
    {
        id:5,
        imageurl: "",
        name:"Samsung",
        
        

    },
    {
        id:6,
        imageurl: "",
        name:"Colgate Palmolive",
        
        

    },
    
    {
        id:7,
        imageurl: "",
        name:"Panasonic",
        
        

    },
]

const input = BrandsData.map((item) => (
    <Input
      key={item.id}
      name={item.name}
      url={item.imageurl}
      
    />
  ));

  return (
    <div className="HomePage">
      <h1>Featured Brands</h1>
      <Carousel responsive={responsive}>{input}</Carousel>
    </div>
  );
};

export default FeaturedBrandsPage;



