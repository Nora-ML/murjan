import React from "react";

// Components
import Hero from "./components/landing/hero.js";
import PostHero from "./components/landing/post_hero.js";
import GemColor from "./components/landing/gem_color.js";
import PreLoader from "./components/landing/pre_loader.js";
import Script from "next/script.js";
import { getLanding, getUser } from "./lib/serverQueryFnc.js";

//Styling
import Footer from "./components/Navigation/footer.js";
import "./landing.css";
import Nav from "./components/Navigation/Nav.js";

export const dynamic = "force-dynamic";

const Landing = async () => {
	console.log("[ROOT PAGE - LANDING] -server");
	const data = await getLanding();
	let user = await getUser("name role access");

	console.log("[LANDING DATA]", data);
	return (
		<>
			<Nav currentUser={user} />
			<div className="layout_container">
				<main className="landing_container">
					<PreLoader display={data ? true : false} />
					{data && (
						<>
							<Hero />
							<PostHero about={data.postHero} />
							<GemColor gem={data.slideDisplay} />
						</>
					)}

					{/* <CategoryNav />
					<Collection /> */}
				</main>
				{data && <Footer />}
			</div>
			<Script src="/locoAll.js" />
		</>
	);
};

export default Landing;
