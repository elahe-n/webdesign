 import { createContext, useState } from "react";
 import {v4 as uuidv4} from 'uuid';

 const FeedbackContext=createContext()

 export const FeedbackProvider = ({children}) =>{

     const [feedback,setFeedback]= useState([
       {
        id:1,
        text:'You can do better',
       },
       {
        id:2,
        text:'Try more...',
       }
     ])

     const [feedbackEdit,setFeedbackEdit] = useState({
       item: {},
       edit:false
     })

     const deleteFeedback=(id) =>{
      console.log(id)
      if(window.confirm('Are you sure to delete this item?')) {
        setFeedback(feedback.filter((item) => item.id !== id ))
      }
     } 

     const addFeedback = (newFeedback) => {
      newFeedback.id = uuidv4()
      setFeedback([newFeedback, ...feedback])
      console.log(feedback)
    }

    const editFeedback = (item) => {
      setFeedbackEdit({
        item,
        edit:true
      })
    }

    const updateFeedback = (id, updItem) => {
      setFeedback(
        feedback.map((item) => (item.id === id ? {
        ...item , ...updItem}  : item ))
      )
      }

     return <FeedbackContext.Provider value= {{
       feedback,
       deleteFeedback,
       addFeedback,
       editFeedback ,
       feedbackEdit,
       updateFeedback,
       }}>

       {children}  
     </FeedbackContext.Provider>
 }

 export default FeedbackContext