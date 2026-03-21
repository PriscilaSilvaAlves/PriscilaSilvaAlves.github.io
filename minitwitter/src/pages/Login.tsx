import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { api } from "../api/api";
import { Mail, Eye } from "lucide-react";

const loginSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(4, "A senha precisa ter pelo menos 4 caracteres")
});

type LoginFormData = z.infer<typeof loginSchema>;

type Props = {
  setToken: (token: string) => void;
  dropDown: "darkmode" | "lightmode";
};

export default function Login({ setToken, dropDown }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema)
  });
  async function onSubmit(data: LoginFormData) {
    try {
      const response = await api.post("/auth/login", data);
      const token = response.data.token;
      const user = response.data.user;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      setToken(token);
    } catch (error: any) {
      alert("Email ou senha inválidos");
    }
  }

  return (
    <div className="w-full mx-auto px-4 sm:px-0">

      <h2 className={`text-2xl sm:text-4xl text-left mb-2 font-semibold leading-tight
      ${dropDown === "lightmode" ? "text-sky-500" : "text-white"}`}>
        Olá, de novo!
      </h2>

      <p className={`text-sm sm:text-[1.250rem] text-left mb-6 sm:mb-12
      ${dropDown === "lightmode" ? "text-gray-600" : "text-gray-400"}`}>
        Por favor, insira os seus dados para fazer login.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-3"
      >
        <label className={`text-sm sm:text-base
        ${dropDown === "lightmode" ? "text-gray-600" : "text-gray-300"}`}>
          E-mail
        </label>

        <div className="relative w-full mb-2">
          <input
            type="email"
            placeholder="Insira o seu e-mail"
            {...register("email")}
            className={`w-full px-4 py-3 pr-10 border border-blue-300 
          rounded-lg focus:outline-none focus:border-blue-400 text-sm sm:text-base
          ${dropDown === "lightmode" ? "bg-gray-200 text-gray-800" : "bg-gray-800 text-white"}`}
          />
          <Mail className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-300 w-5 h-5" />
        </div>

        {errors.email && (
          <span className="text-red-500 text-xs sm:text-sm">
            {errors.email.message}
          </span>
        )}

        <label className={`text-sm sm:text-base
        ${dropDown === "lightmode" ? "text-gray-600" : "text-gray-300"}`}>
          Senha
        </label>

        <div className="relative w-full mb-2">
          <input
            type="password"
            placeholder="Insira a sua senha"
            {...register("password")}
            className={`w-full px-4 py-3 pr-10 border border-blue-300 
          rounded-lg focus:outline-none focus:border-blue-400 text-sm sm:text-base
          ${dropDown === "lightmode" ? "bg-gray-200 text-gray-800" : "bg-gray-800 text-white"}`}
          />
          <Eye className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-300 w-5 h-5" />
        </div>

        {errors.password && (
          <span className="text-red-500 text-xs sm:text-sm">
            {errors.password.message}
          </span>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-sky-500 hover:bg-sky-600 shadow-lg shadow-sky-500/20 text-white py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base transition duration-200"
        >
          {isSubmitting ? "Entrando..." : "Continuar"}
        </button>
      </form>
    </div>
  );

}