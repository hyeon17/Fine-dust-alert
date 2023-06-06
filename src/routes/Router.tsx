import Layout from '@/components/Layout';
import Location from '@/pages/Location';
import Favorite from '@/pages/Favorite';
import Map from '@/pages/Map';
import NotFound from '@/pages/NotFound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Location />} />
          <Route path="/map" element={<Map />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
