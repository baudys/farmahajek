export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='mb-32'>
      <div className='mb-10 h-[70.72px] w-full bg-black xl:h-[84.81px]' />
      {children}
    </main>
  )
}
