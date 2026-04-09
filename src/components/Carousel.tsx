'use client'

import useEmblaCarousel from 'embla-carousel-react'

export function Carousel() {
    const [emblaRef] = useEmblaCarousel({ loop: true })
    return (
        <div className="overflow-hidden bg-gray-100 w-[80%] h-[60%]" ref={emblaRef}>
            <div className="flex">
                <div className="flex-[0_0_100%] min-w-0 bg-gray-400 h-full flex flex-col shrink-0">

                    <div className='flex flex-none grow'>
                        <img src="/readme.png" className='w-full object-cover' />

                        {/* <img src="/arch_cybers.png" className='object-contain' /> */}
                        {/* maybe take new screenshots of projects because diff resolutions might fuck up things */}
                    </div>


                    <div className="border-t border-b border-amber-50/60 p-3 mb-3.5 -ml-5 h-[30%] flex flex-none">
                        <h2 className="font-extrabold text-m font-[geist] ml-5 ">Cyber Security Initiation:</h2>
                        <p className="font-[geist] mb-3 text-sm text-amber-50/70 mr-2 ml-5">For our cybersecurity project, we had to take advantage of a website flaws and make a report of each of them (how we did it and how could they could be fixed). All said reports are uploaded on Github as markdowns, organized by categories.</p>
                    </div>

                </div>
                <div className="flex-[0_0_100%] min-w-0 bg-gray-400 h-full flex flex-col shrink-0">

                    <div className='flex flex-none grow'>
                        <img src="/etodo_main.png" className='w-full object-cover' />
                        {/* <img src="/arch_back.png" className='' /> */}
                    </div>

                    <div className="border-t border-b border-amber-50/60 p-3 mb-3.5 -ml-5 h-[20%]">
                        <h2 className="font-extrabold text-m font-[geist] ml-5">Etodo website:</h2>
                        <p className="font-[geist] mb-3 text-sm text-amber-50/70 mr-2 ml-5">One of our first web project was to make a todo website where one could plan their meal for the week. I mainly did the backend and the docker part.</p>
                    </div>

                </div>
                <div className="flex-[0_0_100%] min-w-0 bg-gray-400 h-full flex flex-col shrink-0 ">
                    <div className='flex flex-row h-[60%]'>
                        <img src="/hyprland.png" alt="" className='object-fill' />
                    </div>

                    <div className="border-t border-b border-amber-50/60 p-3 mb-3.5 -ml-5">
                        <h2 className="font-extrabold text-m font-[geist] ml-5 ">Linux:</h2>
                        <p className="font-[geist] mb-3 text-sm text-amber-50/70 mr-2 ml-5">I'm quite familiar with Linux, which is used worldwide for servers/machines that need a little help. Maintaining and customizing an OS is no problem for me.</p>
                    </div>

                </div>
                <div className="flex-[0_0_100%] min-w-0 bg-gray-400 h-full flex flex-col shrink-0">

                    <div className='flex flex-row h-[60%]'>
                        <img src="/game.png" alt="" />
                    </div>

                    <div className="border-t border-b border-amber-50/60 p-3 mb-3.5 -ml-5">
                        <h2 className="font-extrabold text-m font-[geist] ml-5 ">Game prototype:</h2>
                        <p className="font-[geist] mb-3 text-sm text-amber-50/70 mr-2 ml-5">A videogame coded in C++ i've been working on in my spare time. It is still a prototype and obviously still need developement . Which means not meant to be played (yet ;) )</p>
                    </div>
                </div>
            </div>
        </div>
    )
}