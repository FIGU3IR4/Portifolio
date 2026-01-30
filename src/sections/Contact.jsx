import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser"; // Importação da biblioteca
import { Github, Linkedin, Mail, Phone, Loader2, CheckCircle, XCircle } from "lucide-react";
import { Container } from "../components/ui/Container";
import { SectionTitle } from "../components/ui/SectionTitle";
import { ME } from "../data/portfolio";

export const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // null, 'success', 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    // Substitua pelos seus IDs do EmailJS
    // DICA: O ideal é colocar isso em variáveis de ambiente (.env)
    const SERVICE_ID = "service_zm0awhq";
    const TEMPLATE_ID = "template_qq8ij1c";
    const PUBLIC_KEY = "KBKvW6IAjMvWk0F0d";

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        (result) => {
          setIsSubmitting(false);
          setStatus("success");
          form.current.reset(); // Limpa o formulário
          
          // Remove a mensagem de sucesso após 5 segundos
          setTimeout(() => setStatus(null), 5000);
        },
        (error) => {
          console.error(error.text);
          setIsSubmitting(false);
          setStatus("error");
        }
      );
  };

  return (
    <section id="contact" className="py-20">
      <Container>
        <SectionTitle
          title="Contato"
          subtitle="Fico feliz em conversar sobre projetos, oportunidades e ideias."
        />
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Card de Informações */}
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 h-fit">
            <h4 className="text-slate-100 font-semibold mb-3">Vamos conversar</h4>
            <div className="space-y-4 text-slate-300">
              <a
                className="flex items-center gap-3 hover:text-white transition"
                href={ME.links.github}
                target="_blank" 
                rel="noreferrer"
              >
                <Github className="w-5 h-5 text-blue-500" /> GitHub
              </a>
              <a
                className="flex items-center gap-3 hover:text-white transition"
                href={ME.links.linkedin}
                target="_blank" 
                rel="noreferrer"
              >
                <Linkedin className="w-5 h-5 text-blue-500" /> LinkedIn
              </a>
              <a
                className="flex items-center gap-3 hover:text-white transition"
                href={ME.links.email}
              >
                <Mail className="w-5 h-5 text-blue-500" /> {ME.links.email.replace("mailto:", "")}
              </a>
              <a
                className="flex items-center gap-3 hover:text-white transition"
                href={ME.links.phone}
              >
                <Phone className="w-5 h-5 text-blue-500" /> Telefone
              </a>
            </div>
          </div>

          {/* Formulário */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 relative"
          >
            <div className="grid gap-4">
              <div>
                <label className="text-slate-300 text-sm ml-1">Nome</label>
                <input
                  type="text"
                  name="user_name" 
                  required
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 transition disabled:opacity-50"
                  placeholder="Seu nome"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label className="text-slate-300 text-sm ml-1">Email</label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 transition disabled:opacity-50"
                  placeholder="voce@exemplo.com"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label className="text-slate-300 text-sm ml-1">Mensagem</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-600 transition resize-none disabled:opacity-50"
                  placeholder="Escreva aqui..."
                  disabled={isSubmitting}
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center gap-2 rounded-2xl px-5 py-2.5 bg-blue-600 text-white hover:bg-blue-500 transition font-medium shadow-lg shadow-blue-900/20 disabled:bg-slate-700 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" /> Enviando...
                  </>
                ) : (
                  "Enviar Mensagem"
                )}
              </button>

              {/* Feedback Messages */}
              {status === 'success' && (
                <div className="flex items-center gap-2 text-green-400 text-sm mt-2 animate-pulse">
                  <CheckCircle className="w-4 h-4" /> Mensagem enviada com sucesso!
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-400 text-sm mt-2">
                  <XCircle className="w-4 h-4" /> Erro ao enviar. Tente novamente.
                </div>
              )}

            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};