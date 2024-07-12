'use client';

import { ColumnDef } from '@tanstack/react-table';
// import { MoreHorizontal } from 'lucide-react';

import { Button } from '@/components/ui/button';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu';

import { ArrowUpDown } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type OrderDataType = {
  Phone: number;
  Delivery: boolean;
  Recapname: string;
  Branch: string;
  Recapphone: number;
  Recapaddress: string;
  RecapLandmark: string;
  ItemID: string;
  Quantity: number;
};

export const columns: ColumnDef<OrderDataType>[] = [
  {
    accessorKey: 'Phone',
    header: 'Phone',
  },
  {
    accessorKey: 'Delivery',
    header: 'Delivery',
  },
  {
    accessorKey: 'Recapname',
    header: 'Recipient name',
  },
  {
    accessorKey: 'Branch',
    header: 'Branch',
  },
  {
    accessorKey: 'Recapphone',
    header: 'Recipient phone',
  },
  {
    accessorKey: 'Recapaddress',
    header: 'Recipient address',
  },
  {
    accessorKey: 'RecapLandmark',
    header: 'Recipient Landmark',
  },
  {
    accessorKey: 'ItemID',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Iteem ID
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'Quantity',
    header: 'Quantity',
  },
  // {
  //   id: 'actions',
  //   cell: ({ row }) => {
  //     const oderInfo = row.original;

  //     const navigate = useNavigate();

  //     return (
  //       <DropdownMenu>
  //         <DropdownMenuTrigger asChild>
  //           <Button variant="ghost" className="h-8 w-8 p-0 bg-basecolor">
  //             <span className="sr-only">Open menu</span>
  //             <MoreHorizontal className="h-4 w-4" />
  //           </Button>
  //         </DropdownMenuTrigger>
  //         <DropdownMenuContent align="end">
  //           <DropdownMenuLabel>Actions</DropdownMenuLabel>
  //           <DropdownMenuItem
  //             onClick={() => navigator.clipboard.writeText(userInfo.ID)}
  //           >
  //             <div className="flex justify-between">
  //               <img src="editicon.png" alt="" />
  //               <button onClick={() => navigate('/UserManagement/updateuser')}>
  //                 <p>Update User</p>
  //               </button>
  //             </div>
  //           </DropdownMenuItem>
  //           <DropdownMenuSeparator />
  //           {/* <DropdownMenuItem>View customer</DropdownMenuItem> */}
  //           <DropdownMenuItem>
  //             {' '}
  //             <div className="flex justify-between">
  //               <img src="deleteicon.png" alt="" />
  //               <p>Delete User</p>
  //             </div>
  //           </DropdownMenuItem>
  //         </DropdownMenuContent>
  //       </DropdownMenu>
  //     );
  //   },
  // },
];
