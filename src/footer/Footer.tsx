import SubscribeForm from '../forms/subscribe/SubscribeForm'
import Link from 'next/link'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.social}>
        <h4 className={styles.title}>Get social with us</h4>
        <div className={styles.icons}>
          <a target='_blank' href='https://www.facebook.com/elliotforwater/' rel='noopener'>
            <img className={styles.icon} src='/images/social-icons/fb_icon.svg' alt='facebook elliot for water' />
          </a>
          <a target='_blank' href='https://www.instagram.com/elliotforwater/' rel='noopener'>
            <img
              className={styles.icon}
              src='/images/social-icons/instagram_icon.svg'
              alt='instagram elliot for water'
            />
          </a>
          <a target='_blank' href='https://vm.tiktok.com/Kk2AL5/' rel='noopener'>
            <img className={styles.icon} src='/images/social-icons/tiktok_icon.svg' alt='tiktok elliot for water' />
          </a>
          <a target='_blank' href='https://twitter.com/Elliotforwater' rel='noopener'>
            <img className={styles.icon} src='/images/social-icons/twitter_icon.svg' alt='twitter elliot for water' />
          </a>
          <a
            target='_blank'
            href='https://www.youtube.com/channel/UCPxhu7Umb7kBzGVA0DB7uew?view_as=subscriber'
            rel='noopener'
          >
            <img className={styles.icon} src='/images/social-icons/youtube_icon.svg' alt='youtube elliot for water' />
          </a>
        </div>
      </div>
      <div className={styles.newsletter}>
        <h4 className={styles.title}>Follow our journey</h4>
        <SubscribeForm />
      </div>

      <div className={styles.separationLine} />
      <ul className={styles.links}>
        <li className={styles.link}>
          <Link href={`${process.env.NEXT_PUBLIC_WEBAPP_URL}/about/#contact`}>
            <a>Contact</a>
          </Link>
        </li>
        <li className={styles.link}>
          <Link href={`${process.env.NEXT_PUBLIC_WEBAPP_URL}/about`}>
            <a>About us</a>
          </Link>
        </li>
        {/* <li>
            FAQ
        </li> */}
        <li className={styles.link}>
          <Link href={`${process.env.NEXT_PUBLIC_WEBAPP_URL}/privacy`}>
            <a>Privacy Policy</a>
          </Link>
        </li>
        <li className={styles.link}>
          <Link href={`${process.env.NEXT_PUBLIC_WEBAPP_URL}/terms`}>
            <a>Terms</a>
          </Link>
        </li>
      </ul>
      <ul className={styles.legalContacts}>
        <li className={styles.name}>Elliot For Water Organisation LTD</li>
        <li className={styles.address}>1b Maud Road, London, UK, E10 5QF</li>
        <li className={styles.contact}>info@elliotforwater.com</li>
        <li className={styles.phone}>+33 970 449 871</li>
      </ul>
    </footer>
  )
}

export { Footer }
