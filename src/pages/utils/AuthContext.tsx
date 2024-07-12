import { createContext, useContext, useState, useEffect } from 'react';
import Loader from '../../common/Loader';
import { useLocation, useNavigate } from 'react-router-dom';

interface AuthContextValue {
  user: any;
  // Authentication
  setPassword: (userInfo: { password: string }) => Promise<void>;
  resetPassword: (userInfo: {
    userId: string;
    password: string;
  }) => Promise<void>;
  changePassword: (userInfo: {
    oldPassword: string;
    newPassword: string;
  }) => Promise<void>;
  logoutUser: () => void;
  handleLogin: (userInfo: {
    username: string;
    password: string;
  }) => Promise<void>;

  // Custom Fetch with Auth
  fetchWithAuth: (url: string, options?: {}) => Promise<Response>;
  fetchUsers: () => Promise<void>;

  // User Management
  AddNewUser: (userInfo: { data: string }) => Promise<void>;
  updateUser: (userInfo: { data: string }) => Promise<void>;
  deleteUser: (id: { id: string }) => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const [user] = useState<any | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // on resfresh or load
  useEffect(() => {
    checkUserStatus();
    deleteSession();
  }, []);

  // delete's user session after 1 hour
  const deleteSession = () => {
    setTimeout(() => {
      logoutUser();
      alert('Session Expired, Please Login Again');
    }, 3600000);
  };

  // check if user is logged in or not
  const checkUserStatus = async () => {
    if (localStorage.getItem('authToken') !== undefined || null) {
      navigate(location.pathname);
    } else {
      logoutUser();
    }

    setLoading(false);
  };

  const handleLogin = async (userInfo: {
    username: string;
    password: string;
  }) => {
    const payload = {
      username: userInfo.username,
      password: userInfo.password,
    };

    try {
      const response = await fetch(
        'https://endpoint.kadunaelectrictms.com:8282/api/auth',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        },
      );

      const data = await response.json();
      if (response.ok || data.meta.message === 'Successful') {
        localStorage.setItem('authToken', data.data.accessToken);
        localStorage.setItem('userDetails', data.data);
        // const userInfo = localStorage.getItem('userDetails');
        // console.log(userInfo);
        navigate('/');
        alert('Login successful!');
        // console.log(typeof localStorage.getItem('authToken'));
        // Redirect or update the UI as needed
        let user = data.data;
        return user;
      } else {
        navigate('/auth/welcomeBack');
        console.log('not authenticated');
        // notify2();
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Incorrect Username or Password');
    }
  };

  const logoutUser = () => {
    localStorage.removeItem('authToken');
    navigate('/auth/welcomeback'); // redirect the user to the login page after logging out
    console.log('Logged out');
  };

