'use client';

import { ColumnDef } from '@tanstack/react-table';
// import { MoreHorizontal } from 'lucide-react';

// import { Button } from '@/components/ui/button';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu';

// import { ArrowUpDown } from 'lucide-react';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type ProfileDataType = {
  FirstName: string;
  MiddleName: string;
  LastName: string;
  ID: string;
  PhoneNumber: number;
  Email: string;
  Role: string;
  UserName: string;
  Branch: string;
};

export const columns2: ColumnDef<ProfileDataType>[] = [
  {
    accessorKey: 'PhoneNumber',
    header: 'Phone Number',
  },
  {
    accessorKey: 'Role',
    header: 'Role',
  },
  {
    accessorKey: 'UserName',
    header: 'UserName',
  },
  {
    accessorKey: 'Branch',
    header: 'Branch',
  },
];