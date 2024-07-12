'use client';
import { Link } from 'react-router-dom';
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
import { useState } from 'react';
import { useAuth } from '../utils/AuthContext';

// import { ArrowUpDown } from 'lucide-react';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type BranchDataType = {
  BranchName: string;
  id: string;
  Address: string;
};

export const columns: ColumnDef<BranchDataType>[] = [
  {
    accessorKey: 'name',
    header: 'Branch Name',
  },
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'address',
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
    header: 'Address',
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const BranchData = row.original;
      const branchid = BranchData.id;
      const [id, setId] = useState(branchid);

      const { DeleteBranch } = useAuth();

      function handleDeleteBranch() {
        setId(branchid);
        DeleteBranch({ id: id });
        console.log(id);
      }

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0 bg-basecolor">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(BranchData.Address)}
            >
              <div className="flex justify-between">
                <img src="editicon.png" alt="" />
                <Link to={`/BranchManagement/updatebranch/${id}`}>
                  <button>
                    <p className="px-2">Update Branch</p>
                  </button>
                </Link>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            {/* <DropdownMenuItem>View customer</DropdownMenuItem> */}
            <DropdownMenuItem>
              {' '}
              <div className="flex justify-between">
                <img src="deleteicon.png" alt="" />
                <button onClick={handleDeleteBranch}>
                  <p className="px-2">Delete Branch</p>
                </button>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
