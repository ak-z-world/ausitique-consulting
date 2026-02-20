import React from 'react'
import { incomeResidentIndividualsAgedMoreThan80Years } from "@/data";


const ITRResidentIndividualsAgedMoreThan80 = () => {
  return (
     <section className=" general-sans bg-white px-5 py-4 sm:px-8 sm:py-7 md:px-10 md:py-8 lg:px-14  lg:py-10 xl:px-16 ">
     <p className="text-2xl sm:text-3xl font-Bricolage_Grotesque md:text-4xl lg:text-5xl font-semibold">
       Resident Individuals Aged More Than 80 Years
     </p>
     <p className='text-lg font-medium mt-2'>
       Taxpayers aged above 80 years will enjoy a basic exemption limit of Rs. 5 lakh, making income up to Rs. 5 lakh exempt from tax
     </p>

     <section className="bg-white text-black general-sans">
       {/* Heading */}
       <div className="will-change-transform translate-z-0">
         <p className="text-4xl md:text-5xl font-semibold leading-tight">
           {incomeResidentIndividualsAgedMoreThan80Years.tableTitle}
         </p>
         {/* <p className="text-4xl md:text-5xl">You May Need to File</p> */}
       </div>

       {/* Table */}

       <div className="overflow-x-auto">
         <table className="border border-black  mt-10 w-full text-left rounded-lg overflow-hidden will-change-transform translate-z-0">
           <thead className="bg-white/10">
             {/* Dynamic Headers */}
             <tr>
               {incomeResidentIndividualsAgedMoreThan80Years.tableHeadData.map(
                 (heading, i) => (
                   <th key={i} className="border border-black p-4 px-6 md:px-8">
                     {heading}
                   </th>
                 )
               )}
             </tr>
           </thead>

           <tbody>
             {incomeResidentIndividualsAgedMoreThan80Years.tableBodyData.map(
               (row, rowIndex) => (
                 <tr
                   key={rowIndex}
                   className="hover:bg-white/10 transition-colors duration-300 will-change-transform translate-z-0"
                 >
                   {Object.values(row).map((cell, cellIndex) => (
                     <td
                       key={cellIndex}
                       className="border border-black p-4 px-6 md:px-12"
                     >
                       {cell}
                     </td>
                   ))}
                 </tr>
               )
             )}
           </tbody>
         </table>
       </div>
     </section>

     <p className='text-base sm:text-lg md:text-xl mt-5'>Section 87A provides a rebate for individual taxpayers whose income is below a specified threshold. while under the old regime, it is Rs. 5 lakh. If your income falls within these limits, your tax liability will be reduced to zero.
     </p>
   </section>
  )
}

export default ITRResidentIndividualsAgedMoreThan80