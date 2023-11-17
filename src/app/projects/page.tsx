
const posts = [
  {
    id: 1,
    title: 'NexTrace',
    href: 'https://www.nextrace.dev/',
    description:
      'NexTrace is a VSCode extension that helps Next.js developers identify network request performance bottlenecks and monitor console logs in real time.',
    imageUrl:
      '/osp.gif',
    category: { title: 'Developer Tool', href: 'https://www.nextrace.dev/' },
  },
  {
    id: 2,
    title: 'MovieSmith',
    href:'https://github.com/Axolotls-United/MovieBrowser',
    description:
      'A movie browser application that allows users to explore, discover, and organize their movie interests with ease and convenience.',
    imageUrl:
      '/movie.gif',
    category: { title: 'Movie', href: 'https://github.com/Axolotls-United/MovieBrowser' },
  },
  {
    id: 3,
    title: 'MarketSmith',
    href: 'https://github.com/Marketsmith/Marketsmith',
    description:
      'A versatile e-commerce platform that empowers sellers and buyers with seamless listing, browsing, purchasing, and review features.',
    imageUrl:
      '/market.gif',
    category: { title: 'E-Commerce', href: 'https://github.com/Marketsmith/Marketsmith' },

    
  },
  
]

export default function Projects() {
  return (
    <>
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Open Source Projects</h2>
          
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-12 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col items-start justify-between">
              <div className="relative w-full">
                <img
                  src={post.imageUrl}
                  alt=""
                  className="aspect-[7/4] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[16/8]"
                  // className="aspect-[16/5] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[16/8]"

                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <a
                    target="_blank"
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-800 px-3 py-1.5 font-medium text-white hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href} target="_blank">
                      
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}
