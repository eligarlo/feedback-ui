import { useState } from 'react'
import Button from './shared/Button'
import Card from './shared/Card'

interface IFeedbackFormProps {}

const FeedbackForm: React.FC<IFeedbackFormProps> = ({}) => {
  const [text, setText] = useState<string>('')

  const handleTextChange = (e: React.FormEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value)
  }

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        {/* TODO: rating select component */}
        <div className='input-group'>
          <input
            value={text}
            onChange={handleTextChange}
            type='text'
            placeholder='Write a review'
          />
          <Button type='submit'>Send</Button>
        </div>
      </form>
    </Card>
  )
}

export default FeedbackForm
