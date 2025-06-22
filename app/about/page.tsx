import React from 'react'

export default async function page() {
    await new Promise ((resolve) => {
        setTimeout(()=> {
            resolve("intention delay");
        }, 500)
    });
  return (
        <div className="min-h-screen flex items-center justify-center bg-primary text-primary-foreground selection:bg-primary-foreground selection:text-primary">
            <div className="space-y-3 max-w-3xl">
                <h1 className='text-5xl font-semibold'>
                    O mnie
                </h1>

            </div>

        </div>
  )
}
