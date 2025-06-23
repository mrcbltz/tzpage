import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function ContentSection() {
    return (
        <section className="bg-primary-foreground h-[70vh] text-primary selection:bg-primary selection:text-primary-foreground">
            <div className=" mx-auto flex h-full max-w-6xl items-center px-6">
            <div className="flex flex-col md:flex-row w-full gap-8 items-center justify-center">

            {/* LEWA RAMKA */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-4xl font-medium leading-tight">
                        Taktyka Życia łączy psychologię, <br />doświadczenie i narzędzia rozwoju.
                    </h2>
                </div>

            {/* PRAWA RAMKA */}
                <div className="w-full md:w-1/2 space-y-6">
                    <p>
                        Pomagam osobom, które chcą lepiej zrozumieć siebie, pokonać trudności i budować życie w zgodzie ze sobą.
                    </p>
                    <p>
                        Każdy proces jest indywidualny.{" "}
                        <span className="font-bold">Korzystam z podejść sprawdzonych w praktyce i nauce</span> – od psychoterapii
                        po narzędzia samoświadomości. Wierzę, że zmiana zaczyna się od poznania.
                    </p>
                    <Button asChild variant="default" size="sm" className="gap-1 pr-1.5">
                        <Link href="/about">
                        <span>Dowiedz się więcej</span>
                        <ChevronRight className="size-2" />
                        </Link>
                    </Button>
                </div>

            </div>
            </div>
    </section>
    )
}
