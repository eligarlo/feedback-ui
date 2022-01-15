import FeedbackData from 'data/FeedbackData'
import { createContext, useState } from 'react'
import { IFeedbackData } from 'utils/SharedUtils'

// Create the FeedbackContext
interface IFeedbackContext {
  feedbacks: IFeedbackData[]
  onAddFeedback?: Function
  onDeleteFeedback?: Function
}

const defaultState: IFeedbackContext = {
  feedbacks: FeedbackData,
}

const FeedbackContext = createContext<IFeedbackContext>(defaultState)

// Create the FeedbackProvider
interface IFeedbackProvider {
  children: React.ReactNode
}

export const FeedbackProvider: React.FC<IFeedbackProvider> = ({ children }) => {
  const [feedbacks, setFeedback] = useState<IFeedbackData[]>(defaultState.feedbacks)

  const onAddFeedback = (newFeedback: IFeedbackData) => {
    setFeedback([newFeedback, ...feedbacks])
  }

  const onDeleteFeedback = (id: string) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      setFeedback(feedbacks.filter(item => item.id !== id))
    }
  }

  return (
    <FeedbackContext.Provider value={{ feedbacks, onAddFeedback, onDeleteFeedback }}>
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
