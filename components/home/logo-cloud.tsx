import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import Image from 'next/image'

export default function LogoCloud() {
    return (
        <section className="bg-primary  overflow-hidden py-16">
            <div className="group relative m-auto max-w-7xl px-6">
                <div className="flex flex-col items-center justify-center md:flex-row">
                    <div className=" text-primary-foreground md:max-w-44 md:border-r md:border-primary-foreground/35 md:pr-6 mb-0 sm:mb-20 md:mb-0">
                        <p className="text-end text-primary-foreground font-bold ">EDUKACJA</p>
                    </div>
                    <div className="relative py-6 md:w-[calc(100%-11rem)]">
                        <InfiniteSlider
                            speedOnHover={20}
                            speed={40}
                            gap={112}
                            > 
                            <div className="flex">
                                <Image
                                    className="mx-auto h-6 dark:invert"
                                    src="./logos/apa.png"
                                    alt="Nvidia Logo"
                                    height="20"
                                    width="349"
                                />
                            </div>

                            <div className="flex w-fit mx-auto">
                                <Image
                                    className="mx-auto h-6 dark:invert"
                                    src="./logos/va.png"
                                    alt="va logo"
                                    height="24"
                                    width="110"
                                />
                            </div>
                            <div className="flex">
                                <Image
                                    className="mx-auto h-6 dark:invert"
                                    src="./logos/bsp.png"
                                    alt="bsp logo"
                                    height="20"
                                    width="142"
                                />
                            </div>
                            <div className="flex">
                                <Image
                                    className="mx-auto h-6 dark:invert"
                                    src="./logos/tsr.png"
                                    alt="Tsr Logo"
                                    height="20"
                                    width="37"
                                />
                            </div>
                            <div className="flex">
                                <Image
                                    className="mx-auto h-6 dark:invert"
                                    src="./logos/ul.png"
                                    alt="ul log"
                                    height="20"
                                    width="79"
                                />
                            </div>
                            <div className="flex">
                                <Image
                                    className="mx-auto h-6 dark:invert"
                                    src="./logos/wsb.png" 
                                    alt="Laravel Logo"
                                    height="20"
                                    width="46"
                                />
                            </div>
                           
                        </InfiniteSlider>

                        <div className="bg-linear-to-r from-primary absolute inset-y-0 left-0 w-20"></div>
                        <div className="bg-linear-to-l from-primary absolute inset-y-0 right-0 w-20"></div>
                        <ProgressiveBlur
                            className="pointer-events-none absolute left-0 top-0 h-full w-20"
                            direction="left"
                            blurIntensity={1}
                        />
                        <ProgressiveBlur
                            className="pointer-events-none absolute right-0 top-0 h-full w-20"
                            direction="right"
                            blurIntensity={1}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
