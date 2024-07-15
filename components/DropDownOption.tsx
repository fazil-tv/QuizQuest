
import React, { useEffect, useState } from 'react'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import useQuiz from '@/app/store';
import { ChevronDown } from 'lucide-react';
import { Skeleton } from "@/components/ui/skeleton"




type Categorytype ={
    name:string;
    id:number
}

const type = ["boolean","multiple"]
const level = ["easy","medium","hard"]

function DropDownOption() {

    const [categorys,setcategorys] = useState<Categorytype[]>([])
    const addCategory = useQuiz(state => state.addCategory); 
    const config = useQuiz(state => state.config); 
    let [loading,setLoading] =useState(false)


    const addLevel  = useQuiz(state => state.addLevel);
    const addType = useQuiz(state=>state.addType);
 

    useEffect(()=>{
      setLoading(false)
        async function fetchcategory() {
          const response = await fetch("https://opentdb.com/api_category.php");
          const data = await response.json();
          const { trivia_categories } = data;
          console.log(trivia_categories, "tri");

          
            setcategorys([...trivia_categories])

            setLoading(false)
        }

      

        fetchcategory()
    },[])


    







    return (
        
        <section className='flex justify-evenly items-center py-5 w-full'>
        <div className='px-0 py-4 w-1/3 mx-4'>
          <DropdownMenu >
            <DropdownMenuTrigger className='flex outline-none justify-between w-full shadow-md p-5 rounded-lg'>{config.category.name?config.category.name:"CATEGORY"}<ChevronDown/></DropdownMenuTrigger>

            <DropdownMenuContent>
              <DropdownMenuLabel>Select Category</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {categorys.map(category=>  <DropdownMenuItem key={category.name} onClick={()=>addCategory(category.id,category.name)}>{!loading?category.name:              <Skeleton className="h-[30px] rounded-full w-full" />
   }</DropdownMenuItem>
)}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className='px-7 py-4 w-1/3 mx-4'>
          <DropdownMenu >
            <DropdownMenuTrigger className='flex outline-none justify-between w-full shadow-md p-5 rounded-lg'>{config.level?config.level:"LEVEL"}<ChevronDown/></DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Select level</DropdownMenuLabel>
              <DropdownMenuSeparator />
            {level.map(e=>              <DropdownMenuItem key={e} onClick={()=>addLevel(e)}>{e}</DropdownMenuItem>
)}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className='px-7 py-4 w-1/3 mx-4'>
          <DropdownMenu>
            <DropdownMenuTrigger className='flex outline-none justify-between w-full shadow-md p-5 rounded-lg'>{config.type?config.type:"TYPE"}<ChevronDown/></DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Select Type</DropdownMenuLabel>
              <DropdownMenuSeparator />
              
              {type.map(e=>              <DropdownMenuItem key={e} onClick={()=>addType(e)}>{e}</DropdownMenuItem>
)}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </section>
      
    )
}

export default DropDownOption