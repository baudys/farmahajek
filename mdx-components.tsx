import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className='mb-4 py-1 text-center text-4xl font-bold uppercase md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl'>
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className='mb-3 mt-12 py-1 text-2xl font-bold uppercase md:text-3xl lg:text-4xl xl:text-5xl'>
        {children}
      </h2>
    ),
    p: ({ children }) => (
      <p className='text-justify text-zinc-800 md:text-lg lg:text-xl'>
        {children}
      </p>
    ),
    img: (props) => <img className='mx-auto mb-10 w-full' {...props} />,
    ...components,
  }
}
