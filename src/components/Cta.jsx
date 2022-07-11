import { IoRocketOutline } from "react-icons/io5";
const Cta = () => {
	return (
		<section className="cta-area p-0">
			<div className="container">
				<div className="row">
					<div className="col-12 card" data-aos="fade-up">
						<div className="row align-items-center justify-content-center">
							<div className="col-12 col-md-6 mt-4 mt-md-0">
								<h2 className="m-0">Apply for IDO</h2>
								<p>
									Get access to huge set of tools to seamlessly handle
									your game's integration with blockchain.
								</p>
								<a
									className="btn btn-bordered active d-inline-block"
									href="apply.html"
								>
									<IoRocketOutline className="me-2" /> Apply Now
								</a>
							</div>
						</div>
						<a className="cta-link" href=""></a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Cta;
