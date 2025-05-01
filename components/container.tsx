import { cn } from '@/lib/utils'

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={cn(
        'mx-auto px-3 md:max-w-screen-lg 2xl:max-w-screen-xl',
        className,
      )}
    >
      {children}
    </div>
  )
}

export default Container
