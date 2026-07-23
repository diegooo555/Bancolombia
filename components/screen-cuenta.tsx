"use client"

import { useState } from "react"
import { ChevronLeft, Search, Send, HandCoins, MoreVertical } from "lucide-react"
import { StatusBar } from "./status-bar"
import { BancolombiaMark } from "./bancolombia-logo"

const tabs = ["Detalles", "Movimientos", "Plan"]

const movimientos = [
  { fecha: "22 JUL 2026", desc: "RETIRO SUCURSAL", monto: "-$ 451.000", cents: ",00", ingreso: false },
  { fecha: "21 JUL 2026", desc: "TRANSFERENCIA CTA SUC VIRTUAL", monto: "-$ 525.000", cents: ",00", ingreso: false },
  { fecha: "21 JUL 2026", desc: "PAGO DE PROV SABANALAC SAS", monto: "+$ 2.587.480", cents: ",73", ingreso: true },
  { fecha: "15 JUL 2026", desc: "TRANSF A COMUNICACION CELULA", monto: "-$ 35.601", cents: ",00" },
  { fecha: "15 JUL 2026", desc: "PAGO QR PYU CORREDOR", monto: "-$ 50.000", cents: ",00" },
  { fecha: "12 JUL 2026", desc: "TRANSFERENCIA NEQUI", monto: "+$ 18.000", cents: ",00", ingreso: true },
  { fecha: "11 JUL 2026", desc: "PAGO QR TIENDA", monto: "-$ 5.000", cents: ",00", ingreso: false },
  { fecha: "11 JUL 2026", desc: "TRANSFERENCIA NEQUI", monto: "+$ 10.000", cents: ",00", ingreso: true },
  { fecha: "10 JUL 2026", desc: "COMPRA CAFETERIA", monto: "-$ 7.500", cents: ",00", ingreso: false },
  { fecha: "10 JUL 2026", desc: "DEVOLUCION PSE", monto: "+$ 12.000", cents: ",00", ingreso: true },
  { fecha: "09 JUL 2026", desc: "PAGO QR MERCADO", monto: "-$ 6.000", cents: ",00", ingreso: false },
  { fecha: "09 JUL 2026", desc: "TRANSFERENCIA AHORROS", monto: "+$ 10.000", cents: ",00", ingreso: true },
  { fecha: "08 JUL 2026", desc: "RECARGA CELULAR", monto: "-$ 5.000", cents: ",00", ingreso: false },
  { fecha: "08 JUL 2026", desc: "ABONO CUENTA", monto: "+$ 15.000", cents: ",00", ingreso: true },
  { fecha: "07 JUL 2026", desc: "PAGO QR PANADERIA", monto: "-$ 8.000", cents: ",00", ingreso: false },
  { fecha: "07 JUL 2026", desc: "TRANSFERENCIA NEQUI", monto: "+$ 10.000", cents: ",00", ingreso: true },
  { fecha: "06 JUL 2026", desc: "COMPRA TIENDA", monto: "-$ 5.500", cents: ",00", ingreso: false },
  { fecha: "06 JUL 2026", desc: "DEVOLUCION COMPRA", monto: "+$ 10.000", cents: ",00", ingreso: true },
  { fecha: "05 JUL 2026", desc: "PAGO QR CAFETERIA", monto: "-$ 9.000", cents: ",00", ingreso: false },
]

