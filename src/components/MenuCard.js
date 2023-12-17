import React from 'react';
import Zomato from './zomato.png';
import Veg from './veg.png';
import NonVeg from './non-veg.png';

function MenuCard({ menuData }) {
    return (
        <>
            <div className='flex gap-4 md:gap-6 lg:gap-8 flex-row flex-wrap justify-center bg-slate-900 text-yellow-400'>
                {menuData.map((currElem) => {
                    const categ = currElem.category;
                    return (
                        <>

                            <div className='border-2 border-gray-600 rounded-xl  w-2/3 md:w-1/4 p-4 mx-6 hover:scale-110 transition duration-500 delay-[175] ease-in-out hover:animate-pulse'>
                                {categ === "Veg" ?
                                    <div className='left-0 top-0 w-12'>
                                        <img src={Veg} alt="Vegitarian" />
                                    </div>
                                    :
                                    <div className='left-0 top-0 w-12'>
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
                                    <a href="http://www.zomato.com/indore/momo-dough-bhawar-kuan/order" target='_blank' rel="noopener noreferrer"><img src={Zomato} alt="Zomato logo" className='w-20 rounded-full' /></a>
                                </div>
                            </div>
                        </>
                    );
                })}
            </div>

        </>
    )
}

export default MenuCard;
