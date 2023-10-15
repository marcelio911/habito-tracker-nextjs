import DefaultLayout from "@/layouts/default";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { Card, CardBody, Progress } from "@nextui-org/react";
import { CircularProgress } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";
import { Chip } from "@nextui-org/react";
// import {CheckIcon} from "./CheckIcon";

export default function IndexPage() {
	const [loading, setLoading] = useState(false);
	const [donoDoPerfil, setDonoDoPerfil] = useState('Marcelio');
	const [value, setValue] = React.useState(0);

	const hoje = new Date().toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

	React.useEffect(() => {
		const interval = setInterval(() => {
			setValue((v) => (v >= 100 ? 0 : v + 10));
		}, 500);

		return () => clearInterval(interval);
	}, []);


	useEffect(() => {
		console.log('loading', loading);
	}, [loading]);

	return (
		<DefaultLayout >

			<div className="p-0 flex flex-row items-start py-0 my-0 justify-between inline-block align-middle ">
				<div className="flex flex-col items-start justify-start gap-2 py-2 md:py-4 sm:py-4 ">
					<span className="text-2xl today font-bold text-center text-cyan-900">
						{hoje}
					</span>

					<div className="flex flex-row items-start justify-start gap-2 py-2 md:py-4 sm:py-4 ">
						<span className="text-2xl font-bold text-center text-cyan-900">
								Olá,
						</span>
						<span className="text-2xl font-bold text-center">{donoDoPerfil}</span>
						<Image src={'/images/user-icon.svg'} width={34} height={34} alt="User Icon" />
					</div>
				</div>
				<Image src={'/images/dia-icon.svg'} width={130} height={122} alt="Dia Icon" />
			</div>
			<div className="theme-background theme-color p-0 flex items-end py-0 my-0 justify-around align-bottom ">

				<div className="flex flex-col items-start justify-start gap-2 py-2 md:py-4 sm:py-4 ">

				</div>

				<div className="flex  items-start justify-around  ">
					<CircularProgress
						aria-label="Loading..."
						size="lg"
						value={value}
						color="success"
						showValueLabel={true}
					/>
					<p>
						3 de 5 hábitos
						completados hoje!
					</p>
				</div>
			</div>

			<Progress color="success" aria-label="Loading..." value={80} className="max-w" />

			<Divider className="my-2" orientation="horizontal" />

			<Card className="theme-box theme-box-background">
				<CardBody className="theme-card-color">
					<h2 className="theme-box-title">Hábitos / rotina</h2>
					<div className="theme-card-item-list completed flex flex-row items-start justify-between gap-2 py-2 md:py-4 sm:py-4 m-0">
						<span className="theme-card-item-timer-event inline-block align-middle completed">06:00</span>
						<div className="theme-card-item-list-box completed flex flex-row justify-between gap-2 py-2 md:py-4 sm:py-4 p-4">
							<span >Acordar cedo </span>
							<Image src="/images/item-completed.svg" width={30} height={30} alt="Check Icon" />
						</div>
					</div>
					<div className="theme-card-item-list flex flex-row items-start justify-between gap-2 py-2 md:py-4 sm:py-4 m-0">
						<span className="theme-card-item-timer-event inline-block align-middle">06:00</span>
						<div className="theme-card-item-list-box flex flex-row justify-between gap-2 py-2 md:py-4 sm:py-4 p-4 ">
							<span >Escovar os dentes </span>
							<Chip
								size="lg"
								variant="faded"
								color="primary"
							>
								Checar
							</Chip>
						</div>
					</div>

					<div className="theme-card-item-list flex flex-row items-start justify-between gap-2 py-2 md:py-4 sm:py-4 m-0">
						<span className="theme-card-item-timer-event inline-block align-middle">06:00</span>
						<div className="theme-card-item-list-box flex flex-row justify-between gap-2 py-2 md:py-4 sm:py-4 p-4">
							<span >Tomar o café da manhã </span>
							<Chip
								size="lg"
								variant="faded"
								color="primary"
							>
								Checar
							</Chip>
						</div>
					</div>

					<div className="theme-card-item-list flex flex-row items-start justify-between gap-2 py-2 md:py-4 sm:py-4 m-0">
						<span className="theme-card-item-timer-event inline-block align-middle">06:00</span>
						<div className="theme-card-item-list-box flex flex-row justify-between gap-2 py-2 md:py-4 sm:py-4 p-4">
							<span >Levar as crianças para escola </span>
							<Chip
								size="lg"
								variant="faded"
								color="primary"
							>
								Checar
							</Chip>
						</div>
					</div>

				</CardBody>
			</Card>

		</DefaultLayout>
	);
}