export function ScreenCuenta({ onBack }: { onBack: () => void }) {
  const [active, setActive] = useState("Movimientos")

  return (
    <div className="flex min-h-full flex-col">


      {/* header block */}
      <div className="bg-card/60">
        <div className="flex items-center justify-between px-5 pt-3">
          <button type="button" onClick={onBack} className="flex items-center gap-1 text-lg text-foreground">
            <ChevronLeft className="h-6 w-6" />
            Volver
          </button>
          <BancolombiaMark className="h-7 w-8" />
          <span className="w-16" />
        </div>

        <div className="px-6 pt-8">
          <p className="text-muted-foreground">Cuentas</p>
          <h1 className="text-4xl font-extrabold text-foreground">Cuenta de Ahorros</h1>

          <div className="mt-6 flex items-end justify-between">
            <div>
              <p className="text-lg text-foreground">Ahorros</p>
              <p className="text-lg text-foreground">912 - 846779 - 57</p>
            </div>
            <div className="text-right">
              <p className="text-muted-foreground">Saldo disponible</p>
              <p className="text-3xl font-light text-foreground">
                $ 3.260<span className="text-xl">,56</span>
              </p>
            </div>
          </div>
        </div>

        {/* tabs */}
        <div className="mt-6 flex px-2">
          {tabs.map((t) => {
            const isActive = t === active
            return (
              <button
                key={t}
                type="button"
                onClick={() => setActive(t)}
                className={`flex-1 border-b-2 pb-3 text-center text-lg transition-colors ${isActive ? "border-foreground font-bold text-foreground" : "border-transparent text-muted-foreground"
                  }`}
              >
                {t}
              </button>
            )
          })}
        </div>
      </div>

      {/* content */}
      <div className="relative flex-1 px-6 pt-4">
        <div className="flex justify-end">
          <button
            type="button"
            aria-label="Buscar movimientos"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary"
          >
            <Search className="h-5 w-5 text-foreground" />
          </button>
        </div>

        {active === "Movimientos" && (
          <ul className="mt-4">
            {movimientos.map((m, i) => (
              <li key={i} className="border-b border-border py-6">
                <p className="text-xl font-bold text-foreground">{m.fecha}</p>
                <p className="mt-1 text-lg text-foreground">{m.desc}</p>
                <p className="mt-4 text-right">
                  <span className={`text-sm font-bold ${m.ingreso ? "text-[#5fd6a8]" : "text-destructive"}`}>COP </span>
                  <span className={`text-2xl font-bold ${m.ingreso ? "text-[#5fd6a8]" : "text-destructive"}`}>
                    {m.monto}
                    <span className="text-lg">{m.cents}</span>
                  </span>
                </p>
              </li>
            ))}
          </ul>
        )}

        {active === "Detalles" && (
          <div className="mt-6 space-y-4 text-foreground">
            <Detail label="Tipo de cuenta" value="Cuenta de Ahorros" />
            <Detail label="Número de cuenta" value="912 - 846779 - 57" />
            <Detail label="Titular" value="Maradona" />
            <Detail label="Estado" value="Activa" />
            <Detail label="Saldo total" value="$ 3.260,56" />
          </div>
        )}

        {active === "Plan" && (
          <div className="mt-6 rounded-2xl bg-card p-6 text-foreground">
            <p className="text-lg font-bold">Plan actual: Cuenta de Ahorros Básica</p>
            <p className="mt-2 text-muted-foreground">
              Sin cuota de manejo. Retiros ilimitados en cajeros Bancolombia. Transferencias Bre-B sin costo.
            </p>
          </div>
        )}
      </div>

      {/* bottom actions */}
      <div className="p-4">
        <div className="flex items-center justify-around rounded-2xl bg-secondary/80 py-4">
          <button type="button" className="flex flex-col items-center gap-1 text-foreground">
            <Send className="h-6 w-6" strokeWidth={1.5} />
            <span className="text-sm">Transferir plata</span>
          </button>
          <button type="button" className="flex flex-col items-center gap-1 text-foreground">
            <HandCoins className="h-6 w-6" strokeWidth={1.5} />
            <span className="text-sm">Ir a Día a Día</span>
          </button>
          <button type="button" className="flex flex-col items-center gap-1 text-foreground">
            <MoreVertical className="h-6 w-6" strokeWidth={1.5} />
            <span className="text-sm">Más</span>
          </button>
        </div>
      </div>
    </div>
  )
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-border pb-3">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-bold">{value}</span>
    </div>
  )
}
