import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import RatingSelect from './RatingSelect'
import Button from './shared/Button'
import Card from './shared/Card'

interface IFeedbackFormProps {
  handleAdd: Function
}

const FeedbackForm: React.FC<IFeedbackFormProps> = ({ handleAdd }) => {
  const [text, setText] = useState<string>('')
  const [rating, setRating] = useState<number>(10)
  const [btnDisabled, setBtnDisabled] = useState<boolean>(true)
  const [message, setMessage] = useState<string | null>('')

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
        id: uuidv4(),
        rating,
        text,
      }

      handleAdd(newFeedback)
      setText('')
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
