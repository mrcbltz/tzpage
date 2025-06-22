import React from 'react'

export default async function page() {
    await new Promise ((resolve) => {
        setTimeout(()=> {
            resolve("intention delay");
        }, 1000)
    });
  return (
        <div className="bg-primary min-h-screen flex items-center justify-center text-primary-foreground selection:bg-primary-foreground selection:text-primary">
            <div className="space-y-3 max-w-3xl">
                <h1 className='text-5xl font-semibold'>
                    Kontakt
                </h1>

            </div>

        </div>
  )
}
