"use client"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

export default function Projects() {
  return (
    <section className="max-w-7xl mx-auto px-6 ">

      {/* TITLE */}
      <div className="flex items-center gap-3 text-neutral-400 mb-10">
        <span className="text-sm tracking-widest">
          PROJECTS & EXPERIMENTS
        </span>
      </div>

      {/* GRID */}
      <div className="grid gap-6">

        {/* LARGE CARD */}
       <div className=" md:flex justify-between items-start">
   <div className="md:w-[40%] mb-10 md:mb-16  py-2">
    <h1 className="text-3xl lg:text-3xl xl:text-4xl font-semibold mb-4">
      My Work & Contributions
    </h1>
    <div className="h-1 w-[50%] bg-red-800"></div>

    <p className="text-sm md:text-base  text-white/80 leading-relaxed ">
      A showcase of selected projects that highlight my experience
      as a creative developer and designer.
    </p>
  </div>
  {/* LEFT CARD */}
  <div className="md:w-[60%] grid lg:grid-cols-2 max-w-3xl bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-700 transition">

    <div className="p-8 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl text-white font-semibold">
            AkaalTech
          </h3>

          <ArrowUpRight className="text-neutral-500" size={18} />
        </div>

        <p className="text-neutral-400 text-sm leading-relaxed">
          My Primary Business. Building production-grade software
          products, AI integrations, and mobile products —
          from idea to launch.
        </p>
      </div>

      <span className="text-neutral-500 text-sm mt-8">
        tryakaaltech.com
      </span>
    </div>

    <div className="relative min-h-70">
      <Image
        src="/smartmade.png"
        alt="project"
        fill
        className="object-cover"
      />
    </div>
  </div>

  {/* RIGHT TEXT */}
 

</div>
      


        {/* CARD 2 */}
       <div className="grid md:grid-cols-2 gap-6">

         <div className="grid lg:grid-cols-2 bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-700 transition">

          <div className="p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl text-white font-semibold mb-4">
                Early Warning System
              </h3>

              <p className="text-neutral-400 text-sm">
                Built for the Delhi Government — monitoring attendance
                across schools and identifying at-risk students.
              </p>
            </div>

            <div className="flex justify-between mt-8">
              <span className="text-neutral-500 text-sm">
                Delhi Government
              </span>

              <span className="text-green-400 text-xs bg-green-400/10 px-3 py-1 rounded-full">
                Launched
              </span>
            </div>
          </div>

          <div className="relative min-h-[260px]">
            <Image
              src="/10xgrowth1.png"
              alt="project"
              fill
              className="object-cover"
            />
          </div>
        </div>


        {/* CARD 3 */}
        <div className="grid lg:grid-cols-2 bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-700 transition">

          <div className="p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl text-white font-semibold mb-4">
                Aydentify
              </h3>

              <p className="text-neutral-400 text-sm">
                B2B data intelligence connecting ingredient and
                packaging manufacturers with end-product manufacturers.
              </p>
            </div>

            <span className="text-neutral-500 text-sm mt-8">
              aydentify.com
            </span>
          </div>

          <div className="relative min-h-[260px]">
            <Image
              src="/10xgrowth2.png"
              alt="project"
              fill
              className="object-cover"
            />
          </div>
        </div>
       </div>

      </div>
    </section>
  )
}