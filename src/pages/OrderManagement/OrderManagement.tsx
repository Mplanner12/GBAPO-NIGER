import { OrderDataType, columns } from './columns';
import { DataTable } from './data-table';
import DefaultLayout from '@/layout/DefaultLayout';
import { UsersData } from './OrderData';
// import { useEffect } from 'react';

function getData(): OrderDataType[] {
  // Fetch data from API.
  const data = UsersData;
  return data;
}

// const token =
//   'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiQURNSU4iLCJuYW1lIjoiTXVzdGFwaGEgQWRtaW4iLCJzdWIiOiJtdXN0YXBoYUBqdGZpc2gubmciLCJpYXQiOjE3MTU4OTI0MzUsImV4cCI6MTcxNTg5NjAzNSwiaXNzIjoiSlRGSVNIIExURCJ9.X-DsVC7tERKRLZWmHeFxcxhYQB5A4O5naWzNbQkkGOs';

// const fetchData = async () => {
//   try {
//     const response = await fetch('http://185.4.176.195:8989/api/users', {
//       method: 'GET',
//       // mode: 'no-cors',
//       headers: {
//         'Content-Type': 'application/json',
//         // Authorization: 'Basic ' + btoa('mustapha@jtfish.ng:password'),
//         Authorization: 'Bearer ' + token,
//       },
//     });
//     const data = await response.text();
//     console.log(data);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// };

// // Call the function to fetch data
// useEffect(() => {
//   fetchData();
// }, []);

export default function OrderManagement() {
  const data = getData();

  return (
    <DefaultLayout>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </DefaultLayout>
  );
}
