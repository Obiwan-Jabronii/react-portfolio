import { useQuery } from '@apollo/client';
import { QUERY_COMMENTS } from '../utils/queries';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

const Comments = () => {
    const { loading, data } = useQuery(QUERY_COMMENTS);
    const comments = data?.comments || [];
    console.log(comments);

    return (
        <main>
            <div className='flex-column justify-space-between'>
                <CommentForm />
                <div className= 'col-12 mb-3'>
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <CommentList comments={comments} title="Business associates, friends and family!" />
                    )}
                </div>
            </div>
        </main>
    );
};

export default Comments;