'use client';

import { ColumnDef } from '@tanstack/react-table';
// import { MoreHorizontal } from 'lucide-react';
import { AlignJustify } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useNavigate } from 'react-router-dom';

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

export const columns1: ColumnDef<ProfileDataType>[] = [
  {
    accessorKey: 'FirstName',
    header: 'FirstName',
  },
  {
    accessorKey: 'MiddleName',
    header: 'MiddleName',
  },
  {
    accessorKey: 'LastName',
    header: 'LastName',
  },
  {
    accessorKey: 'ID',
    header: 'ID',
  },

  {
    accessorKey: 'Edit Profile',
    id: 'actions',
    header: ({ column }) => {
      const ProfileInfo = column.id;

      const navigate = useNavigate();

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="relative -left-[3.5rem] md:left-0 h-8 w-8 p-0 bg-basecolor"
            >
              <span className="sr-only">Open menu</span>
              <AlignJustify className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(ProfileInfo)}
            >
              <div className="flex justify-between">
                <img src="editicon.png" alt="" />
                <button
                  onClick={() => navigate('/ProfileSettings/updateprofile')}
                >
                  <p className="px-2">Update Profile</p>
                </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              {' '}
              <div className="flex justify-between">
                <img src="lockIcon.png" alt="" />
                <button
                  onClick={() => navigate('/ProfileSettings/changepassword')}
                >
                  <p className="px-2">Change Password</p>
                </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              {' '}
              <div className="flex justify-between">
                <img src="lockIcon.png" alt="" />
                <button
                  onClick={() => navigate('/ProfileSettings/resetpassword')}
                >
                  <p className="px-2">Reset Password</p>
                </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              {' '}
              <div className="flex justify-between">
                <img src="lockIcon.png" alt="" />
                <button
                  onClick={() => navigate('/ProfileSettings/setpassword')}
                >
                  <p className="px-2">Set Password</p>
                </button>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
