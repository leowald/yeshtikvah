import { useState, useEffect } from "react";
import "../ajax.jsx";
import { get, put, remove,post } from "../ajax.jsx";
import Card from "./Card.jsx";


export default function Demo() {
const [posts,updatePosts] = useState([]);
const [comments,updateComments] = useState([]);
const [testing,updateTesting] = useState([]);


async function getPosts() {
  const response = await get("http://localhost:3000/posts");
  
      updatePosts(response);
      
  }

  async function getTestEndpoint() {
    const response = await get("http://localhost:3000/testingendpoint");
  
      updateTesting(response);
  }

  async function addPost() {
    const data = { "id": 3, "title": "testing without error...", "author": "type..." }
    await post("http://localhost:3000/posts",data);

  }

  async function editPost() {

    const data = {
      "id": 5,
      "title": "json-testing-edited",
      "author": "type...edited!!!again"
    }
    await put(`http://localhost:3000/posts/${data.id}`,data);
  }

  async function deletePost() {
    const data = {
      "id": 2,
    }
    await remove(`http://localhost:3000/posts/${data.id}`,data);

  }

  function getComments() {
    const response = fetch("http://localhost:3000/comments");
    response.then(function(data) {
    data.json().then(function(info) {
        updateComments(info);
        console.log(info);
        
    })    
    })}

useEffect(() => {

  getPosts();
  getComments();
 addPost();
  editPost();
  getTestEndpoint()
            
        }
  , []);





  return (
    <article>
       <Card>
      <h1>My demo Component</h1>
      <div>Posts:</div>
      {posts.map((post) => (<div key={post.id}>{post.id}. {post.title}/{post.author}</div>))}
      <div>Comments:</div>
      {comments.map((comment) => (<div key={comment.id}>{comment.id}. {comment.body}/{comment.postId}</div>))}
      <div>Testing:</div>
      {testing.map((test) => (<div key={test.id}>{test.id}. {test.title}/{test.author}</div>))}
      </Card>
      
    </article>
  );
}