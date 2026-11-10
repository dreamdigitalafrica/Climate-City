import Team from '../about/components/Team'
import Image from 'next/image'
import heroImage from '@/assets/images/about/about-hero-image.jpg'
export const metadata={title:"Leadership"}
export default function Page(){return <><section className="relative overflow-hidden bg-dark pt-46 pb-25"><Image src={heroImage} alt="" className="absolute inset-0 h-full w-full object-cover"/><div className="absolute inset-0 bg-dark/60"/><div className="container relative text-white"><h1 className="text-4xl md:text-[64px]">Leadership</h1></div></section><Team /></>}
