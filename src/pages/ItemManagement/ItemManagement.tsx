import { ItemDataType, columns } from './columns';
import { DataTable } from './data-table';
import DefaultLayout from '@/layout/DefaultLayout';
import { ItemData } from './ItemData';

function getData(): ItemDataType[] {
  // Fetch data from API.
  const data = ItemData;
  return data;
}

export default function ItemManagement() {
  const data = getData();

  return (
    <DefaultLayout>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </DefaultLayout>
  );
}
