import React from "react";
import Image from "next/image";
import { Button, Card, Col, Row } from "antd";
import cpu from "../assets/cpu-tower.png";
import monitor from "../assets/monitor.png";
import motherboard from "../assets/motherboard.png";
import ram from "../assets/ram.png";
import powersupply from "../assets/power-supply.png";
import storageDevice from "../assets/ssd-disk.png";
import mouse from "../assets/mouse.png";
import Link from "next/link";

const categories = [
  { id: 1, img: cpu, name: "CPU / Processor", link: "/cpu" },
  { id: 2, img: motherboard, name: "Motherboard", link: "/motherboard" },
  { id: 3, img: ram, name: "RAM", link: "/ram" },
  {
    id: 4,
    img: powersupply,
    name: "Power Supply Unit",
    link: "/powerSupply",
  },
  {
    id: 5,
    img: storageDevice,
    name: "Storage Device",
    link: "/storageDevice",
  },
  {
    id: 6,
    img: monitor,
    name: "Monitor",
    link: "/monitor",
  },
  {
    id: 7,
    img: mouse,
    name: "Mouse",
    link: "/mouse",
  },
];

const { Meta } = Card;
export default function FeaturedCategory() {
 
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
        style={{ margin: "10px 30px" }}
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {categories.map((category) => (
          <Col
            key={category.id}
            className="gutter-row"
            style={{ border: "1px solid", margin: "0 10px" }}
            span={3}
          >
            <Card
              hoverable
              cover={
                <Image
                  src={category?.img}
                  width={100}
                  height={100}
                  responsive
                  alt="category image"
                />
              }
            >
              <Meta title={category?.name} />
              <Link href={category.link}>
                <Button style={{ marginTop: "5px" }} type="primary">
                  Details
                </Button>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}
