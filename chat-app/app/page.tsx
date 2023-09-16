import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Home() {
	const state = true;
  return (
	<div className="flex flex-col">
		<p className='text-3xl font-bold text-indigo-300'>
			Hello chat app
		</p>
		<Button className={
			cn('bg-cyan-50', state && 'bg-slate-600')			
		}>
			click me
		</Button>
	</div>
  )
}
