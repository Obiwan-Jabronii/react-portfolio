import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { ADD_COMMENT } from '../../utils/mutations';
import { QUERY_COMMENTS } from '../../utils/queries';

 const CommentForm = () => {
    const [formState, setFormState] = useState({ username: ' ', relation: ' ', commentText: ' ' }) 
    const [addComment, { error }] = useMutation(ADD_COMMENT)
    
    const handleFormSubmit = async event => {
        event.preventDefault();

        try {
            await addComment({
               variables: { ...formState }
            });

        setFormState(' ')
        } catch (e){
            console.error(e)
        }
    }
    return (
        <div style={{ width: 800, margin: "auto" }}> 
            <form 
                className='flex-row justify-center justify-space-between-md my-5 mx-5'
                onSubmit={handleFormSubmit}
            >
                <input
                    placeholder='Name'
                    className='form-input-name'
                    style={{ height: 50 }}
                    defaultValue={formState.username}
                    // onChange={handleChange}
                    name='username'
                    type='username'
                    id='username'
                ></input>
                <input
                    placeholder='Relation'
                    className='form-input-name'
                    style={{ height: 50 }}
                    defaultValue={formState.relation}
                    // onChange={handleChange}
                    name='relation'
                    type='relation'
                    id='realtion'
                ></input>
                <textarea
                    placeholder='Add a comment...'
                    className='form-input col-9'
                    defaultValue={formState.commentText}
                    // onChange={handleChange}
                    name='commentText'
                    type='commentText'
                    id='commentText'
                ></textarea>
                <button className='btn col-12 col-md-3' type='submit'>
                    Submit
                </button>
                {/* <p className={`m-0 text-light ${characterCount === 200 ? 'text-error' : ''}`}>
                    Character Count: {characterCount}/200
                    {error && <span className='ml-2'>Something went wrong</span>}
                </p> */}
            </form>
        </div>
    )
};
export default CommentForm;