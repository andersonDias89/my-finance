import { InputTextSearchContacts } from "../../Inputs/InputTextSeachContact"
import { Contact } from "./Contact"

export const ListContacts = () => {
    return (
        <div className="w-1/3 h-96 bg-box rounded-md py-5 px-4 flex flex-col">
            <header className="w-full h-14 px-4">
                <InputTextSearchContacts />
            </header>

            <div className="space-y-2 overflow-y-auto h-80 scroll-pl-px p-3">
                {
                    data.map(contact => (
                        <Contact name={contact.name} email={contact.email} />
                    ))
                }
            </div>

        </div>
    )
}

const data = [
    {
        name: "Maria da Silva",
        email: "mariadasilva@gmail.com"
    },

    {
        name: "Maria da Silva",
        email: "mariadasilva@gmail.com"
    },

    {
        name: "Maria da Silva",
        email: "mariadasilva@gmail.com"
    },

    {
        name: "Maria da Silva",
        email: "mariadasilva@gmail.com"
    },

    {
        name: "Maria da Silva",
        email: "mariadasilva@gmail.com"
    },

    {
        name: "Maria da Silva",
        email: "mariadasilva@gmail.com"
    },

    {
        name: "Maria da Silva",
        email: "mariadasilva@gmail.com"
    },

    {
        name: "Maria da Silva",
        email: "mariadasilva@gmail.com"
    }
]

{/* <Contact
                    name="Anderson Dias"
                    email="andersondiasmd21@gmail.com"
                />

                <Contact
                    name="Karol Barreto"
                    email="karolbarreto@gmail.com"
                />

                <Contact
                    name="Alice Barreto"
                    email="alicebarreto@gmail.com"
                />

                <Contact
                    name="Maria da Silva"
                    email="mariadasilva@gmail.com"
                />

                <Contact
                    name="Maria da Silva"
                    email="mariadasilva@gmail.com"
                />

                <Contact
                    name="Maria da Silva"
                    email="mariadasilva@gmail.com"
                />

                <Contact
                    name="Maria da Silva"
                    email="mariadasilva@gmail.com"
                />

                <Contact
                    name="Maria da Silva"
                    email="mariadasilva@gmail.com"
                />

                <Contact
                    name="Maria da Silva"
                    email="mariadasilva@gmail.com"
                />

                <Contact
                    name="Maria da Silva"
                    email="mariadasilva@gmail.com"
                />

                <Contact
                    name="Maria da Silva"
                    email="mariadasilva@gmail.com"
                /> */}