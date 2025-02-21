import { getRanking } from "@/http/api";
import medalGold from "../../../assets/Medal_1.svg";
import medalSilver from "../../../assets/Medal_2.svg";
import medalBroze from "../../../assets/Medal_3.svg";

import Image from "next/image";

export async function Ranking() {
	const { ranking } = await getRanking();

	return (
		<div className="w-full max-w-[440px] space-y-5">
			<h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
				Ranking de indicações
			</h2>

			<div className="space-y-4">
				{ranking.map((item, index) => {
					const rankingPosition = index + 1;
					return (
						<div
							key={item.id}
							className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3"
						>
							<span className="text-sm text-gray-300 leading-none">
								<span className="font-semibold">{rankingPosition}º</span> |{" "}
								{item.name}
							</span>
							<span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
								{item.score}
							</span>

							{rankingPosition === 1 && (
								<Image
									src={medalGold}
									alt="medalha de ouro"
									className="absolute top-0 right-8"
								/>
							)}
							{rankingPosition === 2 && (
								<Image
									src={medalSilver}
									alt="medalha de prata"
									className="absolute top-0 right-8"
								/>
							)}
							{rankingPosition === 3 && (
								<Image
									src={medalBroze}
									alt="medalha de prata"
									className="absolute top-0 right-8"
								/>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
}
