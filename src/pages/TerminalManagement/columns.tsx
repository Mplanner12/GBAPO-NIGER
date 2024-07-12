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
import { useState } from 'react';
import { useAuth } from '../utils/AuthContext';

// import { ArrowUpDown } from 'lucide-react';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type TerminalDataType = {
  branch: string;
  serialNumber: string;
  imei: string;
};

export const columns: ColumnDef<TerminalDataType>[] = [
  {
    accessorKey: 'branch',
    header: 'Branch Name',
  },
  {
    accessorKey: 'serialNumber',
    header: 'Serial Number',
  },
  {
    accessorKey: 'imei',
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
    header: 'IMEI',
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const TerminalData = row.original;
      const terminalSerialNo = TerminalData.serialNumber;
      const [serialNo, setSerialNo] = useState(terminalSerialNo);

      const { DeleteTerminal } = useAuth();

      function handleDeleteTerminal() {
        setSerialNo(terminalSerialNo);
        DeleteTerminal({ serialNumber: serialNo });
        console.log(serialNo);
      }

      const navigate = useNavigate();

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
              onClick={() => navigator.clipboard.writeText(TerminalData.imei)}
            >
              <div className="flex justify-between">
                <div className=" rounded-s-sm">
                  <img src="addIcon.png" alt="" />
                </div>
                <button
                  onClick={() =>
                    navigate('/TerminalManagement/activateterminal')
                  }
                >
                  <p className="px-2">Activate Terminal</p>
                </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            {/* <DropdownMenuItem>View customer</DropdownMenuItem> */}
            <DropdownMenuItem>
              {' '}
              <button onClick={handleDeleteTerminal}>
                <div className="flex justify-between">
                  <img src="deleteicon.png" alt="" />
                  <p className="px-2">Delete Terminal</p>
                </div>
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
