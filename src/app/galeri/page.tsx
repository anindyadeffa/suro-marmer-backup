import { Metadata, NextPage } from 'next';

import GaleryModules from '@/modules/galery';

export const metadata: Metadata = {
  title: 'Galeri',
  description:
    'Temukan koleksi gambar menakjubkan di galeri kami, menampilkan marmer, keramik, terrazzo, dan berbagai material lainnya. Inspirasi desain, tips perawatan, dan contoh aplikasi nyata dari material berkualitas tinggi untuk rumah dan proyek Anda. Jelajahi galeri kami untuk mendapatkan ide-ide kreatif dan solusi desain interior yang elegan.',
};

const GaleryPage: NextPage = () => {
  return (
    <main>
      <GaleryModules />
    </main>
  );
};

export default GaleryPage;
