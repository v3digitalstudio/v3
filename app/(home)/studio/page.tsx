import Link from "next/link"

import { Icons } from "@/components/icons"

export default function Studio() {
  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-20 max-w-4xl px-8 text-center">
          <p className="mb-10 text-xl tracking-tight lg:text-2xl">
            <span>
              V3 Digital Studio is a one of a kind specialized agency developing
              top tier applications and designs.
            </span>
            <span className="text-coolGray-600 italic">
              {" "}
              London, Chicago, Barcelona, Vienna, Rome, Las Vegas.{" "}
            </span>
            <span>
              V3 seeks out regions and markets with robust underlying catalysts,
              such as burgeoning technology sectors, a diverse workforce, and a
              strong entrepreneurial culture. In those carefully selected
              markets and locations, we bring capital and expertise to such as
              burgeoning technology sectors, a diverse workforce, and a strong
              entrepreneurial culture.
            </span>
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center border-b-2 border-black font-medium leading-none dark:border-white"
          >
            <span className="mr-2">Get in touch</span>
            <span className="transition duration-100 group-hover:-rotate-45">
              <Icons.arrowRight className="h-5 w-5" />
            </span>
          </Link>
        </div>
        <div className="mx-auto max-w-sm sm:max-w-none">
          <div className="flex flex-wrap">
            <div className="w-full sm:w-1/2 lg:w-1/4">
              <div className="rounded-5xl flex h-72 items-end border pb-12 pl-8 pr-1 pt-8">
                <div>
                  <h5 className="mb-5 text-5xl lg:text-4xl 2xl:text-7xl">
                    50<sup> +</sup>
                  </h5>
                  <span className="text-coolGray-600 block">Clients</span>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4">
              <div className="rounded-5xl flex h-72 items-end border pb-12 pl-8 pr-1 pt-8">
                <div>
                  <h5 className="mb-5 text-5xl lg:text-4xl 2xl:text-7xl">
                    324<sup> +</sup>
                  </h5>
                  <span className="text-coolGray-600 block">Projects</span>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4">
              <div className="rounded-5xl flex h-72 items-end border pb-12 pl-8 pr-1 pt-8">
                <div>
                  <h5 className="mb-5 text-5xl lg:text-4xl 2xl:text-7xl">
                    400<sup> +</sup>
                  </h5>
                  <span className="text-coolGray-600 block">Designs</span>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4">
              <div className="rounded-5xl flex h-72 items-end border pb-12 pl-8 pr-1 pt-8">
                <div>
                  <h5 className="mb-5 text-5xl lg:text-4xl 2xl:text-7xl">
                    <span>1000</span>
                    <sup> +</sup>
                  </h5>
                  <span className="text-coolGray-600 block">Next</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
