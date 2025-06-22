import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function ContentSection() {
    return (
        <section className="bg-primary-foreground text-primary py-16 md:py-32 selection:bg-primary selection:text-primary-foreground">
            <div className="mx-auto max-w-5xl my-24 px-6">
                <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                    <h2 className="text-4xl font-medium">Taktyka Życia łączy psychologię, doświadczenie i narzędzia rozwoju.</h2>
                    <div className="space-y-6">
                        <p>Pomagam osobom, które chcą lepiej zrozumieć siebie, pokonać trudności i budować życie w zgodzie ze sobą.</p>
                        <p>
                            Każdy proces jest indywidualny. <span className='font-bold'>Korzystam z podejść sprawdzonych w praktyce i nauce </span>– od psychoterapii po narzędzia samoświadomości.
                            Wierzę, że zmiana zaczyna się od poznania.
                        </p>
                        <Button
                            asChild
                            variant="default"
                            size="sm"
                            className="gap-1 pr-1.5">
                            <Link href="/about">
                                <span>Dowiedz się wiecej</span>
                                <ChevronRight className="size-2" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
