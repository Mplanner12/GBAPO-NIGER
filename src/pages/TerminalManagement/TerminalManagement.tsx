import { TerminalDataType, columns } from './columns';
import { DataTable } from './data-table';
import DefaultLayout from '@/layout/DefaultLayout';
// import { ItemData } from './TerminalData';
import { useEffect, useState } from 'react';
import { useAuth } from '../utils/AuthContext';

// function getData(): TerminalDataType[] {
//   // Fetch data from API.
//   // const data = ItemData;
//   // return data;
// }

export default function TerminalManagement() {
  const [TerminalData, setTerminalData] = useState<TerminalDataType[]>([]);
  const { fetchWithAuth } = useAuth();

  const fetchTerminals = async () => {
    const response = await fetchWithAuth(
      'http://185.4.176.195:8989/api/terminals',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    const rawdata = await response.json();
    const data = rawdata.data;
    setTerminalData(data);
    // console.log(userData);
  };

  // const data = getData();

  useEffect(() => {
    fetchTerminals();
  }, []);
  return (
    <DefaultLayout>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={TerminalData} />
      </div>
    </DefaultLayout>
  );
}
