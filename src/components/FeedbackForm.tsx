import { useState, useContext, useEffect } from 'react'
import FeedbackContext from 'context/feedback/FeedbackContext'
import { v4 as uuidv4 } from 'uuid'
import RatingSelect from 'components/RatingSelect'
import Button from 'components/shared/Button'
import Card from 'components/shared/Card'

const FeedbackForm: React.FC = () => {
  const [text, setText] = useState<string>('')
  const [rating, setRating] = useState<number>(10)
  const [btnDisabled, setBtnDisabled] = useState<boolean>(true)
  const [message, setMessage] = useState<string | null>('')
  const { feedbackEdit, onAddFeedback, onUpdateFeedback } = useContext(FeedbackContext)

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false)
      setText(feedbackEdit.feedback.text)
      setRating(feedbackEdit.feedback.rating)
    }
  }, [feedbackEdit])

  const handleTextChange = (e: React.FormEvent<HTMLInputElement>) => {
    const textInput = e.currentTarget.value.trim()
    if (textInput === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if (textInput !== '' && textInput.length <= 10) {
      setBtnDisabled(true)
      setMessage('Text must be at least 10 characters')
    } else {
      setBtnDisabled(false)
      setMessage(null)
    }

    setText(e.currentTarget.value)
  }

  const handleSelectRating = (rating: number) => {
    setRating(rating)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback = {
        id: feedbackEdit.edit ? feedbackEdit.feedback.id : uuidv4(),
        rating,
        text,
      }

      if (feedbackEdit.edit === false) {
        onAddFeedback && onAddFeedback(newFeedback)
      } else {
        onUpdateFeedback && onUpdateFeedback(newFeedback)
      }

      setText('')
      setRating(10)
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={handleSelectRating} />
        <div className='input-group'>
          <input
            value={text}
            onChange={handleTextChange}
            type='text'
            placeholder='Write a review'
          />
          <Button type='submit' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>

        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
