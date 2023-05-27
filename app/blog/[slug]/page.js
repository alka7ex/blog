import Image from 'next/image'
import { Container } from 'postcss'
import Head from 'next/head'

export const metadata = {
  title: "Resume",
  description: "This is farhienza haikal resume that to be share with the world",
};

export default function blog({ slug: sdfa }) {
  return (
    <div className=''>
      <div className="container flex flex-cols mt-8 mb-12 mx-8 xl:pl-24">
        <div className='avatar'>
          <div className='w-24 rounded-full'>
            <img src="1682770822163.jpg" className="max-w-sm rounded-lg shadow-2xl" />
          </div>
        </div>
        <div className='container flex-col mx-8 my-auto'>
          <h4 className="text-sm font-bold my-2 md:text-md">24-January-2023</h4>
          <h2 className="text-xl font-bold my-2 md:text-2xl">Farhienza Haikal</h2>
          <h5 className='text-lg md:text-xl'>Associate Product Manager @ RedDoorz</h5>
        </div>
      </div>
      <div>
        <div className="container px-4 pb-16 xl:pl-24 mx-4">
          <h1 className='my-8 text-4xl font-bold'>
            Work Experience
          </h1>
          <p className='mx-auto md:text-xl'>
            Minim sit ut aliquip ut sit officia exercitation amet consequat officia proident. Aliquip incididunt deserunt sit nulla sunt exercitation qui nostrud nostrud. Cillum aute aute velit ipsum.
            Duis dolore aliquip deserunt dolor occaecat aute sunt ex ea culpa eiusmod. Pariatur nulla do laboris nulla. Ea ut consequat labore nostrud duis irure labore dolore ipsum excepteur consectetur.
            Adipisicing exercitation reprehenderit quis ipsum enim velit. Excepteur laborum magna ex et est duis. Veniam minim voluptate aliquip elit ipsum ea ipsum nulla fugiat officia ea occaecat velit consequat.
            <br>
            </br>
            <img src='image3.jpg' className='mx-auto my-4'></img>
            Reprehenderit tempor aute cupidatat labore minim sint. Irure labore nisi ex elit eiusmod velit fugiat minim nisi eu. Consectetur culpa sunt id nisi excepteur ullamco esse nulla. Nisi cillum esse consequat excepteur adipisicing sint eu voluptate laboris laboris tempor magna nisi. Sint consequat minim proident Lorem ullamco cillum amet proident.
            Sit esse ea enim nulla irure irure adipisicing incididunt magna. Nisi elit nulla aliquip reprehenderit esse. In exercitation ad minim ea dolor anim magna ullamco. Ex commodo ullamco pariatur consectetur eu mollit veniam occaecat labore eiusmod commodo. Adipisicing exercitation deserunt enim cillum aliquip. Velit mollit quis Lorem aliqua in dolor ipsum irure anim dolore id tempor sit.
            Adipisicing do et culpa ex pariatur nisi magna. Qui eiusmod sint magna et culpa adipisicing sint et consequat fugiat enim do consectetur occaecat. Quis anim laborum eiusmod commodo sunt consequat eiusmod commodo mollit qui Lorem. Ullamco ea est sunt officia laboris ex aliquip in dolore cupidatat et cupidatat id eu. Occaecat ad aliquip laborum in eiusmod quis enim nulla eu culpa enim.
            Incididunt ad nostrud eiusmod voluptate. Mollit nulla ea minim incididunt nostrud quis aute qui velit ut consequat. Anim aliquip consectetur elit commodo nostrud sit duis proident aute adipisicing nostrud exercitation ullamco in. Qui eu reprehenderit labore nisi eiusmod aute adipisicing anim est tempor esse tempor. Anim cillum ipsum est deserunt non amet voluptate id mollit non irure laboris.
          </p>
        </div>
      </div>
    </div>
  )
}
