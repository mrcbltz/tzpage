import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Sparkles } from 'lucide-react'
import { ReactNode } from 'react'
import AnimatedSection from '../motion-primitives/_AnimatedSection'
import { IoAccessibilityOutline } from 'react-icons/io5';
import { LuBlend, LuHandshake } from 'react-icons/lu';
import { GiBrain, GiSpellBook } from 'react-icons/gi';

export default function Features() {
    return (
        <section className="relative py-6 md:py-32 bg-primary text-primary-foreground dark:bg-transparent">
            <div className="@container my-24 mx-auto max-w-5xl px-6 ">
    
                {/* <div className="snap-x @min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto grid max-w-sm gap-6 *:text-center "> */}
                {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch *:text-center"> */}
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">


                   <AnimatedSection>
                    {/* <Card className="snap-center group shadow-zinc-950/5 bg-primary "> */}
                    <Card className="w-full h-full max-w-sm shadow-md bg-primary text-primary-foreground ">
                    
                        <CardHeader className="pb-3">
                            <CardDecorator>

                                <IoAccessibilityOutline 
                                    className="size-12 bg-primary text-primary-foreground"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-semibold text-xl text-primary-foreground selection:bg-primary-foreground selection:text-primary">Indywidualne podejście</h3>
                        </CardHeader>

                        <CardContent className="p-4">
                            <p className="mt-3 text-sm text-primary-foreground selection:bg-primary-foreground selection:text-primary">Każdy z nas jest inny i ma własną, niepowtarzalną historię – dlatego dostosowuję metody pracy do potrzeb i sytuacji życiowej, uwzględniając fakt, że wsparcie ma być skuteczne w możliwie jak najkrótszym czasie.</p>
                        </CardContent>
                    </Card>
                    </AnimatedSection>

                    <AnimatedSection>
                    <Card className="w-full h-full max-w-sm shadow-md bg-primary text-primary-foreground">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <LuHandshake
                                    className="size-12 bg-primary text-primary-foreground"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-semibold text-xl text-primary-foreground selection:bg-primary-foreground selection:text-primary">Poufność</h3>
                        </CardHeader>

                        <CardContent className="p-4">
                            <p className="mt-3 text-sm text-primary-foreground selection:bg-primary-foreground selection:text-primary">Twoje zaufanie to dla mnie priorytet, dlatego poważnie traktuję kodeks etyczny psychologa a spotkania objęte są tajemnicą zawodową.</p>
                        </CardContent>
                    </Card>
                    </AnimatedSection>

                    <AnimatedSection>
                    <Card className="w-full h-full max-w-sm shadow-md bg-primary text-primary-foreground">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Sparkles
                                    className="size-12 bg-primary text-primary-foreground"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-semibold text-xl text-primary-foreground selection:bg-primary-foreground selection:text-primary">Profesjonalizm i empatia</h3>
                        </CardHeader>

                        <CardContent className="p-4">
                            <p className="mt-3 text-sm text-primary-foreground selection:bg-primary-foreground selection:text-primary">Dbam o rzetelne przygotowanie do pracy biorąc udział w szkoleniach i uczestnicząc w regularnej superwizji. </p>
                        </CardContent>
                    </Card>

                    <Card className="w-full h-full max-w-sm shadow-md bg-primary text-primary-foreground">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <GiSpellBook
                                    className="size-12 bg-primary text-primary-foreground"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-semibold text-xl text-primary-foreground selection:bg-primary-foreground selection:text-primary">Podejście oparte na nauce</h3>
                        </CardHeader>

                        <CardContent className="p-4">
                            <p className="mt-3 text-sm text-primary-foreground selection:bg-primary-foreground selection:text-primary">Dbam o rzetelne przygotowanie do pracy biorąc udział w szkoleniach i uczestnicząc w regularnej superwizji. </p>
                        </CardContent>
                    </Card>

                    <Card className="w-full h-full max-w-sm shadow-md bg-primary text-primary-foreground">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <LuBlend
                                    className="size-12 bg-primary text-primary-foreground"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-semibold text-xl text-primary-foreground selection:bg-primary-foreground selection:text-primary">Integracja metod pracy</h3>
                        </CardHeader>

                        <CardContent className="p-4">
                            <p className="mt-3 text-sm text-primary-foreground selection:bg-primary-foreground selection:text-primary">Wspieram w odzyskiwaniu równowagi emocjonalnej korzystając z podejść, które integrują dialog z pracą z ciałem, uważność na zasoby oraz współczesną wiedzę o funkcjonowaniu układu nerwowego. </p>
                        </CardContent>
                    </Card>

                    <Card className="w-full h-full max-w-sm shadow-md bg-primary text-primary-foreground">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <GiBrain
                                    className="size-12 bg-primary text-primary-foreground"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-semibold text-xl text-primary-foreground selection:bg-primary-foreground selection:text-primary">Diagnoza</h3>
                        </CardHeader>

                        <CardContent className="p-4">
                            <p className="mt-3 text-sm text-primary-foreground selection:bg-primary-foreground selection:text-primary">Oferuję diagnozę psychologiczną i neuropsychologiczną oraz przygotowanie opinii psychologicznej. Opinie mogą być wykorzystywane także w dalszym procesie leczenia u innych specjalistów.  </p>
                        </CardContent>
                    </Card>



                    </AnimatedSection>
                    
                </div>
            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
       
        <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center ">{children}</div>
    </div>
)
 