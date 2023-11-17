const posts = [
  {
    id: 1,
    title: 'Master the JavaScript Interview: What is a Closure?',
    href: 'https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36',
    description:
      'Master the JavaScript Interview is a series of posts designed to prepare candidates for common questions they are likely to encounter when applying for a mid to senior-level JavaScript position',
    date: 'January 7, 2016',
    datetime: '2026-01-7',
    category: { title: 'Javascript'},
    author: {
      name: 'Eric Elliott',
      role: 'Software Engineer',
      href: 'https://medium.com/@_ericelliott',
      
    },
  },
  {
    id: 2,
    title: 'How to Migrate a React Project from JavaScript to TypeScript',
    href: 'https://hackernoon.com/how-to-migrate-a-react-project-from-javascript-to-typescript',
    description:
      "Now, if you've worked with JavaScript, you know it's like that old, comfortable pair of shoes - a little worn, sometimes unpredictable, but familiar. TypeScript, however, is like getting a shoe upgrade with custom insoles; it's the same walking experience but with extra support.",
    date: 'October 19, 2023',
    datetime: '2023-10-19',
    category: { title: 'Typescript'},
    author: {
      name: 'Leandro Nuñez',
      role: 'Software Engineer',
      href: 'https://hackernoon.com/u/leandronnz',
      
    },
  },
  {
    id: 3,
    title: 'Bun: The JavaScript runtime taking on Node.js and Deno',
    href: 'https://blog.logrocket.com/bun-javascript-runtime-taking-node-js-deno/',
    description:
      "Bun is a new, blazing fast JavaScript runtime that has everyone talking. To understand why Bun is such a big deal, let's first review some important JavaScript history.",
    date: 'January 22, 2022',
    datetime: '2022-1-22',
    category: { title: 'Bun'},
    author: {
      name: 'Alex Merced',
      role: 'Software Engineer',
      href: 'https://blog.logrocket.com/author/alexmerced/',
      
    },
  },
  {
    id: 4,
    title: 'What Is a Docker Image?',
    href: 'https://blog.packagecloud.io/what-is-a-docker-image/',
    description:
      "Docker images are the building blocks for creating applications in isolated, portable small runtime environments. Using Docker images eliminates the complexities of building and deploying code.",
    date: 'April 21, 2022',
    datetime: '2022-4-21',
    category: { title: 'Docker'},
    author: {
      name: 'Krish Sivanathan',
      role: 'DirOps',
      href: 'https://blog.packagecloud.io/author/krish-sivanathan/',
      
    },
  },
  {
    id: 5,
    title: 'Data Structures & Algorithms I Used Working at Tech Companies',
    href: 'https://blog.pragmaticengineer.com/data-structures-and-algorithms-i-actually-used-day-to-day/',
    description:
      "Do you actually use data structures and algorithms on your day to day job? I've noticed a growing trend of people assuming algorithms are pointless questions that are asked by tech companies purely as an arbitrary measure.",
    date: 'July 14, 2020',
    datetime: '2020-7-24',
    category: { title: 'Data Structures & Algorithms'},
    author: {
      name: 'Gergely Orosz',
      role: 'Software Engineer',
      href: 'https://blog.pragmaticengineer.com/about/',
      
    },
  },
  {
    id: 6,
    title: 'The Truth About Git Metrics Tools',
    href: 'https://abinoda.com/git-metrics',
    description:
      "There've recently been a couple of interesting Twitter discussions about engineering analytics tools, namely whether people actually use them and the questionable metrics that they expose.",
    date: 'January 24, 2023',
    datetime: '2023-1-23',
    category: { title: 'Git'},
    author: {
      name: 'Abi Noba',
      role: 'Software Engineer',
      href: 'https://abinoda.com/about',
      
    },
  },
  
]

export default function Reads() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">My Reading List
</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
          This is a collection of software engineering blogs that I have read and would recommend to others.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <p
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </p>
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
              <div className="relative mt-8 flex items-center gap-x-4">
                
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href} target="_blank">
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
