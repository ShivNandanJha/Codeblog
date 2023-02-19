import Image from 'next/image'
import { useContext } from 'react'
import { MediumContext } from '../context/MediumContext'

import { MdMarkEmailUnread } from 'react-icons/md'


const styles = {
  wrapper: `h-screen min-w-[10rem] max-w-[30rem] flex-[1.2] p-[2rem]`,
  accentedButton: `flex items-center justify-center text-sm bg-black text-white my-[2rem] py-[.6rem] rounded-full`,
  searchBar: `flex items-center gap-[.6rem] h-[2.6rem] border px-[1rem] rounded-full`,
  searchInput: `border-none outline-none bg-none w-full`,
  authorContainer: `my-[2rem]`,
  authorProfileImageContainer: `h-[5rem] w-[5rem] rounded-full overflow-hidden`,
  authorName: `font-semibold mb-[.2rem] mt-[1rem]`,
  authorFollowing: `text-[#787878]`,
  authorActions: `flex gap-[.6rem] my-[1rem]`,
  actionButton: `bg-[#1A8917] text-white rounded-full px-[.6rem] py-[.4rem] text-sm`,
  recommendationContainer: ``,
  title: `my-[1rem]`,
  articlesContainer: ``,
  articleContentWrapper: `flex items-center justify-between cursor-pointer my-[1rem]`,
  articleContent: `flex-[4]`,
  recommendationAuthorContainer: `flex items-center gap-[.6rem]`,
  recommendationAuthorProfileImageContainer: `rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]`,
  recommendationAuthorName: `text-sm`,
  recommendationTitle: `font-bold`,
  recommendationThumbnailContainer: `flex flex-1 items-center justify-center h-[4rem] w-[4rem]`,
  recommendationThumbnail: `object-cover`,
}


const Recommendations = ({ author }) => {
  const { allPosts } = useContext(MediumContext)
  const { User, handleUserAuth}      = useContext(MediumContext)

  return (
    <div className={styles.wrapper}>
      <>

        {author.length > 0 ? (
          <div className={styles.authorContainer}>
            <div className={styles.authorProfileImageContainer}>
              <Image
                src={`https://res.cloudinary.com/demo/image/fetch/${author[0].data.imageUrl}`}
                alt='author'
                width={100}
                height={100}
              />
            </div>
            <div className={styles.authorName}>{author[0].data.name}</div>
            <div className={styles.authorFollowing}>
              {author[0].data.followerCount} followers
            </div>
            <div className={styles.authorActions}>
              <button className={styles.actionButton}>Follow</button>
              <button className={styles.actionButton}>
                <MdMarkEmailUnread />
              </button>
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}

        <div className={styles.recommendationContainer}>
        
        </div>
      </>
    </div>
  )
}

export default Recommendations

