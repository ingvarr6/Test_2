import React, { Component } from "react";
import shortId from "shortid";

import images from "../images/index";

export default class Profile extends Component {
  state = {
    social: []
  };

  componentDidMount() {
    let img = {};

    //Ждем когда промисы вернут ссылки на картинки
    Promise.all(
      images.map((v, i) => {
        return images[i][1];
      })
    ).then(v => {
      images.map((_, i) => {
        let label = images[i][0];
        let url = v[i];
        return (img[label] = url);
      });
      this.setState({ social: img });
    });
  }

  render() {
    const { city, languages, social, errorUserInfo, fetching } = this.props;

    let web = {};
    let firstWeb = social.filter(el => {
      if (el.label !== "web") {
        return true;
      } else {
        web = el;
        return false;
      }
    });
    firstWeb.unshift(web);

    if (fetching) {
      return <p>Loading...</p>;
    }

    if (errorUserInfo) {
      return <p>Пользователь не найден</p>;
    }

    return (
      <div className="content">
        <p>Город: {city}</p>
        <p>Знания языков:</p>
        <ul>{languages.map(lang => <li key={lang}>{lang}</li>)}</ul>
        <p>Ссылки:</p>

        {firstWeb.map(social => (
          <figure key={shortId.generate()} className="image is-32x32">
            <a href={social.link} target="_blank">
              <img src={this.state.social[social.label]} alt={social.label} />
            </a>
          </figure>
        ))}
      </div>
    );
  }
}
