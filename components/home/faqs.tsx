'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'


export default function FAQsFour() {
    const faqItems = [
        {
            id: 'item-1',
            question: 'Jak często odbywają się spotkania?',
            answer: 'Częstotliwość spotkań ustalana jest indywidualnie - zazwyczaj raz w tygodniu lub co dwa tygodnie.',
        },
        {
            id: 'item-2',
            question: 'Jak długo trwa jedno spotkanie?',
            answer: 'Sesja trwa zwykle do 60 minut, jednak w niektórych przypadkach ten czas może być nieco dłuższy np. 75 minut. W przypadku diagnozy psychologicznej lub neuropsychologicznej spotkania mogą być dłuższe lub dzielone na kilka części - informuję o tym z wyprzedzeniem.',
        },
        {
            id: 'item-3',
            question: 'Kto może się zgłosić?',
            answer: 'TPracuję z młodzieżą powyżej 15 roku życia i osobami dorosłymi.',
        },
        {
            id: 'item-4',
            question: 'Czy możliwe są konsultacje jednorazowe?',
            answer: "Tak, istnieje taka możliwość - wszystko zależy od Twoich potrzeb. Czasem wystarczy jedno spotkanie, by spojrzeć na sytuację z innej perspektywy, uporządkować myśli lub uzyskać wskazówki, co dalej. Jeśli okaże się, że potrzebujesz szerszego wsparcia, wspólnie ustalimy dalsze kroki.",
        },
        {
            id: 'item-5',
            question: 'Czy mogę odwołać spotkanie?',
            answer: 'Tak, możesz odwołać spotkanie bez żadnych konsekwencji do 24 godzin przed jego planowanym terminem. Jeśli odwołanie nastąpi później niż 24 godziny przed spotkaniem, obowiązuje opłata w wysokości 50% stawki. Działa to również w drugą stronę - jeśli z mojej strony dojdzie do odwołania wizyty z krótszym niż 24-godzinny wyprzedzeniem, koszt kolejnego spotkania zostanie pomniejszony o 50%.',
        },
    
        {
            id: 'item-6',
            question: 'Gdzie odbywają się spotkania?',
            answer: 'Spotkania stacjonarne odbywają się w Łodzi przy ul. Widnej 2 (Łódź Górna) lub online na platformie MS Teams.',
        },
    
        {
            id: 'item-7',
            question: 'Czy możliwa jest diagnoza w kierunku ADHD, depresji, lęku, traumy?',
            answer: 'Tak, w mojej pracy prowadzę diagnozę psychologiczną w kierunku takich trudności jak ADHD, zaburzenia lękowe, depresja czy doświadczenia traumatyczne (w tym PTSD i CPTSD). Opieram się na rzetelnych narzędziach diagnostycznych, wywiadzie psychologicznym oraz analizie funkcjonowania emocjonalnego i poznawczego. Wykonuję także diagnozy neuropsychologiczne w przebiegu chorób neurologicznych, po urazach oraz u osób starszych. W przypadku spotkań w kierunku diagnozy mogą one trwać dłużej lub wymagać więcej niż jednego spotkania. Po zakończeniu diagnozy w ciągu kilku otrzymasz ją w formie pisemnej, którą można przedstawić lekarzowi psychiatrii lub innej osobie prowadzącej.',
        },
    ]

    return (
        <section className="py-6 md:py-5 bg-primary-foreground text-primary selection:bg-primary selection:text-primary-foreground ">
            <div className="mx-auto max-w-5xl my-12 py-12 px-4 md:px-6">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">Często zadawane pytania</h2>
                    <p className="mt-4 text-balance">Odkryj  odpowiedzi na najczęstsze pytania dotyczące mojej pracy.</p>
                </div>

                <div className="mx-auto mt-12 max-w-xl">
                    <Accordion
                        type="single"
                        collapsible
                        className="bg-primary w-full rounded-2xl p-1">
                        {faqItems.map((item) => (
                            <div
                                className="group"
                                key={item.id}>
                                <AccordionItem
                                    value={item.id}
                                    className="data-[state=open]:bg-card dark:data-[state=open]:bg-muted peer rounded-xl border-none px-7 py-1 data-[state=open]:border-none data-[state=open]:shadow-sm">
                                    <AccordionTrigger className="font-semibold cursor-pointer text-base text-primary-foreground selection:bg-primary-foreground selection:text-secondary hover:no-underline">{item.question}</AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-primary-foreground selection:bg-primary-foreground selection:text-secondary">{item.answer}</p>
                                    </AccordionContent>
                                </AccordionItem>
                                <hr className="mx-7 border-dashed group-last:hidden peer-data-[state=open]:opacity-0" />
                            </div>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}
