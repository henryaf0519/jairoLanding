"use client";
import React, { useState } from "react";
import { Label } from "./label";
import { Input } from "./input";
import { cn } from "../../../utils/utils";
import emailjs from "@emailjs/browser";

type Errors = {
  firstname?: string;
  email?: string;
  number?: string;
};

export default function SignupFormDemo() {
  const [errors, setErrors] = useState<Errors>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<
      string,
      string
    >;

    const newErrors: Errors = {};
    if (!data.firstname?.trim()) {
      newErrors.firstname = "Por favor ingresa tu nombre.";
    }
    if (!data.email?.trim()) {
      newErrors.email = "El correo es obligatorio.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Ingresa un correo con formato válido.";
    }
    if (!data.number?.trim()) {
      newErrors.number = "El teléfono es obligatorio.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Aquí puedes enviar `data` a tu API, cerrar modal, etc.
      console.log("Enviando datos:", data);
      sendMessage(data);
    }
  };

  const sendMessage = (data: Record<string, string>) => {
    emailjs
      .send(
        "service_w1zagv4",
        "template_tb05qji",
        {
          type: "Cotización",
          from_name: data.firstname,
          email: data.email,
          numberphone: data.number,
          message: `Deseo agendar un demo de agente IA estos son mis datos ${data.number}, ${data.email} \n Motivo: ${data.message}`,
        },
        "prOm35TXg66H46DY2"
      )
      .then(() => {})
      .catch((err) => {
        console.log("err: ", err);
      });
  };

  return (
    <div className="shadow-input mx-auto w-full max-w-md rounded-none p-4 md:rounded-2xl md:p-8 dark:bg-black">
      <h2 className="text-xl font-bold text-white dark:text-neutral-200">
        Orvex te da la bienvenida
      </h2>
      <p className="mt-2 max-w-sm text-sm text-white dark:text-neutral-300">
        Completa el formulario para que te contactemos, coordinemos tu demo y
        veas por qué Orvex es la mejor opción.
      </p>

      <form className=" flex flex-col" onSubmit={handleSubmit} noValidate>
        {/* Contenedor de los inputs con scroll */}
        <div className="flex-1 overflow-y-auto max-h-[60vh]">
          {/* Limita la altura de los inputs y permite el scroll */}

          {/* Nombre */}
          <LabelInputContainer>
            <Label htmlFor="firstname">Nombre</Label>
            <Input
              id="firstname"
              name="firstname"
              placeholder="Escribe tu nombre"
              type="text"
              className={cn(
                errors.firstname ? "border-red-500" : "border-none"
              )}
            />
            {errors.firstname && (
              <p className="text-white text-sm mt-1">{errors.firstname}</p>
            )}
          </LabelInputContainer>

          {/* Apellido */}
          <LabelInputContainer className="mt-4">
            <Label htmlFor="lastname">Apellido</Label>
            <Input
              id="lastname"
              name="lastname"
              placeholder="Escribe tu apellido"
              type="text"
            />
          </LabelInputContainer>

          {/* Email */}
          <LabelInputContainer className="mt-4">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              placeholder="name@example.com"
              type="email"
              className={cn(errors.email ? "border-red-500" : "border-none")}
            />
            {errors.email && (
              <p className="text-white text-sm mt-1">{errors.email}</p>
            )}
          </LabelInputContainer>

          {/* Número de Contacto */}
          <LabelInputContainer className="mt-4">
            <Label htmlFor="number">Número de Contacto</Label>
            <Input
              id="number"
              name="number"
              placeholder="321 1234567"
              type="text"
              className={cn(errors.number ? "border-red-500" : "border-none")}
            />
            {errors.number && (
              <p className="text-white text-sm mt-1">{errors.number}</p>
            )}
          </LabelInputContainer>

          {/* Negocio */}
          <LabelInputContainer className="mt-4">
            <Label htmlFor="industry">Negocio</Label>
            <Input
              id="industry"
              name="industry"
              placeholder="Ventas"
              type="text"
              className="border-none"
            />
          </LabelInputContainer>

          {/* ¿Cómo podemos ayudarte? */}
          <LabelInputContainer className="mt-4">
            <Label htmlFor="message">¿Cómo podemos ayudarte?</Label>
            <Input
              id="message"
              name="message"
              placeholder="Escribe tu mensaje aquí"
              type="text"
              className="border-none"
            />
          </LabelInputContainer>
        </div>

        {/* Botón "Agendar Demo" */}
        <button
          type="submit"
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black bg-primaryColor font-medium text-white mt-6"
        >
          Agendar Demo &rarr;
        </button>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
      </form>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("flex w-full flex-col space-y-2", className)}>
    {children}
  </div>
);
