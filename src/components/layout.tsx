// ejemplo: src/components/Layout.tsx
import { Outlet } from 'react-router-dom';
import Footer from './footer';

const Layout = () => (
  <>
    <main>
      <Outlet />
    </main>
  </>
);
export default Layout;
