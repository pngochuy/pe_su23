import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";

import { Routes, Route, useParams } from "react-router-dom";

import { NEWS } from "../shared/news";

// ------------------------------------
import News from "./News";
import NewsList from "./NewsList";
import MenuForm from "./MenuForm";
// ------------------------------------

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news: NEWS,
    };
  }

  onNewSelect(newsId) {
    this.setState({ selectedNews: newsId });
  }

  render() {
    const NewsListPage = () => {
      return <NewsList news={this.state.news.filter((news) => news.status)} />;
    };

    const NewsWithId = ({ match }) => {
      const { newsId } = useParams();

      return (
        <News
          news={this.state.news.filter(
            (news) => news.id === parseInt(newsId, 10)
          )}
        />
      );
    };

    return (
      <>
        <div className="image-container-header">
          <img
            src="https://cdn.haitrieu.com/wp-content/uploads/2021/10/Logo-Dai-hoc-FPT.png"
            alt=""
          />
        </div>

        <MenuForm />

        <Routes>
          <Route path="/home" element={<NewsListPage />} />
          <Route path="/" element={<NewsListPage />} />
          <Route path="/home/:newsId" element={<NewsWithId />} />
        </Routes>

        <News
          news={
            this.state.news.filter(
              (news) => news.id === this.state.selectedNews
            )[0]
          }
        />
        {/* <Footer /> */}
      </>
    );
  }
}

export default Main;
