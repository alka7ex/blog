import Image from 'next/image'
import { Container } from 'postcss'
export default function blog() {
  return (
    <div className='bg-base-200'>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:flex-row-reverse">
          <img src="1682770822163.jpg" className="max-w-sm rounded-2xl h-72 md:h-96 w-max object-contain shadow-2xl" />
          <div className=''>
            <h1 className="text-5xl font-bold text-center md:text-left">Box Office News!</h1>
            <p className="py-6 text-center md:text-left">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
        </div>
      </div>
      <div>
        <div className="container px-4 pb-16 bg-base-200 xl:pl-24">
          <h2 className='my-4 text-2xl font-bold'>
            Work Experience
          </h2>
          <p className=''>
            Minim sit ut aliquip ut sit officia exercitation amet consequat officia proident. Aliquip incididunt deserunt sit nulla sunt exercitation qui nostrud nostrud. Cillum aute aute velit ipsum.
            Duis dolore aliquip deserunt dolor occaecat aute sunt ex ea culpa eiusmod. Pariatur nulla do laboris nulla. Ea ut consequat labore nostrud duis irure labore dolore ipsum excepteur consectetur.
            Adipisicing exercitation reprehenderit quis ipsum enim velit. Excepteur laborum magna ex et est duis. Veniam minim voluptate aliquip elit ipsum ea ipsum nulla fugiat officia ea occaecat velit consequat.
          </p>
          <h2 className='my-4 text-2xl font-bold'>
            Skills
          </h2>
          <p className=''>
            Minim sit ut aliquip ut sit officia exercitation amet consequat officia proident. Aliquip incididunt deserunt sit nulla sunt exercitation qui nostrud nostrud. Cillum aute aute velit ipsum.
            Duis dolore aliquip deserunt dolor occaecat aute sunt ex ea culpa eiusmod. Pariatur nulla do laboris nulla. Ea ut consequat labore nostrud duis irure labore dolore ipsum excepteur consectetur.
            Adipisicing exercitation reprehenderit quis ipsum enim velit. Excepteur laborum magna ex et est duis. Veniam minim voluptate aliquip elit ipsum ea ipsum nulla fugiat officia ea occaecat velit consequat.
          </p>
          <h2 className='my-4 text-2xl font-bold'>
            Education
          </h2>
          <p className=''>
            Minim sit ut aliquip ut sit officia exercitation amet consequat officia proident. Aliquip incididunt deserunt sit nulla sunt exercitation qui nostrud nostrud. Cillum aute aute velit ipsum.
            Duis dolore aliquip deserunt dolor occaecat aute sunt ex ea culpa eiusmod. Pariatur nulla do laboris nulla. Ea ut consequat labore nostrud duis irure labore dolore ipsum excepteur consectetur.
            Adipisicing exercitation reprehenderit quis ipsum enim velit. Excepteur laborum magna ex et est duis. Veniam minim voluptate aliquip elit ipsum ea ipsum nulla fugiat officia ea occaecat velit consequat.
          </p>
        </div>
      </div>
    </div>
  )
}
