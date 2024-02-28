import Image from "next/image";
import "./page.module.css";
export default function Home() {
	return (
		<div className="screenSizing">
			<h1>Hello World, I am back bitches!!!</h1>

			<button className="btn btn-primary w-64 rounded-full  mb-3">
				Click here
			</button>
			<button className="btn btn-secondary w-64 rounded-full  mb-3 ml-3">
				Go back
			</button>

			<div className="flex gap-4">
				<div className="card w-96 bg-base-100 shadow-xl">
					<figure>
						<img
							src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
							alt="Shoes"
						/>
					</figure>
					<div className="card-body bg-white">
						<h2 className="card-title">Shoes!</h2>
						<p>If a dog chews shoes whose shoes does he choose?</p>
						<div className="card-actions justify-end">
							<button className="btn btn-primary">Buy Now</button>
						</div>
					</div>
				</div>

				<div className="card w-96 bg-base-100 shadow-xl">
					<figure>
						<img
							src="https://www.shop.segmic.com/cdn/shop/files/KS0559_1024x1024.jpg?v=1695280865"
							alt="Shoes"
						/>
					</figure>
					<div className="card-body bg-white">
						<h2 className="card-title">Smart Robots!</h2>
						<p>
							Build a robot from scratch and get to decide what it
							does{" "}
						</p>
						<div className="card-actions justify-end">
							<button className="btn btn-primary">Buy Now</button>
						</div>
					</div>
				</div>

        <div className="card w-96 bg-base-100 shadow-xl">
					<figure>
						<img
							src="./images/blackJacket.jpg" 
							alt="Shoes"
						/>
					</figure>
					<div className="card-body bg-white">
						<h2 className="card-title">Smart Robots!</h2>
						<p>
							Build a robot from scratch and get to decide what it
							does{" "}
						</p>
						<div className="card-actions justify-end">
							<button className="btn btn-primary">Buy Now</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
