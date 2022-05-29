import Link from "next/link"
import { FiEdit } from "react-icons/fi"
import { RiDeleteBin6Line } from "react-icons/ri"
import { FilterTransctionsForm } from "./FilterTransctionsForm"
import { NewTransctionsForm } from "./NewTransctionsForm"

export const TableTransctions = () => {
    return (

        <div className="w-11/12 text-md m-auto p-5 bg-box rounded-lg cursor-pointer">
            <div className="flex pb-5 justify-between">
                <div className="flex-1">
                    <FilterTransctionsForm />
                </div>
                <div className="w-7/12">
                    <NewTransctionsForm />
                </div>
            </div>
            <table className="w-full text-sm">
                <thead className="">
                    <tr className="text-left text-gray-700 border-b border-dashed border-gray-700">
                        <th className="py-2">Transação</th>
                        <th>Tipo</th>
                        <th>Valor</th>
                        <th>Data</th>
                        <th>Ação</th>
                    </tr>
                </thead>

                <tbody>
                    <tr className="text-left  border-b border-dashed border-gray-700 text-slate-200">
                        <th className="py-2">Notebook</th>
                        <th className="text-rose-600 text-xs"><span className="px-1 rounded-lg bg-redTransparent">saída</span></th>
                        <th>R$ 2.000,00</th>
                        <th className="text-gray-500">21/03/2022</th>
                        <th className="space-x-3">
                            <button className="text-gray-600"><FiEdit /></button>
                            <button className="text-red-900"><RiDeleteBin6Line /></button>
                        </th>
                    </tr>

                    <tr className="text-left  border-b border-dashed border-gray-700 text-slate-200">
                        <th className="py-2">Salário</th>
                        <th className="text-emerald-400 text-xs"><span className="px-1 rounded-lg bg-greenTransparent">entrada</span></th>
                        <th>R$ 4.000,00</th>
                        <th className="text-gray-500">21/03/2022</th>
                        <th className="space-x-3">
                            <button className="text-gray-600"><FiEdit /></button>
                            <button className="text-red-900"><RiDeleteBin6Line /></button>
                        </th>
                    </tr>

                    <tr className="text-left  border-b border-dashed border-gray-700 text-slate-200">
                        <th className="py-2">Material escolar</th>
                        <th className="text-rose-600 text-xs"><span className="px-1 rounded-lg bg-redTransparent">saída</span></th>
                        <th>R$ 500,00</th>
                        <th className="text-gray-500">25/02/2022</th>
                        <th className="space-x-3">
                            <button className="text-gray-600"><FiEdit /></button>
                            <button className="text-red-900"><RiDeleteBin6Line /></button>
                        </th>
                    </tr>

                    <tr className="text-left  border-b border-dashed border-gray-700 text-slate-200">
                        <th className="py-2">Lanche da tarde</th>
                        <th className="text-rose-600 text-xs"><span className="px-1 rounded-lg bg-redTransparent">saída</span></th>
                        <th>R$ 20,00</th>
                        <th className="text-gray-500">21/03/2022</th>
                        <th className="space-x-3">
                            <button className="text-gray-600"><FiEdit /></button>
                            <button className="text-red-900"><RiDeleteBin6Line /></button>
                        </th>
                    </tr>

                    <tr className="text-left  border-b border-dashed border-gray-700 text-slate-200">
                        <th className="py-2">Recebimento de cliente</th>
                        <th className="text-emerald-400 text-xs"><span className="px-1 rounded-lg bg-greenTransparent">entrada</span></th>
                        <th>R$ 1.000,00</th>
                        <th className="text-gray-500">21/03/2022</th>
                        <th className="space-x-3">
                            <button className="text-gray-600"><FiEdit /></button>
                            <button className="text-red-900"><RiDeleteBin6Line /></button>
                        </th>
                    </tr>

                    <tr className="text-left  border-b border-dashed border-gray-700 text-slate-200">
                        <th className="py-2">Conta de luz</th>
                        <th className="text-rose-600 text-xs"><span className="px-1 rounded-lg bg-redTransparent">saída</span></th>
                        <th>R$ 280,00</th>
                        <th className="text-gray-500">10/03/2022</th>
                        <th className="space-x-3">
                            <button className="text-gray-600"><FiEdit /></button>
                            <button className="text-red-900"><RiDeleteBin6Line /></button>
                        </th>
                    </tr>

                    <tr className="text-left  border-b border-dashed border-gray-700 text-slate-200">
                        <th className="py-2">Freelancer</th>
                        <th className="text-emerald-400 text-xs"><span className="px-1 rounded-lg bg-greenTransparent">entrada</span></th>
                        <th>R$ 300,00</th>
                        <th className="text-gray-500">21/03/2022</th>
                        <th className="space-x-3">
                            <button className="text-gray-600"><FiEdit /></button>
                            <button className="text-red-900"><RiDeleteBin6Line /></button>
                        </th>
                    </tr>

                    <tr className="text-left  border-b border-dashed border-gray-700 text-slate-200">
                        <th className="py-2">Compras no supermercado</th>
                        <th className="text-rose-600 text-xs"><span className="px-1 rounded-lg bg-redTransparent">saída</span></th>
                        <th>R$ 800,00</th>
                        <th className="text-gray-500">21/03/2022</th>
                        <th className="space-x-3">
                            <button className="text-gray-600"><FiEdit /></button>
                            <button className="text-red-900"><RiDeleteBin6Line /></button>
                        </th>
                    </tr>

                    <tr className="text-left  border-b border-dashed border-gray-700 text-slate-200">
                        <th className="py-2">Salário</th>
                        <th className="text-emerald-400 text-xs"><span className="px-1 rounded-lg bg-greenTransparent">entrada</span></th>
                        <th>R$ 4.000,00</th>
                        <th className="text-gray-500">21/03/2022</th>
                        <th className="space-x-3">
                            <button className="text-gray-600"><FiEdit /></button>
                            <button className="text-red-900"><RiDeleteBin6Line /></button>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>

    )
} 