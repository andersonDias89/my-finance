import Link from "next/link"
import { FaCoins } from "react-icons/fa"

export const FormLogin = () => {
    return (
        <div className="flex items-center justify-center h-screen px-24">
            <form className="bg-box h-96 w-2/6 rounded-lg p-5">
                <fieldset className="w-11/12 m-auto">
                    <div className="flex flex-col items-center justify-center space-y-2">
                        <span className="text-blueLight text-5xl"><FaCoins /></span>
                        <span className="text-slate-200 font-normal">Entrar</span>

                    </div>
                    <div className="mt-4">
                        <label htmlFor="email" className="text-sm text-gray-600">E-mail</label>
                        <div className="bg-primary w-full h-7 rounded-lg flex overflow-hidden">
                            <input type="email" className="w-5/6 bg-transparent placeholder:text-gray-700 placeholder:text-xs text-xs p-3 text-slate-200 h-full outline-none" placeholder="Digite o seu e-mail" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="senha" className="text-sm text-gray-600">Senha</label>
                        <div className="bg-primary w-full h-7 rounded-lg flex overflow-hidden">
                            <input type="password" className="w-5/6 bg-transparent placeholder:text-gray-700 placeholder:text-xs text-xs p-3 text-slate-200 h-full outline-none" placeholder="Digite a senha" />
                        </div>
                    </div>

                    <div className="space-x-1 mb-3">
                        <span className="text-xs text-gray-700">Ainda não tem cadastro?</span>
                        <a href="#" className="text-gray-600 cursor-pointer text-xs hover:text-gray-500">Cadastra-se</a>
                    </div>

                    <div className="w-full h-10 overflow-hidden rounded-lg mt-6">
                        <Link href={'/dashboard'}>
                            <button
                                type='button'
                                className="space-x-1 w-full h-full bg-blueLight hover:bg-blueLightHover font-black text-slate-100 flex items-center justify-center">
                                <span className='text-sm'>Entrar</span>
                            </button>
                        </Link>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}