import { FieldValues, UseFormRegister } from "react-hook-form"

type InputProps = {
    type?: string
    name: string
    register?: UseFormRegister<FieldValues>
} & React.InputHTMLAttributes<HTMLInputElement>

export const InputFormText = ({ type = "text", name, register= () => {
    return {
      name: '',
      onBlur: async () => undefined,
      onChange: async () => undefined,
      ref: () => null
    }
  }, ...rest }: InputProps) => {
    return (
        <input 
        type={type} 
        {...register(name)} 
        {...rest}
        />
    )
}