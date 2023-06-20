import React from 'react'

const Map = () => {
  return (
    <div>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d41581.253022067205!2d13.004754000000002!3d49.35539800000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470ab52faca54e71%3A0xc633bcb1c79da4c3!2zUHJvZGVqbmEgZHLFr2Jlxb5lIC0gRmFybWEgSMOhamVr!5e0!3m2!1sen!2sus!4v1687264052380!5m2!1sen!2sus'
        className='max-h-[600px] w-full aspect-square rounded'
        scrolling='no'
        referrerPolicy='no-referrer-when-downgrade'
        loading='lazy'
      ></iframe>
    </div>
  )
}

export default Map
