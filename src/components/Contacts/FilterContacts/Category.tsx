type CategoryProps = {
    title: string
    amount: number
    colorText: string
}

export const Category = ({title, amount,colorText}: CategoryProps) => {
    return (
        <div className="flex justify-between">
            <li className={`${colorText} font-black text-xs`}>{title}</li>
            <span className={`w-4 h-4 bg-gray-800 ${colorText} text-xs flex items-center justify-center rounded-lg`}>{amount}</span>
        </div>
    )
}