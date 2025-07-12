import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function ContentSection() {
    return (
        <section className="bg-primary-foreground text-primary selection:bg-primary selection:text-primary-foreground px-4 py-12 sm:px-6 md:px-12 md:py-20">
            <div className=" mx-auto flex h-full max-w-6xl items-center px-6">
            <div className="flex flex-col md:flex-row w-full gap-8 items-center justify-center sm:gap-x-14">

            {/* LEWA RAMKA */}
                {/* <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-4xl font-medium leading-tight">
                        Taktyka Życia łączy psychologię, <br />doświadczenie i narzędzia rozwoju.
                    </h2>
                </div> */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <Image
                         src='./brain.jpg'
                         alt='brain'
                         width={600}
                         height={600}
                         className='rounded-xl'
                    
                    />
                </div>

            

            {/* PRAWA RAMKA */}
                <div className="w-full md:w-1/2 space-y-6 text-justify indent-10">
                    <p>
                        Miło mi powitać Cię w przestrzeni stworzonej z myślą o wsparciu i zrozumieniu. Moje doświadczenie zawodowe obejmuje pracę z młodzieżą i osobami dorosłymi.  W kontakcie z drugim człowiekiem ważny jest mnie zarówno dialog jak i sygnały płynące z układu nerwowego. Opieram się na podejściu integrującym wiedzę psychologiczną, neurobiologiczną i somatyczną. Jest ono zgodne z aktualnymi ustaleniami nauki, które wskazują, że regulacja emocji i dobrostan psychiczny są ściśle powiązane z procesami zachodzącymi w ciele.

                    </p>
                    {/* <p>
                        Każdy proces jest indywidualny.{" "}
                        <span className="font-bold">Korzystam z podejść sprawdzonych w praktyce i nauce</span> – od psychoterapii
                        po narzędzia samoświadomości. Wierzę, że zmiana zaczyna się od poznania.
                    </p> */}
                    <p>
                        Oznacza to, że w procesie wsparcia psychologicznego zwracam uwagę nie tylko na treść wypowiedzi i emocje, ale również na reakcje ciała, oddech, napięcie mięśniowe czy sygnały z układu nerwowego, które mogą wiele powiedzieć o przeżywanych doświadczeniach. Umożliwia to lepsze zrozumienie Twoich potrzeb i dobranie formy wsparcia adekwatnej do Twojej sytuacji.
                        Swoją pracę poddaje regularnej superwizji.

                    </p>
                    <div className='flex justify-center'>
                    <Button asChild variant="default" size="sm" className="px-6">
                        <Link href="/about" className='flex items-center justify-center gap-1 text-center'>
                        <span className='text-center'>Dowiedz się więcej</span>
                        <ChevronRight className="size-2" />
                        </Link>
                    </Button>
                    </div>
                </div>

            </div>
            </div>
    </section>
    )
}
