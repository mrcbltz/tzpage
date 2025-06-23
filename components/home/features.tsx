import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Settings2, Sparkles, Zap } from 'lucide-react'
import { ReactNode } from 'react'
import AnimatedSection from '../motion-primitives/_AnimatedSection'

export default function Features() {
    return (
        <section className="py-6 md:py-32 bg-primary text-primary-foreground dark:bg-transparent">
            <div className="@container my-24 mx-auto max-w-5xl px-6 ">
    
                {/* <div className="snap-x @min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto grid max-w-sm gap-6 *:text-center "> */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch *:text-center">


                   <AnimatedSection>
                    {/* <Card className="snap-center group shadow-zinc-950/5 bg-primary "> */}
                    <Card className="h-full group shadow-zinc-950/5 bg-primary text-primary-foreground ">
                    
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Zap
                                    className="size-12 bg-primary text-primary-foreground"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-semibold text-xl text-primary-foreground selection:bg-primary-foreground selection:text-primary">Indywidualne podejście</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm text-primary-foreground selection:bg-primary-foreground selection:text-primary">Każdy człowiek jest inny – dlatego dostosowuję metody pracy do Twoich potrzeb, tempa i sytuacji życiowej.</p>
                        </CardContent>
                    </Card>
                    </AnimatedSection>
                    <AnimatedSection>
                    <Card className="h-full group shadow-zinc-950/5 bg-primary text-primary-foreground">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Settings2
                                    className="size-12 bg-primary text-primary-foreground"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-semibold text-xl text-primary-foreground selection:bg-primary-foreground selection:text-primary">Poufność</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm text-primary-foreground selection:bg-primary-foreground selection:text-primary">Twoje zaufanie jest dla mnie priorytetem. Zapewniam pełną dyskrecję i przestrzeń, w której możesz czuć się bezpiecznie.</p>
                        </CardContent>
                    </Card>
                    </AnimatedSection>

                    <AnimatedSection>
                    <Card className="h-full group shadow-zinc-950/5 bg-primary text-primary-foreground">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Sparkles
                                    className="size-12 bg-primary text-primary-foreground"
                                    aria-hidden
                                />
                            </CardDecorator>

                            <h3 className="mt-6 font-semibold text-xl text-primary-foreground selection:bg-primary-foreground selection:text-primary">Profesjonalizm i empatia</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm text-primary-foreground selection:bg-primary-foreground selection:text-primary">Łączę solidne przygotowanie merytoryczne z autentycznym zaangażowaniem w każde spotkanie.</p>
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
 