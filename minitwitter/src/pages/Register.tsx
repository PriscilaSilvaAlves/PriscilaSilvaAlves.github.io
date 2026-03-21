import { api } from "../api/api";
import axios from "axios";
import { Mail, Eye, User } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

type Props = {
    setToken: (token: string) => void;
    dropDown: "darkmode" | "lightmode";
};

const registerSchema = z.object({
    name: z.string().min(2, "O nome precisa ter pelo menos 2 caracteres"),
    email: z.string().email("Email inválido"),
    password: z.string().min(4, "A senha precisa ter pelo menos 4 caracteres"),
});

type RegisterFormData = z.infer<typeof registerSchema>;

export default function Register({ setToken, dropDown }: Props) {

    const [message, setMessage] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema)
    });

    async function handleRegister(data: RegisterFormData) {
        try {
            setMessage("");

            await api.post("/auth/register", data);
            console.log(data);

            const response = await api.post("/auth/login", {
                email: data.email,
                password: data.password
            });

            const token = response.data.token;
            const user = response.data.user;

            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));

            setToken(token);
            reset();

        } catch (error) {
            if (axios.isAxiosError(error)) {
                setMessage(error.response?.data?.error || "Erro ao registrar");
            } else {
                setMessage("Erro inesperado");
            }
        }
    }

    return (
        <div className="w-full px-4 sm:px-0">
            <form
                onSubmit={handleSubmit(handleRegister)}
                className="flex flex-col gap-3 w-full"
            >
                <h2 className={`text-2xl sm:text-4xl mb-2 font-semibold leading-tight
                     ${dropDown === "lightmode" ? "text-sky-500" : "text-white"}`}>
                    Olá, vamos começar!
                </h2>
                <p className={`text-sm sm:text-[1.180rem] mb-6 sm:mb-8
                    ${dropDown === "lightmode" ? "text-gray-600" : "text-gray-400"}`}>
                    Por favor, insira os dados para cadastro.
                </p>
                <label className={`text-sm sm:text-base
                    ${dropDown === "lightmode" ? "text-gray-600" : "text-gray-300"}`}>
                    Nome
                </label>
                <div className="relative w-full">
                    <input
                        {...register("name")}
                        placeholder="Seu nome"
                        className={`w-full px-4 py-3 pr-10 border border-blue-300 rounded-lg
                        focus:outline-none focus:border-blue-400 text-sm sm:text-base
                        ${dropDown === "lightmode" ? "bg-gray-200 text-gray-800" : "bg-gray-800 text-white"}`}
                    />
                    <User className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-300 w-5 h-5" />
                </div>
                {errors.name && (
                    <span className="text-red-500 text-xs sm:text-sm">
                        {errors.name.message}
                    </span>
                )}
                <label className={`text-sm sm:text-base
                    ${dropDown === "lightmode" ? "text-gray-600" : "text-gray-300"}`}>
                    E-mail
                </label>
                <div className="relative w-full">
                    <input
                        {...register("email")}
                        placeholder="Seu e-mail"
                        className={`w-full px-4 py-3 pr-10 border border-blue-300 rounded-lg
                        focus:outline-none focus:border-blue-400 text-sm sm:text-base
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
                <div className="relative w-full">
                    <input
                        type="password"
                        {...register("password")}
                        placeholder="Sua senha"
                        className={`w-full px-4 py-3 pr-10 border border-blue-300 rounded-lg
                            focus:outline-none focus:border-blue-400 text-sm sm:text-base
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
                    className="w-full mt-4 bg-sky-500 hover:bg-sky-600 shadow-lg shadow-sky-500/20 text-white py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base transition duration-200"
                >
                    {isSubmitting ? "Registrando..." : "Continuar"}
                </button>
                {message && (
                    <p className={`text-center text-sm sm:text-base
                        ${dropDown === "lightmode" ? "text-gray-700" : "text-white"}`}>
                        {message}
                    </p>
                )}
            </form>

        </div>
    );
}