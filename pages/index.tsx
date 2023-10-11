import DefaultLayout from "@/layouts/default";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import {Card, CardBody, Progress} from "@nextui-org/react";
import {CircularProgress} from "@nextui-org/react";
import {Divider} from "@nextui-org/react";
import {Chip} from "@nextui-org/react";
// import {CheckIcon} from "./CheckIcon";

export default function IndexPage() {
	const [loading, setLoading] = useState(false);
	const [donoDoPerfil, setDonoDoPerfil] = useState('Marcelio');
	const [value, setValue] = React.useState(0);

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


			<Card className="theme-background p-0">
				<CardBody className="theme-color p-0">

				<div className="flex items-start justify-around  ">
					<p>
						3 de 5 hábitos
						completados hoje!
					</p>
				</div>
				<div className="flex items-end py-0 my-0 justify-around align-bottom ">
					{/* <CircularProgress
						aria-label="Loading..."
						size="lg"
						value={value}
						color="success"
						showValueLabel={true}
					/> */}

					<div className="flex  items-start break-normal  justify-normal gap-8 py-8 md:py-10 sm:py-8 ">
						<Image src={'/images/user-icon.svg'} width={34} height={34} alt="User Icon" /> <br/>
						<span className="text-2xl font-bold text-center text-gray-800">
							Olá, {donoDoPerfil}
						</span>
					</div>
					<Image src={'/images/dia-icon.svg'} width={130} height={122} alt="Dia Icon" />

				</div>
				</CardBody>
			</Card>

			<Progress  color="success" aria-label="Loading..." value={80} className="max-w"/>

			<Divider className="my-4" orientation="horizontal" />

			<Card className="theme-card-light-background">
				<CardBody className="theme-card-light-color">
					<h2 className="theme-card-title">Hábitos / rotina</h2>
					<div className="theme-card-light-item-list flex items-start justify-around gap-2 py-2 md:py-4 sm:py-4">
						<span >Journaling </span>
						<Chip
							size="lg"
							variant="faded"
							color="secondary"
						>
							Chip
						</Chip>

					</div>
					<div className="theme-card-light-item-list flex items-start justify-around gap-2 py-2 md:py-4 sm:py-4">
						<span >Journaling </span>
						<Chip
							size="lg"
							variant="faded"
							color="secondary"
						>
							Chip
						</Chip>

					</div>
					<div className="theme-card-light-item-list flex items-start justify-around gap-4 py-4 md:py-6 sm:py-6">
						<span >Journaling diarias com mais items para descrever </span>
						<Chip
							size="lg"
							variant="faded"
							color="secondary"
						>
							Chip
						</Chip>

					</div>
				</CardBody>
			</Card>

		</DefaultLayout>
	);
}
