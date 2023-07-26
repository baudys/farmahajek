import { SizeContext } from '@/utils/sizeObserver'
import useAnimationFrame from '@/utils/useAnimationFrame'
import Link from 'next/link'
import React, {
  PropsWithChildren,
  useCallback,
  useContext,
  useRef,
} from 'react'

interface Props {
  initialOffsetX: number
  className: string
  contentWidth: number
}

const SliderContainer: React.FC<PropsWithChildren<Props>> = ({
  children,
  initialOffsetX,
  className,
  contentWidth,
}) => {
  const { innerWidth } = useContext(SizeContext)
  const refScrollX = useRef<number>(initialOffsetX)
  const refContainer = useRef<HTMLDivElement>(null)
  const refContent = useRef<HTMLDivElement>(null)

  const enabled = innerWidth < contentWidth

  useAnimationFrame(
    enabled,
    useCallback(() => {
      const { current: elContainer } = refContainer
      const { current: elContent } = refContent
      if (elContainer && elContent) {
        refScrollX.current += 0.5
        elContainer.scrollLeft = refScrollX.current

        if (elContainer.scrollLeft >= elContent.clientWidth) {
          refScrollX.current = 0
          elContainer.scrollLeft = 0
        }
      }
    }, [])
  )

  return (
    <div
      ref={refContainer}
      className='max-w-full overflow-x-hidden whitespace-nowrap'
    >
      <div ref={refContent} className='inline-flex items-center'>
        {children}
      </div>
      <div className={enabled ? 'inline-flex items-center' : 'hidden'}>
        {children}
      </div>
    </div>
  )
}

export default SliderContainer

interface ItemProps {
  width: number
  href: string
}

export const SliderItem: React.FC<PropsWithChildren<ItemProps>> = ({
  children,
  href,
  width,
}) => (
  <Link href={href} target='_blank'>
    <div
      className='inline-flex items-center justify-center p-3 mx-4 rounded-lg hover:bg-zinc-300'
      style={{
        width,
      }}
    >
      {children}
    </div>
  </Link>
)