  // GETTING USERS
  const fetchUsers = async () => {
    const token = localStorage.getItem('authToken');
    console.log(typeof token);
    try {
      const response = await fetch('http://185.4.176.195:8989/api/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
          // Authorization: 'Basic' + btoa('mustapha@jtfish.ng:password'),
        },
      });
      const data = await response.json();
      // console.lg(data);o
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // USER ACTIONS
  const setPassword = async (userInfo: { password: string }) => {
    const payload = {
      password: userInfo.password,
    };

    try {
      const response = await fetch(
        'http://185.4.176.195:8989/api/auth/set-password',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        },
      );

      const data = await response.json();

      if (response.ok && data.message === 'Successful') {
        // let token = data.data.accessToken;
        // console.log(token);
        localStorage.setItem('authToken', data.data.accessToken);
        alert('password set successfully!');
        navigate('/');
        // console.log(typeof localStorage.getItem('authToken'));
        // Redirect or update the UI as needed
      } else {
        navigate('/auth/welcomeBack');
        alert('password not set');
        console.log('password not set');
        // notify2();
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const resetPassword = async (userInfo: {
    userId: string;
    password: string;
  }) => {
    const payload = {
      userId: userInfo.userId,
      password: userInfo.password,
    };

    try {
      const response = await fetch(
        'http://185.4.176.195:8989/api/auth/reset-password',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        },
      );

      const data = await response.json();

      if (response.ok && data.message === 'Successful') {
        // let token = data.data.accessToken;
        // console.log(token);
        localStorage.setItem('authToken', data.data.accessToken);
        alert('password has been reset!');
        navigate('/');
        // console.log(typeof localStorage.getItem('authToken'));
        // Redirect or update the UI as needed
      } else {
        navigate('/auth/welcomeBack');
        alert('password not reset');
        console.log('password not reset');
        // notify2();
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const changePassword = async (userInfo: {
    oldPassword: string;
    newPassword: string;
  }) => {
    const payload = {
      oldPassword: userInfo.oldPassword,
      newPassword: userInfo.newPassword,
    };

    try {
      const response = await fetch(
        'http://185.4.176.195:8989/api/auth/change-password',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        },
      );

      const data = await response.json();

      if (response.ok && data.message === 'Successful') {
        let token = data.data.accessToken;
        console.log(token);
        localStorage.setItem('authToken', data.data.accessToken);
        alert('password changed successfully!');
        navigate('/');
        console.log(typeof localStorage.getItem('authToken'));
        // Redirect or update the UI as needed
      } else {
        navigate('/auth/welcomeBack');
        alert('password not changed');
        console.log('password not changed');
        // notify2();
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // CUSTOM FETCH WITH AUTH
  const fetchWithAuth = async (url: string, { options = {} }: any) => {
    const token = localStorage.getItem('authToken');
    const headers = {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    };

    const response = await fetch(url, {
      ...options,
      headers,
    });

    return response;
  };

  // USER MANAGEMENT
  const AddNewUser = async (userInfo: { data: string }) => {
    setLoading(true);
    let token = localStorage.getItem('authToken');
    console.log(token);
    console.log(userInfo);
    try {
      const response = await fetch('http://185.4.176.195:8989/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(userInfo),
      });

      const data = await response.json();

      if (response.ok && data.message === 'User created successfully') {
        alert('User Added successfully');
        console.log(data.message);
        console.log(data.data);
      } else {
        // setError(data.message || 'User not Added');
        console.log('User not Added');
        alert(`User not Added: ${data.message}`);
      }
    } catch (error) {
      // setError('An error occurred. Please try again.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
    navigate('/UserManagement');
  };

  const updateUser = async (userInfo: { data: string }) => {
    const token = localStorage.getItem('authToken');
    console.log(token);
    try {
      const response = await fetch('http://185.4.176.195:8989/api/users', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        redirect: 'follow',
        body: JSON.stringify(userInfo),
      });

      const data = await response.json();

      if (response.ok && data.message === 'Successful') {
        alert('User updated successfully');
        console.log('User updated successfully');
        console.log(data.data);
      } else {
        // setError(data.message || 'User not updated');
        console.log('User not updated');
        alert(data.message);
      }
    } catch (error) {
      // setError('An error occurred. Please try again.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
    navigate('/UserManagement');
  };

  const deleteUser = async (id: { id: string }) => {
    const token = localStorage.getItem('authToken');
    console.log(token);
    try {
      const response = await fetch(
        `http://185.4.176.195:8989/api/users/${id.id}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          redirect: 'follow',
          // body: JSON.stringify(id),
        },
      );
      console.log(id);
      const data = await response.json();

      if (response.ok && data.message === 'Successful') {
        alert('User deleted successfully');
        console.log('User deleted successfully');
        navigate('/UserManagement');
      } else {
        // setError(data.message || 'User not updated');
        console.log('User not deleted');
      }
    } catch (error) {
      // setError('An error occurred. Please try again.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
    navigate('/UserManagement');
  };

  const contextData: AuthContextValue = {
    user,
    // Authentication
    setPassword,
    resetPassword,
    changePassword,
    handleLogin,
    logoutUser,
    // custom fetch with auth
    fetchWithAuth,
    fetchUsers,
    // user management
    AddNewUser,
    updateUser,
    deleteUser,
    // branch mana
  };
  return (
    <AuthContext.Provider value={contextData}>
      {loading ? (
        <div>
          <Loader />
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
