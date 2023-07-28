import Image from "next/image"

export default function Blog() {
  return (
    <section className="container overflow-hidden bg-white py-24 dark:bg-inherit lg:pb-32 lg:pt-28">
      <div className="mx-auto px-4">
        <h2 className="mb-12 font-heading text-4xl md:text-6xl">Articles</h2>
        <div className="-m-8 flex flex-wrap">
          <div className="w-full p-8 md:w-1/2">
            <div className="group cursor-pointer">
              <div className="mb-6 overflow-hidden rounded-lg">
                <Image
                  width={40}
                  height={40}
                  className="w-full rounded-lg"
                  src=""
                  alt=""
                />
              </div>
              <p className="mb-6 font-medium tracking-tight text-gray-500">
                <span className="mr-4 font-semibold text-indigo-500">
                  Insights
                </span>
                <span>June 22, 2021</span>
              </p>
              <h3
                className="mb-4 text-3xl font-semibold group-hover:text-gray-900 group-hover:underline"
                style={{ letterSpacing: "-0.5px" }}
              >
                WFH One year on. Here&rsquo;s what we&rsquo;ve learned.
              </h3>
              <p className="text-xl">
                Use and re-use tons of responsive sections too a main create the
                perfect layout. Sections are firmly of organised into the
                perfect start.
              </p>
            </div>
          </div>
          <div className="w-full p-8 md:w-1/2">
            <div className="group cursor-pointer">
              <div className="mb-6 overflow-hidden rounded-lg">
                <Image
                  width={40}
                  height={40}
                  className="w-full rounded-lg "
                  src=""
                  alt=""
                />
              </div>
              <p className="mb-6 font-medium tracking-tight text-gray-500">
                <span className="mr-4 font-semibold text-indigo-500">
                  Insights
                </span>
                <span>June 22, 2021</span>
              </p>
              <h3
                className="mb-4 text-3xl font-semibold group-hover:text-gray-900 group-hover:underline"
                style={{ letterSpacing: "-0.5px" }}
              >
                WFH One year on. Here&rsquo;s what we&rsquo;ve learned.
              </h3>
              <p className="text-xl">
                Use and re-use tons of responsive sections too a main create the
                perfect layout. Sections are firmly of organised into the
                perfect start.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
