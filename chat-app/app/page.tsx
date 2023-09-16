import { Button } from "@/components/ui/button";

export default function Home() {
  return (
	<div className="flex flex-col">
		<p className='text-3xl font-bold text-indigo-300'>
			Hello chat app
		</p>
		<Button>
			click me
		</Button>
	</div>
  )
}
