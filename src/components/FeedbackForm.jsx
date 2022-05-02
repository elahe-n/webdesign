import React, { useState, useContext ,useEffect } from 'react'
import Card from './Card'
import FeedbackContext from '../context/FeedbackContext'
import { Button } from 'react-bootstrap';

function FeedbackForm() {

  const [text,setText]=useState('')
  const [message,setMessage]=useState('')

  const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setText(feedbackEdit.item.text)
    }
  }, [feedbackEdit])

  const textChangeHandler=(e)=>{
    if(text===''){
      setMessage(null)
    }
    setText(e.target.value)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    if (text.trim().length>0) {
      const newFeedback = {
        text
      }
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback )
      } else {addFeedback(newFeedback)}
      setText('')
    }
  }

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <h2>Please write your feedback</h2>
        <div className='input-group longInput'>
        <input type="text" placeholder='Write a review' onChange={textChangeHandler} value={text} />
        </div>
        <br/>
        <Button className="mx-2"  type="submit">Send</Button>
        </form>                                                                                                  
    </Card>
  )
}

export default FeedbackForm