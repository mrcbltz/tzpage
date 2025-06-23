import React from 'react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'

// import { HeroHeader } from './header'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 0.5,
            },
        },
    },
}

const transitionVariants2 = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'scale',
                bounce: 0.3,
                duration: 0.5,
            },
        },
    },
}

export default function HeroSection() {
    return (
        <>
            {/* <HeroHeader /> */}
            <main className="overflow-hidden">
                <div
                    aria-hidden
                    className="absolute inset-0 isolate hidden contain-strict lg:block bg-primary">
                    <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>
                <section className='bg-primary text-primary-foreground selection:bg-primary-foreground selection:text-primary'>
                    {/* <div className="relative pt-24 md:pt-36"> */}
                    <div className="relative mt-10 p-24 md:p-36 gap-10">
                        {/* <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            delayChildren: 1,
                                        },
                                    },
                                },
                                item: {
                                    hidden: {
                                        opacity: 0,
                                        y: 20,
                                    },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            type: 'spring',
                                            bounce: 0.3,
                                            duration: 2,
                                        },
                                    },
                                },
                            }}
                            className="absolute inset-0 -z-20">
                            <Image
                                // src="https://ik.imagekit.io/lrigu76hy/tailark/night-background.jpg?updatedAt=1745733451120"
                                src="/bg.jpg"
                                alt="background"
                                className="absolute inset-x-0 top-56 -z-20 hidden lg:top-32 dark:block"
                                width="3276"
                                height="4095"
                            />
                        </AnimatedGroup> */}

                        {/* po co ten div ? */}
                        <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]  bg-green-200"></div>
                        <div className="mx-auto w-full flex flex-col justify-center items-center lg:flex-row lg:gap-x-20 ">
                            {/* tekst */}
                            <div className="order-2 lg:order-1 text-center sm:mx-auto lg:mr-auto lg:mt-0">

                                <TextEffect
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    as="h1"
                                    className="font-sans mt-8 text-balance font-semibold text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem]">
                                    Taktyka życia
                                </TextEffect>
                                <TextEffect
                                    per="line"
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    delay={0.5}
                                    as="p"
                                    className="mx-auto mt-8 max-w-2xl text-balance text-lg ">
                                    Pomagam osobom, które chcą lepiej zrozumieć siebie, pokonać trudności i budować życie w zgodzie ze sobą.
                                </TextEffect>

                                <AnimatedGroup
                                    variants={Object.assign({
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.2,
                                                    
                                                },
                                            },
                                        },
                                        transitionVariants,
                                    })}
                                    className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">

                                    <div
                                        key={1}
                                        className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5">
                                        <Button
                                            asChild
                                            size="lg"
                                            variant="ghost"
                                            className="rounded-xl px-5 text-base">
                                            <Link href="#link">
                                                <span className="text-nowrap">Umów się na spotkanie</span>
                                            </Link>
                                        </Button>
                                    </div>
                                    
                                </AnimatedGroup>
                            </div>
                            {/* zdjecie */}
                            <div className="order-1 lg:order-2 flex justify-center text-center sm:mx-auto lg:mr-auto lg:mt-0">
                            <AnimatedGroup
                                    variants={Object.assign({
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05, 
                                                    delayChildren: 0.8,
                                                    
                                                },
                                            },
                                        },
                                        transitionVariants2,
                                    })}
                                    className="mt-4 md:mt-2 lg:mt-0 gap-2"> 
                                        
                                        <Image 
                                            src="./fb5.png" 
                                            alt="fb" 
                                            width='380' 
                                            height='0' 
                                            className='drop-shadow-md hover:drop-shadow-2xl overflow-visible duration-500 mx-auto lg:mr-25'
                                            />
                            </AnimatedGroup>
                            </div>
                        </div>

                        {/* <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 0.75,
                                        },
                                    },
                                },
                                ...transitionVariants,
                            }}>
                            <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                                <div
                                    aria-hidden
                                    className="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                                />
                                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                                    <Image
                                        className="bg-background aspect-15/8 relative hidden rounded-2xl dark:block"
                                        src="/mail2.png"
                                        alt="app screen"
                                        width="2700"
                                        height="1440"
                                    />
                                    <Image
                                        className="z-2 border-border/25 aspect-15/8 relative rounded-2xl border dark:hidden"
                                        src="/mail2-light.png"
                                        alt="app screen"
                                        width="2700"
                                        height="1440"
                                    />
                                </div>
                            </div>
                        </AnimatedGroup> */}
                    </div>
                </section>
             
            </main>
        </>
    )
}
