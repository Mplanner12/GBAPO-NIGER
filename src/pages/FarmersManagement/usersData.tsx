import { useEffect, useState } from 'react';
import { useAuth } from '../utils/AuthContext';

type UsersDataType = {
  firstname: string;
  middlename: string;
  lastname: string;
  username: string;
  branch: string;
  role: string;
  id: string;
  phone: number;
  email: string;
  enabled: boolean;
  accountNonExpired: boolean;
  accountNonLocked: boolean;
  credentialsNonExpired: boolean;
  password: string;
  defaultPassword: boolean;
  createdBy: string;
  createdAt: string;
  modifiedBy: string;
  modifiedAt: string;
  authorities: string;
};

const fetchData = async (): Promise<UsersDataType> => {
  useEffect(() => {
    fetchData();
  }, []);
  const { fetchWithAuth } = useAuth();
  const response = await fetchWithAuth('http://185.4.176.195:8989/api/users', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const rawdata: any = await response.json();
  // console.log(rawdata.data);
  return rawdata;
};

export const UsersData: UsersDataType[] = [];

// export const UsersData: UsersDataType[] = [
//   {
//     FirstName: 'Mustapha',
//     MiddleName: 'Hussaini',
//     LastName: 'Shuaibu',
//     UserName: 'Planner',
//     Branch: 'kano',
//     Role: 'Admin',
//     ID: '728ed52f',
//     Phone: 8484657657,
//     Email: 'm@example.com',
//   },
//   {
//     FirstName: 'Mustapha',
//     MiddleName: 'Hussaini',
//     LastName: 'Shuaibu',
//     UserName: 'Planner',
//     Branch: 'kano',
//     Role: 'Admin',
//     ID: '728ed52f',
//     Phone: 8484657657,
//     Email: 'm@example.com',
//   },
//   {
//     FirstName: 'Mustapha',
//     MiddleName: 'Hussaini',
//     LastName: 'Shuaibu',
//     UserName: 'Planner',
//     Branch: 'kano',
//     Role: 'Admin',
//     ID: '728ed52f',
//     Phone: 8484657657,
//     Email: 'm@example.com',
//   },
//   {
//     FirstName: 'Mustapha',
//     MiddleName: 'Hussaini',
//     LastName: 'Shuaibu',
//     UserName: 'Planner',
//     Branch: 'kano',
//     Role: 'Admin',
//     ID: '728ed52f',
//     Phone: 8484657657,
//     Email: 'm@example.com',
//   },
//   {
//     FirstName: 'Mustapha',
//     MiddleName: 'Hussaini',
//     LastName: 'Shuaibu',
//     UserName: 'Planner',
//     Branch: 'kano',
//     Role: 'Admin',
//     ID: '728ed52f',
//     Phone: 8484657657,
//     Email: 'm@example.com',
//   },
//   {
//     FirstName: 'Mustapha',
//     MiddleName: 'Hussaini',
//     LastName: 'Shuaibu',
//     UserName: 'Planner',
//     Branch: 'kano',
//     Role: 'Admin',
//     ID: '728ed52f',
//     Phone: 8484657657,
//     Email: 'm@example.com',
//   },
//   {
//     FirstName: 'Mustapha',
//     MiddleName: 'Hussaini',
//     LastName: 'Shuaibu',
//     UserName: 'Planner',
//     Branch: 'kano',
//     Role: 'Admin',
//     ID: '728ed52f',
//     Phone: 8484657657,
//     Email: 'm@example.com',
//   },
//   {
//     FirstName: 'Mustapha',
//     MiddleName: 'Hussaini',
//     LastName: 'Shuaibu',
//     UserName: 'Planner',
//     Branch: 'kano',
//     Role: 'Admin',
//     ID: '728ed52f',
//     Phone: 8484657657,
//     Email: 'm@example.com',
//   },
//   {
//     FirstName: 'Mustapha',
//     MiddleName: 'Hussaini',
//     LastName: 'Shuaibu',
//     UserName: 'Planner',
//     Branch: 'kano',
//     Role: 'Admin',
//     ID: '728ed52f',
//     Phone: 8484657657,
//     Email: 'm@example.com',
//   },
//   {
//     FirstName: 'Mustapha',
//     MiddleName: 'Hussaini',
//     LastName: 'Shuaibu',
//     UserName: 'Planner',
//     Branch: 'kano',
//     Role: 'Admin',
//     ID: '728ed52f',
//     Phone: 8484657657,
//     Email: 'm@example.com',
//   },
//   {
//     FirstName: 'Mustapha',
//     MiddleName: 'Hussaini',
//     LastName: 'Shuaibu',
//     UserName: 'Planner',
//     Branch: 'kano',
//     Role: 'Admin',
//     ID: '728ed52f',
//     Phone: 8484657657,
//     Email: 'm@example.com',
//   },
//   {
//     FirstName: 'Mustapha',
//     MiddleName: 'Hussaini',
//     LastName: 'Shuaibu',
//     UserName: 'Planner',
//     Branch: 'kano',
//     Role: 'Admin',
//     ID: '728ed52f',
//     Phone: 8484657657,
//     Email: 'm@example.com',
//   },
//   {
//     FirstName: 'Mustapha',
//     MiddleName: 'Hussaini',
//     LastName: 'Shuaibu',
//     UserName: 'Planner',
//     Branch: 'kano',
//     Role: 'Admin',
//     ID: '728ed52f',
//     Phone: 8484657657,
//     Email: 'm@example.com',
//   },
//   {
//     FirstName: 'Mustapha',
//     MiddleName: 'Hussaini',
//     LastName: 'Shuaibu',
//     UserName: 'Planner',
//     Branch: 'kano',
//     Role: 'Admin',
//     ID: '728ed52f',
//     Phone: 8484657657,
//     Email: 'm@example.com',
//   },
//   {
//     FirstName: 'Mustapha',
//     MiddleName: 'Hussaini',
//     LastName: 'Shuaibu',
//     UserName: 'Planner',
//     Branch: 'kano',
//     Role: 'Admin',
//     ID: '728ed52f',
//     Phone: 8484657657,
//     Email: 'm@example.com',
//   },
//   {
//     FirstName: 'Mustapha',
//     MiddleName: 'Hussaini',
//     LastName: 'Shuaibu',
//     UserName: 'Planner',
//     Branch: 'kano',
//     Role: 'Admin',
//     ID: '728ed52f',
//     Phone: 8484657657,
//     Email: 'm@example.com',
//   },
//   {
//     FirstName: 'Mustapha',
//     MiddleName: 'Hussaini',
//     LastName: 'Shuaibu',
//     UserName: 'Planner',
//     Branch: 'kano',
//     Role: 'Admin',
//     ID: '728ed52f',
//     Phone: 8484657657,
//     Email: 'm@example.com',
//   },
//   {
//     FirstName: 'Mustapha',
//     MiddleName: 'Hussaini',
//     LastName: 'Shuaibu',
//     UserName: 'Planner',
//     Branch: 'kano',
//     Role: 'Admin',
//     ID: '728ed52f',
//     Phone: 8484657657,
//     Email: 'm@example.com',
//   },

//   // ...
// ];
