import { BranchDataType, columns } from './columns';
import { DataTable } from './data-table';
import DefaultLayout from '@/layout/DefaultLayout';
// import { ItemData } from './BranchData';
import { useAuth } from '../utils/AuthContext';
import { useEffect, useState } from 'react';

export default function BranchManagement() {
  const [branchData, setBranchData] = useState<BranchDataType[]>([]);
  const { fetchWithAuth } = useAuth();

  const fetchBranches = async () => {
    const response = await fetchWithAuth(
      'http://185.4.176.195:8989/api/branches',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    const rawdata = await response.json();
    const data = rawdata.data;
    setBranchData(data);
    // console.log(userData);
  };

  useEffect(() => {
    fetchBranches();
  }, []);
  return (
    <DefaultLayout>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={branchData} />
      </div>
    </DefaultLayout>
  );
}
