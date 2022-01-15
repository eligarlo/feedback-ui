import FeedbackData from 'data/FeedbackData'
import { createContext, useState } from 'react'
import { IFeedbackData } from 'utils/SharedUtils'

// Create the FeedbackContext
interface IFeedbackContext {
  feedbacks: IFeedbackData[]
  feedbackEdit: IFeedbackEdit
  onAddFeedback?: (newFeedback: IFeedbackData) => void
  onDeleteFeedback?: (id: string) => void
  onEditFeedback?: (feedback: IFeedbackData) => void
  onUpdateFeedback?: (feedback: IFeedbackData) => void
}

const defaultState: IFeedbackContext = {
  feedbacks: FeedbackData,
  feedbackEdit: {
    feedback: { id: '', rating: 0, text: '' },
    edit: false,
  },
}

const FeedbackContext = createContext<IFeedbackContext>(defaultState)

// Create the FeedbackProvider
interface IFeedbackProvider {
  children: React.ReactNode
}

interface IFeedbackEdit {
  feedback: IFeedbackData
  edit: boolean
}

export const FeedbackProvider: React.FC<IFeedbackProvider> = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState<IFeedbackData[]>(defaultState.feedbacks)
  const [feedbackEdit, setFeedbackEdit] = useState<IFeedbackEdit>({
    feedback: { id: '', rating: 0, text: '' },
    edit: false,
  })

  // Add Feedback
  const onAddFeedback = (newFeedback: IFeedbackData) => {
    setFeedbacks([newFeedback, ...feedbacks])
  }

  // Delete Feedback
  const onDeleteFeedback = (id: string) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      setFeedbacks(feedbacks.filter(item => item.id !== id))
    }
  }

  // Update Feedback
  const onUpdateFeedback = (updatedFeedback: IFeedbackData) => {
    setFeedbacks(
      feedbacks.map(feedback =>
        feedback.id === updatedFeedback.id ? { ...feedback, ...updatedFeedback } : feedback
      )
    )
  }

  // Set item to be updated
  const onEditFeedback = (feedback: IFeedbackData) => {
    setFeedbackEdit({
      feedback,
      edit: true,
    })
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedbacks,
        feedbackEdit,
        onAddFeedback,
        onDeleteFeedback,
        onEditFeedback,
        onUpdateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
