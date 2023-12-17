import React, { useState } from 'react'
import Dishes from './Dishes';
import NonVeg from './non-veg.png'
import Zomato from './zomato.png'
import Veg from './veg.png'
import Swiggy from './swiggy.png'

function Drawer() {
    const [menuData, setMenuData] = useState(Dishes);
    const filterItem = (category) => {
        const updatedList = Dishes.filter((currElem) => {
            return currElem.type === category;
        });
        setMenuData(updatedList);
    }
    return (
        <>
            <div className="flex flex-row">
                <div className={`float-left w-24 md:w-32 duration-300 h-screen bg-[#0a0a22] sticky  top-0 z-50`}>
                    <ul className='pt-6 text-center'>
                        <h1 className="text-center font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-[#3CA55C] to-[#B5AC49] cursor-pointer animate-bounce" >Menu</h1>
                        <li><button className="text-gray-800 rounded-lg dark:text-gray-200 hover:border-b-2 hover:border-blue-500 mx-1.5 hover:bg-[#1D232A] md:p-2 md:my-3 p-2 my-1 sm:mx-6" onClick={() => filterItem("Make Your Momo")}>Make your Momos</button></li>
                        <li><button className="text-gray-800 rounded-lg dark:text-gray-200 hover:border-b-2 hover:border-blue-500 mx-1.5 hover:bg-[#1D232A] md:p-2 md:my-3 p-2 my-1 sm:mx-6" onClick={() => filterItem("Momos")}>Momos</button></li>
                        <li><button className="text-gray-800 rounded-lg dark:text-gray-200 hover:border-b-2 hover:border-blue-500 mx-1.5 hover:bg-[#1D232A] md:p-2 md:my-3 p-2 my-1 sm:mx-6" onClick={() => filterItem("Chineese")}>Chineese</button></li>
                        <li><button className="text-gray-800 rounded-lg dark:text-gray-200 hover:border-b-2 hover:border-blue-500 mx-1.5 hover:bg-[#1D232A] md:p-2 md:my-3 p-2 my-1 sm:mx-6" onClick={() => filterItem("Rolls")}>Rolls</button></li>
                        <li><button className="text-gray-800 rounded-lg dark:text-gray-200 hover:border-b-2 hover:border-blue-500 mx-1.5 hover:bg-[#1D232A] md:p-2 md:my-3 p-2 my-1 sm:mx-6" onClick={() => filterItem("Burgers")}>Burgers</button></li>
                        <li><button className="text-gray-800 rounded-lg dark:text-gray-200 hover:border-b-2 hover:border-blue-500 mx-1.5 hover:bg-[#1D232A] md:p-2 md:my-3 p-2 my-1 sm:mx-6" onClick={() => filterItem("Sides")}>Sides</button></li>
                        <li><button className="text-gray-800 rounded-lg dark:text-gray-200 hover:border-b-2 hover:border-blue-500 mx-1.5 hover:bg-[#1D232A] md:p-2 md:my-3 p-2 my-1 sm:mx-6" onClick={() => filterItem("Beverages")}>Beverages</button></li>
                        <li><button className="text-gray-800 rounded-lg dark:text-gray-200 hover:border-b-2 hover:border-blue-500 mx-1.5 hover:bg-[#1D232A] md:p-2 md:my-3 p-2 my-1 sm:mx-6" onClick={() => filterItem("Ramen")}>Ramen</button></li>
                        <li><button className="text-gray-800 rounded-lg dark:text-gray-200 hover:border-b-2 hover:border-blue-500 mx-1.5 hover:bg-[#1D232A] md:p-2 md:my-3 p-2 my-1 sm:mx-6" onClick={() => filterItem("Soup")}>Soup</button></li>
                    </ul>
                </div>
                <div className='float-right w-full h-auto min-h-full'>
                    <div className='flex gap-4 justify-center w-full min-h-[100%] flex-wrap bg-slate-900 text-yellow-400'>
                        {menuData.map((currElem) => {
                            const categ = currElem.category;
                            return (
                                <>

                                    <div className='border-2 border-gray-600 rounded-xl h-fit w-full md:w-1/4 p-4 mx-6 hover:scale-110 transition duration-500 delay-[175] ease-in-out hover:animate-pulse'>
                                        {categ === "Veg" ?
                                            <div className='top-0 left-0 w-12'>
                                                <img src={Veg} alt="Vegitarian" />
                                            </div>
                                            :
                                            <div className='top-0 left-0 w-12'>
                                                <img src={NonVeg} alt="Vegitarian" />
                                            </div>
                                        }
                                        <div className="image">
                                            <img src={currElem.image} className='m-auto w-32 h-32 rounded-full' alt='Food' />
                                        </div>
                                        <div className='txt'>
                                            <h4 className='font-semibold text-[2/3vw] text-center'>{currElem.name}</h4>
                                            <hr style={{ color: '#000000', backgroundColor: '#2c335a', height: .5, borderColor: '#2c335a' }} className='w-1/3 mx-auto' />
                                            <h4 className='font-semibold text-[2/3vw] text-center'> <strong>Price:</strong> {currElem.price}  </h4>
                                            <div className="flex justify-center items-center gap-4">
                                                <a href="http://www.zomato.com/indore/momo-dough-bhawar-kuan/order" target='_blank' rel="noopener noreferrer"><img src={Zomato} alt="Zomato logo" className='w-20 rounded-full' /></a>
                                                <a href="https://www.swiggy.com/search?query=Momo+Dough" target='_blank' rel="noopener noreferrer"><img src={Swiggy} alt="Swiggy logo" className='w-20 rounded-full ' /></a>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Drawer
