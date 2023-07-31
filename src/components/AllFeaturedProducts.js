import { Card, Col, Row } from "antd";
import Image from "next/image";
import {
  ArrowRightOutlined,
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import Link from "next/link";

export default function AllFeaturedProducts({featuredProduct}) {
   
    const { Meta } = Card;
    return (
      <>
        <h1
          style={{
            textAlign: "center",
            fontSize: "50px",
            margin: "30px 0px",
          }}
        >
          #Featured Products
        </h1>
        <Row
        style={{"margin":"0 30px"}}
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}
        >
          {featuredProduct.data?.map((product) => (
           
            <Col key={product.id} className="gutter-row" span={8}>
              <Card
                hoverable
                cover={
                  <Image
                    src={product?.image}
                    width={500}
                    height={200}
                    responsive
                    alt="product image"
                  />
                }
              >
                <Meta title={product?.productName} />
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
                    color: "#3b3b3b",
                    margin: "10px 0px",
                    fontSize: "15px",
                  }}
                >
                  <span>
                    Category: {product?.category}
                  </span>
                  <span>
                   Price: {product?.price}
                  </span>
                 
                </p>
                <p
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    color: "#3b3b3b",
                    margin: "10px 0px",
                    fontSize: "15px",
                  }}
                >
                  
                  <span>
                   Status:  {product?.status}
                  </span>
                  <span>
                   Rating:  {product?.rating}
                  </span>
                </p>
  
                
                <Link href={`/featured-product/${product?._id}`}>
                  <p
                    style={{
                      fontSize: "15px",
                      marginTop: "20px",
                      backgroundColor: "black",
                      color: "white",
                      width: "100%",
                      padding: "2px 5px ",
                      fontWeight: "300",
                      letterSpacing: "3px",
                      textAlign: "center",
                    }}
                  >
                  Details <ArrowRightOutlined />
                  </p>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </>
    );
}
