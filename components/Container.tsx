import { cn } from '@/lib/utils'

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        'mx-auto px-3 xl:max-w-screen-xl 2xl:max-w-screen-2xl',
        className,
      )}
    >
      {children}
    </div>
  )
}
