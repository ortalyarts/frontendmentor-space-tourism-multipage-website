import { Outlet } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <div className='main-container'>
            <Outlet />
        </div>
      </main>
    </>
  );
}

export default RootLayout;