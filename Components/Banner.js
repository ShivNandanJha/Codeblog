import Image from 'next/image'
import { useContext } from 'react'
import { MediumContext } from '../context/MediumContext'
import Logo from './../static/banner.png'

const styles = {
  wrapper: `h-max-[15rem] flex items-center justify-center border-dotted border-2 border-indigo-600 bg-[#feffdf]`,
  content: `max-w-7xl flex-1 flex items-center justify-between`,
  accentedButton: `bg-black text-white py-2 px-4 rounded-full`,
}

const Banner = () => {
  const { user, handleUserAuth } = useContext(MediumContext)

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className='space-y-5 px-10 flex-[3]'>
          <h1 className='max-w-xl text-[6rem] font-mediumSerif'>
            Stay Curious.
          </h1>
          <h3 className='text-2xl py-10'>
            Discover stories, thinking, and expertise from writers on any topic.
            Discover stories, thinking, and expertise from writers on any topic.
            Discover stories, thinking, and expertise from writers on any topic.
          </h3>
          {/* {user ? (
            <button className={styles.accentedButton}>
              Write
            </button>
          ) : (
            <button onClick={handleUserAuth} className={styles.accentedButton}>
              Sign In
            </button>
          )} */}
        </div>

        <Image
          className='hidden md:inline-flex object-contain flex-1'
          src={Logo.src}
          height={600}
          width={800}
          alt='logo'
        />
      </div>
    </div>
  )
}

export default Banner
