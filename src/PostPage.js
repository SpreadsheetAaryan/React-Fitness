import { useParams, Link } from "react-router-dom";
import { useStoreState, useStoreActions } from 'easy-peasy';
import { useNavigate } from "react-router-dom";

const PostPage = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const deletePost = useStoreActions((actions) => actions.deletePost);
    const getPostById = useStoreState((state) => state.getPostById);
    const post = getPostById(id);

    const handleDelete = (id) => {
        deletePost(id);
        navigate("/community");
    }

    return (
        <main className="PostPage">
            <article className="post">
                {post && 
                    <>
                        <h2>{post.title}</h2>
                        <p className="postDate">{post.datetime}</p>
                        <p className="postBody">{post.body}</p>
                        <button onClick={() => handleDelete(post.id)}>Delete Post</button>
                        <Link to={`/edit/${id}`}><button>Edit Post</button></Link>
                    </>    
                }
                {!post && 
                    <>
                        <h2>Post Not Found</h2>
                        <p>Well, that's disappointing</p>
                        <p>
                            <Link to="/" >Visit Our Homepage</Link>
                        </p>
                    </>
                }
            </article>
        </main>
    )
}

export default PostPage