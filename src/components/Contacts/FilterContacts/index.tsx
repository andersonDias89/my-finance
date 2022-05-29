import { ButtonAddContact } from '../../Buttons/ButtonAddContact '
import { InputTextAddCategory } from '../../Inputs/InputTextAddCategory'
import { Category } from './Category'




export const FilterContacts = () => {
   
    return (
        <div className="w-1/3 h-96 bg-box rounded-md p-5 flex flex-col">
            <header className="w-full h-12">
                <h2 className="text-md text-slate-300 font-black">Categorias</h2>
            </header>

            <ul className="space-y-3 border-b-2 border-line pb-8 ">
                <Category
                    title='Total de Contatos'
                    amount={9}
                    colorText='text-blueLight'
                />

                <Category
                    title='Aprovado'
                    amount={5}
                    colorText="text-gray-500"
                />

                <Category
                    title='Pendente'
                    amount={3}
                    colorText='text-gray-500'
                />

                <Category
                    title='Bloqueado'
                    amount={1}
                    colorText='text-red-600'
                />
            </ul>

            <div>
                <form>
                    <div className="py-4 mb-5 border-b-2 border-line">
                        <span className="mb-1 text-gray-500 text-xs ml-1">Adicionar categoria</span>
                        <InputTextAddCategory />
                    </div>

                   <ButtonAddContact/>
                </form>
            </div>
        </div>
    )
}