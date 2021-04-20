import React, { Component } from "react"

class Rss extends Component {
    constructor() {
      super();
      this.state = {
        recentBlogPost: {
          name: '',
          body: ''
        }
      }
    }
  
    FetchDataFromRssFeed() {
      var request = new XMLHttpRequest();
      request.onreadystatechange = () => {
        if (request.readyState == 4 && request.status == 200) {
          var myObj = JSON.parse(request.responseText);
          for (var i = 0; i < 1; i ++) {
            this.setState({
              recentBlogPost: {
                name: myObj[i].name,
                body: myObj[i].body
              }
            });
          }
        }
      }
      request.open("GET", "https://jsonplaceholder.typicode.com/comments", true);
      request.send();
    }
  
    componentDidMount() {
      {this.FetchDataFromRssFeed()}
    }
  
    render() {
      return (
        <div>
            <h1>RSS</h1>
            <h2>{this.state.name}</h2>
            <p>{this.state.url}</p>
        </div>
      );
    }
  }
export default Rss
