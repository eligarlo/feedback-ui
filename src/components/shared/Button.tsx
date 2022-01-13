interface IButtonProps {
  children: React.ReactNode
  version?: string
  type?: 'submit' | 'reset' | 'button'
  isDisabled?: boolean
}

const Button: React.FC<IButtonProps> = ({
  children,
  version = 'primary',
  type = 'button',
  isDisabled = false,
}) => {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  )
}

export default Button
