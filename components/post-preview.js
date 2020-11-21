import DateFormatter from "../components/date-formatter";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function PostPreview({ title, date, excerpt, slug }) {
  return (
    <div className={styles.excerpt}>
      <h3 className='text-3xl mb-3 leading-snug'>
        <Link as={`/posts/${slug}`} href='/posts/[slug]'>
          <a className='hover:underline'>{title}</a>
        </Link>
      </h3>
      <p className='text-lg leading-relaxed mb-4'>{excerpt}</p>
      <Link as={`/posts/${slug}`} href='/posts/[slug]'>
        <a className='hover:underline'>+ ver tudo</a>
      </Link>
      <div className='text-lg mb-4'>
        postado em <DateFormatter dateString={date} />
      </div>
    </div>
  );
}
