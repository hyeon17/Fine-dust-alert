import Layout from '@/components/Layout';
import AllLocation from '@/pages/AllLocation';
import Favorite from '@/pages/Favorite';
import MyLocation from '@/pages/MyLocation';
import NotFound from '@/pages/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MyLocation />} />
          <Route path="/all" element={<AllLocation />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
