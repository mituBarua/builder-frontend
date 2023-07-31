import React from "react";
import { Carousel, Col, Row } from "antd";
import banner1 from "../assets/banner-1.webp";
import banner2 from "../assets/banner-2.webp";
import banner3 from "../assets/banner-3.webp";
import Image from "next/image";

export default function Banner() {
  const onChange = (currentSlide) => {};
  return (
    <Row style={{'marginTop': '10px'}}>
      <Col span={2}></Col>
      <Col span={20}>
        <Carousel afterChange={onChange}>
          <div>
            <Image src={banner1} alt="banner" style={{ width: "100%" }} />
          </div>
          <div>
            <Image src={banner2} alt="banner" style={{ width: "100%" }} />
          </div>
          <div>
            <Image src={banner3} alt="banner" style={{ width: "100%" }} />
          </div>
        </Carousel>
      </Col>

      <Col span={2}></Col>
    </Row>
  );
}
