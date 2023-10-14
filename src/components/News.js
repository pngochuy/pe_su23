import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link, useParams } from "react-router-dom";

function RenderNews({ news }) {
  if (news == null) {
    return <div></div>;
  }
  return (
    <div className="col-12">
      <div className="news-img">
        <img src={news.image} alt={news.name} width="100%" />
      </div>
      <div
        style={{
          backgroundColor: "white",
          marginTop: "30px",
        }}
      >
        <i class="fa fa-calendar" aria-hidden="true"></i> {news.date}
        <p>{news.description}</p>
      </div>
    </div>
  );
}

const News = (props) => {
  if (props.news != null && props.news.length > 0) {
    let news = props.news[0];
    return (
      <div className="container">
        <div className="row mt-5">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{news.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{news.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <RenderNews news={news} />
        </div>
      </div>
    );
  }
};

export default News;
