declare module 'react-vertical-timeline-component' {
  import type { ComponentType, PropsWithChildren } from 'react'

  type TimelineComponentProps = PropsWithChildren<Record<string, unknown>>

  export const VerticalTimeline: ComponentType<TimelineComponentProps>
  export const VerticalTimelineElement: ComponentType<TimelineComponentProps>
}
