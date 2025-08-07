import { NextPage } from 'next';

import ArticleManageModules from '@/modules/admin/article-manage';

const ArticleManage: NextPage = () => {
  return (
    <main>
      <ArticleManageModules />
    </main>
  );
};

export default ArticleManage;
