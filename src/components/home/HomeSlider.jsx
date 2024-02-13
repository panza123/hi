import React from 'react'


export default function HomeSlider({datas}) {
  return (
    <>
    {/* {first image slide} */}
    <section className='w-full h-full '>
      
     <div className='w-full h-[300px] relative '>
      <img src={datas.img} alt="" 
      
      className='w-full h-full object-cover'









      
      />
      <div className='w-full h-full flex flex-col  absolute top-0 right-0  items-center
       text-gray-50  mt-[50px] '>

<p className='text-[18px]  text-center  text-gray-100/80 md:text-2xl lg:text-3xl '>{datas.text}</p>
<p className='text-gray-50 text-[16px] lg:pt-5 text-2xl'>{datas.title}</p>
<hr className='mt-2 boder border-1 border-gray-400 w-[200px] md:w-[300px] lg:w-[400px]' />

<h2 className='text-4xl  text-white lg:text-5xl pt-5'>{datas.name}</h2>
</div>
     </div>
 
      
    </section>


   
</>
  )
}
