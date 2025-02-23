import {useLoaderData} from 'react-router-dom';
import Post from './Post';

import classes from './PostList.module.css';
import { useEffect, useState } from 'react';

function PostList() {
  const posts = useLoaderData();

  return (
    <>
      {posts && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post, index) => (
            <Post body={post.body} author={post.author} key={index} id={post.id}></Post>
          ))}
        </ul>
      )} 
      {posts && posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are not posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )} 
    </>
  );
}

export default PostList;
