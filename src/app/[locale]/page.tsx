import { useTranslations } from 'next-intl';
import { headers } from 'next/headers';

export default function Home() {
  const t = useTranslations('Index');
  console.log('X-test header: ', headers().get('x-test'))
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-neutral-800 text-lg">{t('title')}</h1>
    </main>
  )
}
