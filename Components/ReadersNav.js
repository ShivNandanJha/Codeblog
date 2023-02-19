import Image from 'next/image'
import Link from 'next/link'
import Logo from '../static/Logo.png'
import { HiOutlineHome } from 'react-icons/hi'
import { FiBell } from 'react-icons/fi'
import { BiBookmarks } from 'react-icons/bi'
import { RiArticleLine } from 'react-icons/ri'
import { BsPencilSquare } from 'react-icons/bs'
import Qazi from '../static/cp.png'

const styles = {
  wrapper       : `w-[5rem] h-screen flex flex-col justify-between items-center p-[1rem]`,
  logoContainer : `cursor-pointer`,
  iconsContainer: `flex-1 flex flex-col justify-center gap-[1.4rem] text-2xl text-[#787878]`,
  divider: `border-b`,
  profileImageContainer: `w-[2.4rem] h-[2.4rem] rounded-full overflow-hidden grid place-items-center `,
  profileImage: `object-cover`,
}

const ReadersNav = () => {
  return (
    <div className={styles.wrapper}>
      <Link href='/'>
        <div className={styles.logoContainer}>
          <Image height={40} width={70} src={Logo} alt='medium small logo' />
        </div>
      </Link>
      <div  className = {styles.iconsContainer}>
      <Link href      = '/'> <HiOutlineHome /></Link>
        {/* <FiBell />
        <BiBookmarks />
        <RiArticleLine /> */}
       <Link href={'/?addNew=1'}> <div className={styles.divider} />
        <BsPencilSquare /></Link>
        
      </div>
      <div className={styles.profileImageContainer}>
        <Image
          className = {styles.profileImage}
          src       = {Qazi}
          alt       = 'profile image icons'
          priority
        />
      </div>
    </div>
  )
}

export default ReadersNav
