'use client';

import { ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';
import { FaRegUserCircle } from 'react-icons/fa';

import { FaUserEdit } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type UsersDataType = {
  name: string;
  // middlename: string;
  // lastname: string;
  phone: number;
  mapped: boolean;
  // email: string;
  captured: boolean;
  Guarantored: boolean;
  bvn: Number;
  nin: string;
  // accountNonLocked: boolean;
  // credentialsNonExpired: boolean;
  // password: string;
  // defaultPassword: boolean;
  // createdBy: string;
  // createdAt: string;
  // modifiedBy: string;/
  // modifiedAt: string;
  // authorities: string;
};

export const columns: ColumnDef<UsersDataType>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  // {
  //   accessorKey: 'email',
  //   header: ({ column }) => {
  //     return (
  //       <Button
  //         variant="ghost"
  //         onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
  //       >
  //         Email
  //         <ArrowUpDown className="ml-2 h-4 w-4" />
  //       </Button>
  //     );
  //   },
  // },
  // {
  //   accessorKey: 'middlename',
  //   header: 'MiddleName',
  // },
  // {
  //   accessorKey: 'lastname',
  //   header: 'LastName',
  // },
  {
    accessorKey: 'clusterHead',
    header: 'Cluster Head',
  },
  {
    accessorKey: 'mapped',
    header: 'Mapped',
  },
  // {
  //   accessorKey: 'bvn',
  //   header: 'BVN',
  // },
  {
    accessorKey: 'nin',
    header: 'NIN',
  },
  {
    accessorKey: 'phone',
    header: 'Phone',
  },
  {
    accessorKey: 'captured',
    header: 'Captured',
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const userData = row.original;
      const userNIN = userData.nin;
      console.log(userNIN);
      const navigate = useNavigate();
      // const { deleteUser } = useAuth();

      // function handleDeleteUser() {
      //   deleteUser({ id: userNIN });
      //   console.log(userNIN);
      // }
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0 bg-emerald-600">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-emerald-600">
            <DropdownMenuLabel className="text-white">
              Actions
            </DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(userNIN)}
            >
              <button
                onClick={() => navigate(`/FarmersManagement/farmer/${userNIN}`)}
              >
                <div className="w-full flex gap-x-2 justify-between">
                  <FaRegUserCircle />
                  <p>view Farmer</p>
                </div>
              </button>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            {/* <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(userNIN)}
            >
              <button
                onClick={() =>
                  navigate(`/FarmersManagement/updateFarmer/${userNIN}`)
                }
              >
                <div className="w-full flex gap-x-2 justify-between">
                  <FaUserEdit />
                  <p>Update Info</p>
                </div>
              </button>
            </DropdownMenuItem> */}
            {/* <DropdownMenuSeparator /> */}
            {/* <DropdownMenuItem>View customer</DropdownMenuItem> */}
            {/* <DropdownMenuItem>
              {' '}
              <button onClick={handleDeleteUser}>
                <div className="w-full flex gap-x-2 justify-between">
                  <MdDeleteForever />
                  <p>Delete User</p>
                </div>
              </button>
            </DropdownMenuItem> */}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
