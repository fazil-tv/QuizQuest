import React from 'react'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"




function DropDownOption() {
    return (
        
        <section className='flex justify-evenly items-center py-5 w-full'>
        <div className='px-0 py-4 w-1/3 mx-4'>
          <DropdownMenu >
            <DropdownMenuTrigger className='flex outline-none justify-between w-full shadow-md p-5 rounded-lg'>SELECT CATEGORY</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Select Category</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className='px-7 py-4 w-1/3 mx-4'>
          <DropdownMenu >
            <DropdownMenuTrigger className='flex outline-none justify-between w-full shadow-md p-5 rounded-lg'>SELECT LEVEL</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Select level</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className='px-7 py-4 w-1/3 mx-4'>
          <DropdownMenu>
            <DropdownMenuTrigger className='flex outline-none justify-between w-full shadow-md p-5 rounded-lg'>SELECT TYPE</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Select Type</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </section>
      
    )
}

export default DropDownOption