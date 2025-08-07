import { Metadata, NextPage } from 'next';

import ServiceModules from '@/modules/layanan';

export const metadata: Metadata = {
  title: 'Layanan',
  description:
    'Suro Marmer menyediakan layanan profesional untuk pasang dan poles marmer/granit, poles terazzo, pasang keramik/quadra, pasang furniture marmer, dan pasang tangga. Kami mengutamakan kualitas dan kepuasan pelanggan dengan hasil kerja yang rapi dan tahan lama. Hubungi kami untuk mendapatkan layanan terbaik dan hasil yang memuaskan untuk proyek rumah dan komersial Anda.',
};

const ServicePage: NextPage = () => {
  return (
    <main>
      <ServiceModules />
    </main>
  );
};

export default ServicePage;
