import { Col, Row } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react'

export default function ProductDetails({featuredCategory}) {
  const router = useRouter()
  const { categoryId } = router.query

 
  return (
    <div style={{"marginTop": '15px'}}>
        <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col className="gutter-row" span={10}>
          <div>
            <Image
              src={featuredCategory?.image}
              width={500}
              height={300}
              responsive
              alt="news image"
            />
          </div>
        </Col>
        <Col className="gutter-row" span={10}>
          <div>
            <h1 style={{fontSize:'25px'}}>{featuredCategory?.productName}</h1>
              <div
                className="line"
                style={{
                  height: "5px",
                  margin: "20px 0",
                  background: "#000",
                  width: "100%",
                }}
              ></div>

              <p
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  color: "#414141",
                  margin: "10px 0px",
                  fontSize: "16px",
                }}
              >
                <span>
                Category:  {featuredCategory?.category}
                </span>
                <span>
                   Price: {featuredCategory?.price} 
                </span>
                <span>
                  Status:  {featuredCategory?.status}
                </span>
                <span>
                  Rating:  {featuredCategory?.rating}
                </span>
              </p>

           
         
               
             </div>
        </Col>
      </Row>
  
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const { params } = context;
  const id = params.categoryId;

  const res = await fetch(`http://localhost:4000/featured-category/${id}`);
  const data = await res.json();


  return {
    props: {
      featuredCategory: data,
    },
  };
};
