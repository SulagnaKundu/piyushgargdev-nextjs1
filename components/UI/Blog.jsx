import React, { useState, useEffect } from "react";
import { Container, Row, Col, Alert } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/portfolio.module.css";
import PortfolioItem from "./PortfolioItem";

import portfolioData from "../data/portfolio";
import Slider from "react-slick";

const Blog = ({ blogs, blogDomain }) => {
  const [filter, setFilter] = useState("Mobile App");
  const [data, setData] = useState();

  useEffect(() => {
    if (filter === "Mobile App") {
      const filteredData = portfolioData.filter(
        (item) => item.category === filter
      );

      setData(filteredData);
    }

    if (filter === "Web Design") {
      const filteredData = portfolioData.filter(
        (item) => item.category === filter
      );

      setData(filteredData);
    }
  }, [filter]);

  const active = `${classes.tab__btn__active}`;

  return (
    <section id="blogs">
      <Container>
        <Row>
          <Col lg="6" md="6" className="mb-5">
            <SectionSubtitle subtitle="blog.piyushgarg.dev" />
            <h4 className="mt-4">Checkout my recent blogs</h4>
          </Col>
        </Row>

        <Row>
          {blogs.map((blogItem) => (
            <Col
              style={{ margin: "10px 0px" }}
              key={blogItem._id}
              lg="4"
              md="4"
              sm="6"
            >
              <PortfolioItem
                item={{
                  title: blogItem.title,
                  subtitle: blogItem.brief,
                  img: blogItem.coverImage,
                  liveUrl: `https://${blogDomain}/${blogItem.slug}`,
                  keyword: [`${blogItem.totalReactions} reactions ✨`],
                }}
              />
            </Col>
          ))}
        </Row>

        {/* <Row>
          {portfolioData.map((item) => (
            <Col
              style={{ margin: "10px 0px" }}
              key={item.id}
              lg="4"
              md="4"
              sm="6"
            >
              <PortfolioItem item={item} />
            </Col>
          ))}
        </Row> */}
      </Container>
    </section>
  );
};

export default Blog;