import { IoMdContact } from "react-icons/io"

type ContactProps = {
    name: string 
    email: string
}

export const Contact = ({name, email}: ContactProps) => {
    return (
        <div className="bg-primary  w-full rounded-lg flex flex-col py-3 px-2">
            <span className="p-3 text-gray-600 w-full h-6 flex items-center justify-start space-x-2">
                <div className="text-2xl">
                    <IoMdContact />
                </div>
                <div className="flex flex-col space-y-0">
                    <a className="text-blueLight font-black cursor-pointer text-xs">{name}</a>
                    <p className="text-xs">{email}</p>
                </div>
            </span>
        </div>
    )
}