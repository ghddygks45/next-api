import ShortLinkForm from '@/components/ShortLinkForm';
import styles from '@/styles/ShortLinkCreatePage.module.css';
import Head from 'next/head';

export default function ShortLinkCreatePage() {
  return (
    <>
      <Head>
        <title>새 URL 추가 - Shortit</title>
      </Head>
      <div className={styles.page}>
        <h1 className={styles.title}>새 URL 추가</h1>
        <ShortLinkForm />
      </div>
    </>
  );
}
