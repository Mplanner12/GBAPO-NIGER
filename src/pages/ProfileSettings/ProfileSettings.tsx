import { ProfileDataType, columns1 } from './columns1';
import { columns2 } from './columns2';
import { DataTable1 } from './data-table1';
import { DataTable2 } from './data-table2';
import DefaultLayout from '@/layout/DefaultLayout';
import { ItemData } from './ProfileData';
import { useAuth } from '../utils/AuthContext';

function getData(): ProfileDataType[] {
  // Fetch data from API.
  const data = ItemData;
  return data;
}

export default function ProfileSettings() {
  const data = getData();

  return (
    <DefaultLayout>
      <div className="w-full flex-col justify-center container mx-auto py-10">
        <DataTable1 columns={columns1} data={data} />
        <DataTable2 columns={columns2} data={data} />
      </div>
    </DefaultLayout>
  );
}
