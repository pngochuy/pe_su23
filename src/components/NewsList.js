import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { Outlet, Link } from "react-router-dom";

function RenderNews({ item }) {
  const customOrange = "#FFA500";
  return (
    <Card className="card-container">
      <div className="card-image">
        <CardImg src={item.image} alt={item.name} width="100%" height="300px" />
      </div>
      <CardBody>
        <CardTitle className="">
          <h3>{item.name}</h3>
        </CardTitle>
        {item.designation ? (
          <CardSubtitle>{item.designation}</CardSubtitle>
        ) : null}
        <CardText>
          <i class="fa fa-calendar" aria-hidden="true"></i> {item.date}
        </CardText>
        <CardText>{item.description}</CardText>
        <div className="card-btn">
          <Link
            to={`/home/${item.id}`}
            style={{
              backgroundColor: customOrange,
              textDecoration: "none",
            }}
          >
            <Button
              style={{
                backgroundColor: customOrange,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <i
                class="fa fa-eye mr-2"
                aria-hidden="true"
                style={{ marginRight: "10px" }}
              ></i>
              Xem chi tiết
            </Button>
          </Link>
        </div>
      </CardBody>
    </Card>
  );
}

function NewsList(props) {
  return (
    <div className="container">
      <div className="row align-items-start">
        {props.news.map((news) => (
          <div key={news.id} className="col-12 col-md m-1">
            <RenderNews item={news} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsList;
