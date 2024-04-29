import React, { useState } from 'react';
import Type1 from './Type1';
import Type2 from './Type2';
import Type3 from './Type3';
import Type4 from './Type4';
import Type5 from './Type5';
const Cartypes = () => {
    const [page, setPage] = useState("type1");
    const[color,setcolor]=useState("xuv");
    
    const changePage = (val,color) => {
        setPage(val);
        setcolor(color);
    }

    return (
        <div className='h-full w-full  flex flex-col items-center'>
            <div className='h-10 w-80 flex-row justify-between '>
            <button className={`h-full w-20 bg-black text-center text-4xl font-extrabold border-4 border-black rounded-full ${color === "xuv" ? 'text-white' : 'text-zinc-500'} hover:bg-slate-50 hover:border-white`} onClick={() => changePage("type1","xuv")}>XUvs</button>
<button className={`h-full w-20 bg-black text-center text-4xl font-extrabold border-4 border-black rounded-full ${color === "sedan" ? 'text-white' : 'text-zinc-500'} hover:bg-black hover:border-white`} onClick={() => changePage("type2","sedan")}>Sedan</button>
<button className={`h-full w-20 bg-black text-center text-4xl font-extrabold border-4 border-black rounded-full ${color === "Hatchback" ? 'text-white' : 'text-zinc-500'} hover:bg-black  hover:border-white`} onClick={() => changePage("type3","Hatchback")}>Hatchback</button>
<button className={`h-full w-20 bg-black text-center text-4xl font-extrabold border-4 border-black rounded-full ${color === "SUV" ? 'text-white' : 'text-zinc-500'} hover:bg-black  hover:border-white`} onClick={() => changePage("type4","SUV")}>SUV</button>
<button className={`h-full w-20 bg-black text-center text-4xl font-extrabold border-4 border-black rounded-full ${color === "Large" ? 'text-white' : 'text-zinc-500'} hover:bg-white  hover:border-white`} onClick={() => changePage("type5","Large")}>Used Cars</button>



            </div>

            <div className='h-90 w-90'>
                {page === "type1" && <Type1 />}
                {page === "type2" && <Type2 />}
                {page === "type3" && <Type3 />}
                {page === "type4" && <Type4 />}
                {page === "type5" && <Type5 />}
            </div>
        </div>
    );
};

export default Cartypes;

