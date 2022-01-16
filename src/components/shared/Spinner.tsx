import spinner from 'components/assets/spinner.gif'

const Spinner: React.FC = () => {
  return (
    <img
      src={spinner}
      alt='Loading...'
      style={{ width: '100px', margin: 'auto', display: 'block' }}
    />
  )
}

export default Spinner
