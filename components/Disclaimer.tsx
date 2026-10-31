export function Disclaimer() {
  return (
    <footer className="mt-14 border-t border-white/[0.07] pt-6 text-center">
      <p className="mx-auto max-w-2xl text-pretty text-xs leading-relaxed text-zinc-500">
        <span className="font-medium text-zinc-400">IDForge</span> genera
        personas, teléfonos, tarjetas y biografías completamente ficticias. Los
        números de tarjeta son aleatorios y no válidos, y los teléfonos usan el
        rango reservado 555-0100 a 555-0199.
      </p>
      <p className="mx-auto mt-2 max-w-xl text-pretty text-[11px] leading-relaxed text-zinc-600">
        Pensado para escritura, juegos de rol, prototipos y pruebas de diseño.
        No lo uses para suplantar a nadie ni para engañar a terceros. Avatares
        procedurales generados con DiceBear.
      </p>
    </footer>
  );
}
