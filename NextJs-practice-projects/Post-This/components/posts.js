'use client'

import { formatDate } from '@/lib/format';
import LikeButton from './like-icon';
import { togglePostLikeStatus } from '@/app/actions/posts';
import { useOptimistic } from 'react';

function Post({ post, action }) {
  return (
    <article className="post">
      <div className="post-image">
        <img src={post.image} alt={post.title} />
      </div>
      <div className="post-content">
        <header>
          <div>
            <h2>{post.title}</h2>
            <p>
              Shared by {post.userFirstName} on{' '}
              <time dateTime={post.createdAt}>
                {formatDate(post.createdAt)}
              </time>
            </p>
          </div>
          <div>
            <form action={action.bind(null, post.id)} className={post.isLiked ? 'liked' : ''}>
              <LikeButton />
            </form>
          </div>
        </header>
        <p>{post.content}</p>
      </div>
    </article>
  );
}

export default function Posts({ posts }) {
  const [optiPosts, optiPostFn] = useOptimistic(posts, (prevPosts,updPostId)=>{
    const updatedPostInd = prevPosts.findIndex(p => p.id === updPostId)

    if (updatedPostInd === -1) {
      return prevPosts
    }

    const updatedPost = { ...prevPosts[updatedPostInd] };
    updatedPost.likes = updatedPost.likes + (updatedPost.isLiked ? -1 : 1);
    updatedPost.isLiked = !updatedPost.isLiked;

    const newPosts = [...prevPosts]
    newPosts[updatedPostInd] = updatedPost

    console.log(newPosts)
    return newPosts
  })

  async function updatePost(postId) {
    optiPostFn(postId);
    await togglePostLikeStatus(postId);
  }

console.log(optiPosts)
  return (
    <ul className="posts">
      {optiPosts.map((post) => (
        <li key={post.id}>
          <Post post={post} action={updatePost} />
        </li>
      ))}
    </ul>
  );
}
