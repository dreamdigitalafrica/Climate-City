import Blog from '../home/components/Blog'
export const metadata = { title: 'Insights | Climate City', description: 'Explore Climate City’s approach to sustainable design, water, enterprise and learning.' }
export default function InsightsPage() {
 return <div className="pt-32 md:pt-40 bg-white"><div className="container"><h1 className="text-4xl md:text-5xl font-medium text-default-950">Insights</h1></div><Blog /></div>
}
