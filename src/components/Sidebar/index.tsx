import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
// import { MdOutlineTerminal } from 'react-icons/md';
// import { FaCodeBranch } from 'react-icons/fa6';
// import { PiUserBold } from 'react-icons/pi';
import { GiFarmer } from 'react-icons/gi';
// import { TbCapture } from 'react-icons/tb';
import { HiLogout } from 'react-icons/hi';
import { MdCancel } from 'react-icons/md';

import { useAuth } from '../../pages/utils/AuthContext';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const { logoutUser } = useAuth();
  // const { user } = useAuth();
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'false',
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-full md:w-[20.5rem] shadow-2xl flex-col overflow-y-hidden bg-whiten duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <NavLink to="/">
          <div
            id="nav"
            className="w-full px-[1rem] md:px-0 flex justify-center items-center gap-2.5 relative top-[2rem] mt-[3.5rem] md:mt-[-4rem] lg:mt-[-2.5rem] left-[3.25rem] md:left-[1.5rem]"
          >
            <img
              className="w-[23rem] md:w-[14rem]"
              src="/GBAPO Logo.png"
              alt="Logo"
              width={100}
            />
          </div>
        </NavLink>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="text-black block lg:hidden"
        >
          <MdCancel
            size={50}
            color="black"
            className="fill-current relative -top-[8.25rem] left-[0.5rem]"
          />
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          <div>
            <ul className="h-full w-full mb-6 flex flex-col gap-1.5 ">
              <div>
                <li className="mb-[0.85rem]">
                  <NavLink
                    to="/FarmersManagement"
                    className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-white active:text-white hover:text-white duration-300 ease-in-out hover:bg-black dark:hover:bg-meta-4 ${
                      pathname.includes('/') &&
                      'bg-emerald-700 dark:bg-meta-4 text-white'
                    }`}
                  >
                    <div className="text-[3.5rem] md:text-2xl">
                      <GiFarmer />
                    </div>
                    Farmers
                  </NavLink>
                </li>

                <div className="mt-[18.5rem] relative md:mt-[8.5rem] lg:top-0 lg:mt-[16.5rem]">
                  <li
                    className="mb-[0.85rem]"
                    onClick={() => {
                      logoutUser();
                    }}
                  >
                    <NavLink
                      to="/"
                      className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-black hover:text-white duration-300 ease-in-out hover:bg-emerald-700 dark:hover:bg-meta-4`}
                    >
                      <div className="text-[3.5rem] md:text-2xl">
                        <HiLogout />
                      </div>
                      <p className="">Log Out</p>
                    </NavLink>
                  </li>
                </div>
              </div>
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
