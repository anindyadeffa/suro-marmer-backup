import { Metadata, NextPage } from 'next';

import ArticleModules from '@/modules/article';
export const metadata: Metadata = {
  title: 'Artikel',
  description:
    'Jelajahi artikel kami yang membahas marmer, keramik, terrazzo, dan berbagai material lainnya. Temukan informasi terkini, tips perawatan, dan panduan pemilihan material yang tepat untuk rumah dan proyek Anda. Dapatkan wawasan mendalam tentang kelebihan, kekurangan, serta inspirasi desain menggunakan marmer, keramik, dan terrazzo.',
};

const ArticlePage: NextPage = () => {
  return (
    <main>
      <ArticleModules />
    </main>
  );
};

export default ArticlePage;
