import { Card, Col, Row } from "antd";
import Image from "next/image";
import { ArrowRightOutlined } from "@ant-design/icons";
import Link from "next/link";

export default function CpuPage({ featuredCategoryList }) {
  const handleSelect = (category) => {

    // let string = JSON.string(array);
    // let categories = [];
    // if (localStorage.getItem("categories") !== null) {
    //  categories =  localStorage.getItem("categories");
    // }
    // categories = [...categories,category]
    // console.log(categories)
    // localStorage.setItem("categories", categories);
  };

  const cpuFeaturedData = featuredCategoryList.data.filter(
    (item) => item.category == "Processor"
  );

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
        #Featured Category
      </h1>
      <Row
        style={{ margin: "0 30px" }}
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {cpuFeaturedData?.map((product) => (
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
                <span>Category: {product?.category}</span>
                <span>Price: {product?.price}</span>
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
                <span>Status: {product?.status}</span>
                <span>Rating: {product?.rating}</span>
              </p>

              <Link href={`/featured-category/${product?._id}`}>
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

              <button
                
                onClick={handleSelect(product?.category)}
              >
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
                  Add to Builder
                </p>
              </button>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch("https://builder-backend-nu.vercel.app/featured-category");

  const data = await res.json();
  return {
    props: {
      featuredCategoryList: data,
    },
    // revalidate: 10, //for build if any changes happen it will show in 10s into the webpages.
  };
};
