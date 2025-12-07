import { LightRays } from "@appletosolutions/reactbits";

export default function HeroSection() {
  return (
    <div className="relative h-screen w-full">
      {/* Fundo com raios de luz */}
      <LightRays
        className="absolute inset-0"
        raysOrigin="top-center"
        raysColor="#ffffff"
        raysSpeed={1}
        // outros props opcionais...
      />

      {/* Conteúdo sobreposto */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-5xl font-bold">
          Bem-vindo ao meu Portfólio
        </h1>
      </div>
    </div>
  );
}
