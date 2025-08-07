import DashboardModules from '@/modules/admin/dashboard';
import { NextPage } from 'next';

const AdminPage: NextPage = () => {
  return (
    <main>
      <DashboardModules />
    </main>
  );
};

export default AdminPage;
