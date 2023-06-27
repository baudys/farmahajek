'use client'

import { useRef, useEffect } from 'react'

const Video = () => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true
    }
  }, [])

  return (
    <video
      autoPlay
      ref={videoRef}
      loop
      muted
      playsInline
      className='absolute h-full w-full object-cover'
    >
      <source src='/hero.webm' type='video/webm; codecs=vp9' />
      <source src='/hero.m4v' type='video/mp4; codecs=hvc1' />
      <source src='/hero.m4v' type='video/mp4; codecs=avc1.42E01E' />
    </video>
  )
}

export default Video
