import { useState } from 'react'
import RatingSelect from './RatingSelect'
import Button from './shared/Button'
import Card from './shared/Card'

interface IFeedbackFormProps {}

const FeedbackForm: React.FC<IFeedbackFormProps> = ({}) => {
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

  return (
    <Card>
      <form>
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
