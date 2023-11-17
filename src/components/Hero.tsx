import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-white">
      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <svg
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-6 sm:py-6 lg:px-6 lg:py-6 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Jose Velasco
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                Hey there! I&apos;m a passionate software engineer born and raised in the vibrant city of Los Angeles. My primary tech stack revolves around Node.js/Express on the backend and React (often with Redux) on the frontend. You&apos;ll often find me actively contributing to various open-source products, sharing my knowledge and expertise with the  community.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  When I step away from my keyboard, I&apos;m all about
                  embracing the outdoors. Whether it&apos;s roaming the streets
                  on a run, conquering trails during a hike, or casting a line
                  into the water, I thrive on the balance of nature.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  I&apos;m a firm believer in the philosophy that beautiful
                  software is for beautiful humans. It&apos;s not just about
                  functionality; it&apos;s about creating an experience that
                  resonates visually and functionally. As my favorite global
                  street art from Notion says, &quot;Software should be
                  beautiful,&quot; and I carry that ethos into every line of
                  code I write.
                </p>
                <div className="mt-10 flex items-center gap-x-6"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            width={6000}
            height={4000}
            priority={true}
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src="/profile.JPG"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
