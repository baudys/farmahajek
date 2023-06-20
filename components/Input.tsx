interface InputProps {
  id: string
  type: 'email' | 'text'
  label: string
}

const Input: React.FC<InputProps> = ({ id, type, label }) => {
  return (
    <input
      id={id}
      type={type}
      placeholder={label}
      className='w-full rounded-md py-1.5 px-1 text-zinc-900 placeholder:text-zinc-500 shadow-sm sm:text-sm sm:leading-6'
    />
  )
}

export default Input
