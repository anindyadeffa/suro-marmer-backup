import { MetadataRoute } from 'next';

import { TAllArticleResponse } from '@/modules/article/type';
import { TServicesResponse } from '@/modules/layanan/type';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articleRensponse = await fetch(
    'https://api.suromarmer.id/articles?limit=1000'
  );

  const servicesResponse = await fetch('https://api.suromarmer.id/galleries');

  const dataArticle: TAllArticleResponse = await articleRensponse.json();
  const dataServices: TServicesResponse = await servicesResponse.json();

  const servicesEntries: MetadataRoute.Sitemap =
    dataServices.data.galleries.map(({ type }) => ({
      url: `https://suromarmer.id/galeri/${type}`,
      lastModified: new Date(),
      priority: 0.7,
    }));

  const postEntries: MetadataRoute.Sitemap = dataArticle.data.articles.map(
    ({ slug }) => ({
      url: `https://suromarmer.id/artikel/${slug}`,
      lastModified: new Date(),
      priority: 0.8,
    })
  );

  return [
    {
      url: `https://suromarmer.id`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `https://suromarmer.id/artikel`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `https://suromarmer.id/galeri`,
      lastModified: new Date(),
      priority: 0.7,
    },
    ...servicesEntries,
    ...postEntries,
  ];
}
