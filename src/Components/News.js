import React, { Component } from "react";
import shortId from "shortid";

export class News extends Component {
  componentDidMount() {
    this.props.news.length === 0 && this.props.getNews();
  }

  render() {
    const { news, fetching, errMsg } = this.props;

    if (fetching) {
      return <p>Loading...</p>;
    }
    if (errMsg) {
      return <p>{errMsg}</p>;
    }
    return (
      <div className="content">
        <div className="title">Новости</div>

        {news.map(news => {
          return (
            <div key={shortId.generate()} className="box">
              <p className="subtitle">
                {news.title}
              </p>
              <div className="content">{news.text}</div>
            </div>
          );
        })}
        <div className="subtitle">Всего новостей: {news.length}</div>
      </div>
    );
  }
}

export default News;
