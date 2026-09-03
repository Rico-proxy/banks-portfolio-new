import { Outlet } from 'react-router';
import { Footer } from '~/layout/footer';
import { Navbar } from '~/layout/navbar';

export default function BaseLayout() {
  return (
    <div className="min-h-screen bg-studio-bg text-sandstone">
      <Navbar />
      <main className="pb-24 pt-40 sm:pt-44">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
