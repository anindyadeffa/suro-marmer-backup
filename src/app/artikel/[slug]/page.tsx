import { Metadata, NextPage } from 'next';

import ArticleDetailsModule from '@/modules/article/detail';
import {
  TAllArticleResponse,
  TSingleArticleResponse,
} from '@/modules/article/type';

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  try {
    const response = await fetch('https://api.suromarmer.id/articles');
    if (!response.ok) {
      throw new Error('Failed to fetch articles');
    }
    const data: TAllArticleResponse = await response.json();

    return data.data.articles.map(({ slug }) => ({ params: { slug } }));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching articles:', error);
    return [];
  }
}

export async function generateMetadata({
  params: { slug },
}: BlogPostPageProps): Promise<Metadata> {
  try {
    const response = await fetch(
      `https://api.suromarmer.id/articles/slug/${slug}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch article');
    }
    const data: TSingleArticleResponse = await response.json();
    const article = data.data.article;

    return {
      title: article.title,
      description: article.content.replace(/<[^>]*>|(\n)|(<li>)/g, ' '),
      openGraph: {
        images: [
          {
            url: article.thumbnail,
            width: 800,
            height: 600,
            alt: article.title,
          },
        ],
      },
      alternates: {
        canonical: `/artikel/${slug}`,
      },
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching article metadata:', error);
    return {
      title: 'Article Tidak Ditemukan',
      description: 'Artikel yang anda cari tidak ditemukan',
    };
  }
}

const ArticlePage: NextPage = () => {
  return (
    <main>
      <ArticleDetailsModule />
    </main>
  );
};

export default ArticlePage;
