import { Col, Row } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react'

export default function ProductDetails({featuredProduct}) {
  const router = useRouter()
  const { productId } = router.query

 
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
              src={featuredProduct?.image}
              width={500}
              height={300}
              responsive
              alt="news image"
            />
          </div>
        </Col>
        <Col className="gutter-row" span={10}>
          <div>
            <h1 style={{fontSize:'25px'}}>{featuredProduct?.productName}</h1>
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
                Category:  {featuredProduct?.category}
                </span>
                <span>
                   Price: {featuredProduct?.price} 
                </span>
                <span>
                  Status:  {featuredProduct?.status}
                </span>
                <span>
                  Rating:  {featuredProduct?.rating}
                </span>
              </p>

              <p style={{ fontSize: "20px" }}>
                {featuredProduct?.description}
              </p>
         
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
                Individual Rating:  {featuredProduct?.individualRating}
                </span>
                <span>
                   Average Rating: {featuredProduct?.averageRating} 
                </span>
                <span>
                  Reviews:  {featuredProduct?.reviews}
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
  const id = params.productId;
  const res = await fetch(`https://builder-backend-nu.vercel.app/featured-product/${id}`);
  const data = await res.json();


  return {
    props: {
      featuredProduct: data,
    },
  };
};
