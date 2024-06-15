import { useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import api from './api/url';

const PostPage = ({posts, handleDelete}) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const post = posts.find(post => (post.id).toString() === id);

  return (
    <main className='PostPage'>
        <article className="post">
            {post &&
                <>
                    <h2>{post.title}</h2>
                    <p>{post.datetime}</p>
                    <p>{post.body}</p>
                    <button className="deleteButton" onClick={() => handleDelete(post.id)}>Delete Post</button>
                    <Link to={`/edit/${post.id}`}><button className='editButton'>Edit Post</button></Link>
                </>
            }
            {!post &&
                <>
                    <h2>Page Not Found</h2>
                    <p>Well, that's disappointing.</p>
                    <p><Link to='/'>Visit Our Homepage</Link></p>
                </>
            }
        </article>
    </main>
  );
};

export default PostPage;
