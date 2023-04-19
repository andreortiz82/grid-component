import React from "react";
import { Box, Row, Col } from "./Box";
import "./styles.css";

const Home = () => {
  return (
    <>
      <Row gap={10}>
        <Col>
          <Box className="p-10 bg-red">Box</Box>
        </Col>
        <Col>
          <Box className="p-10 bg-red">Box</Box>
        </Col>
        <Col>
          <Box className="p-10 bg-red">Box</Box>
        </Col>
      </Row>
    </>
  );
};

export default Home;
