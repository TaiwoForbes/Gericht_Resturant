import React from 'react'

const MenuItems = ({title,price,tags}) => {
    return (
        <div className="w-full my-[1rem] flex flex-col">
            <div className="flex justify-between items-center">
                <div className="flex-1">
                    <p className="font-cormorant" style={{ color: '#DCCA87' }}>{title}</p>
                </div>
                <div className="w-[90%] h-[1px] bg-golden mx-[1rem]" />
                <div className="flex justify-end items-end">
                    <p className="font-cormorant text-white">{price}</p>
                </div>
            </div>

            <div className="w-full mt-[0.2rem]">
                <p className="font-sans text-grey" >{tags}</p>
            </div>
        </div>
    )
}

export default MenuItems