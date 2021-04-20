//import React, { Component } from "react"
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import React from 'react'
import Container from 'react-bootstrap/Container'

const Rss = () => {
  const { isAuthenticated } = useAuth0();
  let content = null;

  const url = "https://jsonplaceholder.typicode.com/comments";
  const [posts, setImages] = useState(null)

  useEffect(() => {
      axios.get(url)
      .then(response => {
          setImages(response.data)
      })
  }, [url])

  if(posts) 
  {
      content = 
      posts.map((post, key) => 
          <div>
            <h2 key={key}>{post.name}</h2>
            <p>{post.body}</p>   
          </div>
      )
  }

      return (
          isAuthenticated && (
              <Container>
                  <h1>RSS Feed</h1>
                  {content}
              </Container>
          )
      )

}

export default Rss



/*
class Rss extends Component {
    constructor() {
      super();
      this.state = {
        recentRSS: {
          name: '',
          body: ''
        }
      }
    }
  
    FetchDataFromRssFeed() {
      let request = new XMLHttpRequest();
      request.onreadystatechange = () => {
        if (request.readyState == 4 && request.status == 200) {
          let myObj = JSON.parse(request.responseText);
          for (let i = 0; i < 5; i ++) {
            this.setState({
              recentRSS: {
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
            <h2>{this.state.recentRSS.name}</h2>
            <p>{this.state.recentRSS.body}</p>
        </div>
      );
    }
  }
export default Rss
*/
