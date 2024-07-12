import { UsersDataType, columns } from './columns';
import { DataTable } from './data-table';
import DefaultLayout from '@/layout/DefaultLayout';
import { useAuth } from '../utils/AuthContext';
import { useState, useEffect } from 'react';

export default function FarmersManagement() {
  const [userData, setUserData] = useState<UsersDataType[]>([]);
  const { fetchWithAuth } = useAuth();

  const fetchUsers = async () => {
    const response = await fetchWithAuth(
      'https://endpoint.kadunaelectrictms.com:8282/api/farmers',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    const rawdata = await response.json();
    const data = rawdata.data;
    setUserData(data);
    console.log(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <DefaultLayout>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={userData} />
      </div>
    </DefaultLayout>
  );
}
