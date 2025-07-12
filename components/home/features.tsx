import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Sparkles } from 'lucide-react'
import { ReactNode } from 'react'
import AnimatedSection from '../motion-primitives/_AnimatedSection'
import { IoAccessibilityOutline } from 'react-icons/io5'
import { LuBlend, LuHandshake } from 'react-icons/lu'
import { GiBrain, GiSpellBook } from 'react-icons/gi'

const features = [
  {
    icon: <IoAccessibilityOutline className="size-12" />,
    title: 'Indywidualne podejście',
    text: 'Każdy z nas jest inny i ma własną, niepowtarzalną historię – dlatego dostosowuję metody pracy do potrzeb i sytuacji życiowej...',
  },
  {
    icon: <LuHandshake className="size-12" />,
    title: 'Poufność',
    text: 'Twoje zaufanie to dla mnie priorytet, dlatego poważnie traktuję kodeks etyczny psychologa...',
  },
  {
    icon: <Sparkles className="size-12" />,
    title: 'Profesjonalizm i empatia',
    text: 'Dbam o rzetelne przygotowanie do pracy biorąc udział w szkoleniach i superwizji.',
  },
  {
    icon: <GiSpellBook className="size-12" />,
    title: 'Podejście oparte na nauce',
    text: 'Opieram się na wiedzy psychologicznej i neurobiologicznej, zgodnej z aktualnymi ustaleniami nauki.',
  },
  {
    icon: <LuBlend className="size-12" />,
    title: 'Integracja metod pracy',
    text: 'Łączę dialog, pracę z ciałem i świadomość zasobów z wiedzą o układzie nerwowym.',
  },
  {
    icon: <GiBrain className="size-12" />,
    title: 'Diagnoza',
    text: 'Oferuję diagnozy psychologiczne, neuropsychologiczne oraz przygotowanie opinii.',
  },
]

export default function Features2() {
  return (
    <section className="py-12 md:py-32 bg-white  text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {features.map((feature, idx) => (
            <AnimatedSection key={idx}>
            <Card className="flex h-full flex-col shadow-md bg-primary text-primary-foreground transition-all duration-300 hover:shadow-xl hover:scale-105">
                <CardHeader className="flex flex-col items-center text-center pb-3">
                    <CardDecorator>{feature.icon}</CardDecorator>
                    <h3 className="mt-6 text-xl font-semibold">{feature.title}</h3>
                </CardHeader>
                
                <CardContent className="flex-1 flex items-center justify-center text-center p-4">
                    <p className="text-sm text-primary-foreground">{feature.text}</p>
                </CardContent>
            </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-primary-foreground/10">
    {children}
  </div>
)
