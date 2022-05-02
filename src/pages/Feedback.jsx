import React from 'react'
import { FeedbackProvider } from '../context/FeedbackContext';
import FeedbackList from '../components/FeedbackList';
import FeedbackForm from '../components/FeedbackForm';

function Feedback() {
  return (
    <FeedbackProvider>
        <div className='container'>
           <FeedbackForm />
           <FeedbackList />       
        </div>


</FeedbackProvider>
  )
}

export default Feedback
