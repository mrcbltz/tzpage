'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Secondver() {
  return (
    // <section className="relative w-full h-full min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 overflow-hidden">
    <main className="overflow-hidden bg-primary-foreground">
    <section className="relative w-full h-full min-h-screen bg-green-50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-green-50 via-white to-transparent pointer-events-none z-0" />
        <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center justify-center gap-6 px-4 pt-12 sm:flex-col sm:pt-16 md:flex-row md:pt-32">
          {/* Zdjęcie */}
          <div className="w-full md:w-1/2 flex items-center justify-center sm:pt-10">
            <Image
              src="./bng.png"
              alt="profile pic"
              width={600}
              height={600}
              className="object-contain w-auto h-[80vh]"
              priority
            />
          </div>

        {/* Podpis i przyciski */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center -mt-6 md:-mt-12">
            <Image
              src="./sign.png"
              alt="Podpis"
              width={600}
              height={200}
              className="object-contain w-full max-w-xs sm:max-w-md md:max-w-xl"
              priority
            />

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <div className=" rounded-xl border ">
                <Button
                  asChild
                  size="lg"
                  variant="primary"
                  className="rounded-xl px-5 text-base"
                >
                  <Link href="#link">Umów się na spotkanie</Link>
                </Button>
              </div>
              <div className=" rounded-xl border ">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="rounded-xl px-5 text-base"
                >
                  <Link href="#link">Dowiedz się więcej</Link>
                </Button>
              </div>
          </div>
        </div>
      </div>
      
    </section>
    </main>
  )
}
