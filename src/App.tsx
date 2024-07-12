import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
// import SignIn from './pages/Authentication/SignIn';
// import SignUp from './pages/Authentication/SignUp';
import NotFoundPage from './components/Notfoundpage';
import FarmersManagement from './pages/FarmersManagement/FarmersManagement';
import OrderManagement from './pages/OrderManagement/OrderManagement';
import ItemManagement from './pages/ItemManagement/ItemManagement';
import BranchManagement from './pages/BranchManagement/BranchManagement';
import TerminalManagement from './pages/TerminalManagement/TerminalManagement';
import ProfileSettings from './pages/ProfileSettings/ProfileSettings';
import { WelcomeBack } from './pages/Authentication/WelcomeBack';
import { AddFarmer } from './pages/FarmersManagement/AddFarmer';
import { UpdateFarmer } from './pages/FarmersManagement/UpdateFarmer';
import { SetPassword } from './pages/ProfileSettings/SetPassword';
import { ResetPassword } from './pages/ProfileSettings/ResetPassword';
import { ChangePassword } from './pages/ProfileSettings/ChangePassword';
import { AddStock } from './pages/ItemManagement/AddStock';
import Capture from './components/Capture';
import Farmer from './pages/Farmer/Farmer';

function App() {
  // const [backendData, setBackendData] = useState<any>([{}]);

  // useEffect(() => {
  //   const response = fetch('/api');
  //   const data = response.then((response) => response.json());
  //   setBackendData({ data });
  // }, []);
  // console.log(backendData);

  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  // Scroll to top when the route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Simulate loading time and set loading state to false after 1 second
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        {/* Routes for different components */}
        <Route
          path="/ItemManagement"
          element={
            <>
              <PageTitle title="Item Management | GBAPO NIGER APP" />
              <ItemManagement />
            </>
          }
        />
        <Route
          path="/ItemManagement/addstock"
          element={
            <>
              <PageTitle title="Add Stock | GBAPO NIGER APP" />
              <AddStock />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <PageTitle title="Farmers Management | GBAPO NIGER APP" />
              <FarmersManagement />
            </>
          }
        />
        <Route
          path="/FarmersManagement"
          element={
            <>
              <PageTitle title="Farmers Management | GBAPO NIGER APP" />
              <FarmersManagement />
            </>
          }
        />
        <Route
          path="/FarmersManagement/addFarmer"
          element={
            <>
              <PageTitle title="Add User | GBAPO NIGER APP" />
              <AddFarmer />
            </>
          }
        />
        <Route
          path="/FarmersManagement/updateFarmer/:userNIN"
          element={
            <>
              <PageTitle title="Update Farmer | GBAPO NIGER APP" />
              <UpdateFarmer />
            </>
          }
        />
        <Route
          path="/FarmersManagement/Farmer/:userNIN"
          element={
            <>
              <PageTitle title=" Farmer Profile | GBAPO NIGER APP" />
              <Farmer />
            </>
          }
        />
        <Route
          path="/Capture"
          element={
            <>
              <PageTitle title="Capture Farmer | GBAPO NIGER APP" />
              <Capture />
            </>
          }
        />
        {/* <Route
          index
          // path="/OrderManagement"
          element={
            <>
              <PageTitle title="Order Management | GBAPO NIGER APP" />
              <OrderManagement />
            </>
          }
        />
        <Route
          path="/BranchManagement"
          element={
            <>
              <PageTitle title="Branch Management | GBAPO NIGER APP" />
              <BranchManagement />
            </>
          }
        />
        <Route
          path="/BranchManagement/addbranch"
          element={
            <>
              <PageTitle title="Update Branch | GBAPO NIGER APP" />
              <AddBranch />
            </>
          }
        />
        <Route
          path="/BranchManagement/updatebranch/:id"
          element={
            <>
              <PageTitle title="Branch Management | GBAPO NIGER APP" />
              <UpdateBranch />
            </>
          }
        />
        <Route
          path="/TerminalManagement"
          element={
            <>
              <PageTitle title="Terminal Management | GBAPO NIGER APP" />
              <TerminalManagement />
            </>
          }
        />
        <Route
          path="/TerminalManagement/activateterminal"
          element={
            <>
              <PageTitle title="Activate Terminal | GBAPO NIGER APP" />
              <ActivateTerminal />
            </>
          }
        />
        <Route
          path="/TerminalManagement/addterminal"
          element={
            <>
              <PageTitle title="Activate Terminal | GBAPO NIGER APP" />
              <AddTerminal />
            </>
          }
        />
        <Route
          path="/ProfileSettings"
          element={
            <>
              <PageTitle title="Profile Settings | GBAPO NIGER APP" />
              <ProfileSettings />
            </>
          }
        /> */}
        {/* <Route
          path="/ProfileSettings/updateprofile"
          element={
            <>
              <PageTitle title="Update Profile | GBAPO NIGER APP" />
              <ProfileSettings />
            </>
          }
        /> */}
        <Route
          path="/ProfileSettings/changepassword"
          element={
            <>
              <PageTitle title="Change Password | GBAPO NIGER APP" />
              <ChangePassword />
            </>
          }
        />
        <Route
          path="/ProfileSettings/setpassword"
          element={
            <>
              <PageTitle title="Set Password | GBAPO NIGER APP" />
              <SetPassword />
            </>
          }
        />
        <Route
          path="/ProfileSettings/resetpassword"
          element={
            <>
              <PageTitle title="Reset Password | GBAPO NIGER APP" />
              <ResetPassword />
            </>
          }
        />
        {/* <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Signin | GBAPO NIGER APP" />
              <SignIn />
            </>
          }
        /> */}
        <Route
          path="/auth/welcomeBack"
          element={
            <>
              <PageTitle title="Welcome Back | GBAPO NIGER APP" />
              <WelcomeBack />
            </>
          }
        />
        {/* <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Signup | GBAPO NIGER APP" />
              <SignUp />
            </>
          }
        /> */}
        {/* 404 Route */}
        <Route
          path="*"
          element={
            <>
              <PageTitle title="404 | GBAPO NIGER APP" />
              <NotFoundPage />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
