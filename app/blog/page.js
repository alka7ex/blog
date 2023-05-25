import Image from 'next/image'
import { Container } from 'postcss'
export default function blog() {
  return (
    <div>
      <div className='my-5 mx-auto bg-red-400 h-40 w-auto'>for container</div>
      <div className='my-5 mx-auto bg-green-400 h-40 w-auto'>for flex</div>
    </div>
  )
}
