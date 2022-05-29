import { IoMdAddCircleOutline } from 'react-icons/io'

export const InputTextAddCategory = () => {
    return (
        <div className="bg-primary w-full h-7 rounded-lg flex overflow-hidden">
            <input type="text" className="w-5/6 bg-transparent placeholder:text-gray-700 placeholder:text-xs text-xs p-3 text-slate-200 h-full outline-none" placeholder="Add Categoria" />
            <button className="flex-1 bg-gray-700 hover:bg-gray-600 ">
                <div className='h-full w-full flex items-center justify-center text-lg  text-gray-800'>
                    <IoMdAddCircleOutline />
                </div>
            </button>
        </div>
    )
}