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

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type ItemDataType = {
  Imagekey: string;
  ImageUrl: string;
  Description: string;
  ItemSize: string;
  ItemType: string;
  Amount: string;
  Stock: number;
  Branch: string;
};

export const columns: ColumnDef<ItemDataType>[] = [
  {
    accessorKey: 'Imagekey',
    header: 'Imagekey',
  },
  {
    accessorKey: 'ImageUrl',
    header: 'imageUrl',
  },
  {
    accessorKey: 'Description',
    header: 'Description',
  },
  {
    accessorKey: 'ItemSize',
    header: 'ItemSize',
  },
  {
    accessorKey: 'ItemType',
    header: 'ItemType',
  },
  {
    accessorKey: 'Amount',
    // header: ({ column }) => {
    //   return (
    //     <Button
    //       variant="ghost"
    //       onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
    //     >
    //       Amount
    //       <ArrowUpDown className="ml-2 h-4 w-4" />
    //     </Button>
    //   );
    // },
    header: 'Amount',
  },
  {
    accessorKey: 'Stock',
    header: 'Stock',
  },
  {
    accessorKey: 'Branch',
    header: 'Branch',
  },
  // {
  //   accessorKey: 'Email',
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
  {
    id: 'actions',
    cell: ({ row }) => {
      const ItemInfo = row.original;

      const navigate = useNavigate();

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-8 w-8 p-0 bg-emerald-600 text-white"
            >
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="bg-emerald-600 text-white"
          >
            <DropdownMenuLabel className="text-black">
              Actions
            </DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(ItemInfo.Amount)}
            >
              <div className="flex justify-between">
                <img className="" src="addIcon.png" alt="" />
                <button
                  onClick={() => {
                    navigate('/ItemManagement/addstock');
                  }}
                >
                  <p className="px-2">Add stock</p>
                </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="text-white bg-white" />
            {/* <DropdownMenuItem>View customer</DropdownMenuItem> */}
            <DropdownMenuItem>
              {' '}
              <div className="flex justify-between">
                <img src="deleteicon.png" alt="" />
                <p className="px-2">Delete Item</p>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
