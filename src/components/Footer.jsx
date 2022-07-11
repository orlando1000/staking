import { AiOutlineArrowUp } from "react-icons/ai";
import { FiFacebook, FiLinkedin, FiTwitter, FiYoutube } from "react-icons/fi";
import { IoLogoReddit } from "react-icons/io5";
import { TbLanguageKatakana } from "react-icons/tb";
import logo from "../assets/img/logo/logo.png";
const Footer = () => {
	return (
		<footer className="footer-area" data-aos="fade-up">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12 col-md-8 text-center">
						<div className="footer-items">
							<a className="navbar-brand" href="index.html">
								<img src={logo} alt="" />
							</a>
							<div className="social-icons d-flex justify-content-center my-4">
								<a
									className="facebook"
									href="https://www.facebook.com/"
									target="_blank"
									rel="noreferrer"
								>
									<FiFacebook />
									<FiFacebook />
								</a>
								<a
									className="twitter"
									href="https://twitter.com/"
									target="_blank"
									rel="noreferrer"
								>
									<FiTwitter />
									<FiTwitter />
								</a>
								<a
									className="linkedin"
									href="https://www.linkedin.com/"
									target="_blank"
									rel="noreferrer"
								>
									<FiLinkedin />
									<FiLinkedin />
								</a>
								<a
									className="reddit"
									href="https://www.reddit.com/"
									target="_blank"
									rel="noreferrer"
								>
									<IoLogoReddit />
									<IoLogoReddit />
								</a>
								<a
									className="vkontakte"
									href="https://discord.com/"
									target="_blank"
									rel="noreferrer"
								>
									<TbLanguageKatakana />
									<TbLanguageKatakana />
								</a>
								<a
									className="youtube"
									href="https://www.youtube.com/"
									target="_blank"
									rel="noreferrer"
								>
									<FiYoutube />
									<FiYoutube />
								</a>
							</div>
							<ul className="list-inline">
								<li className="list-inline-item">
									<a href="tier-system.html">Features</a>
								</li>
								<li className="list-inline-item">
									<a href="tokenomics.html">KYC</a>
								</li>
								<li className="list-inline-item">
									<a href="contact.html">How It Works</a>
								</li>
								<li className="list-inline-item">
									<a href="blog.html">Audit</a>
								</li>
								<li className="list-inline-item">
									<a href="login.html">Privacy Policy</a>
								</li>
							</ul>
							<div className="copyright-area py-4">
								&copy;2022 ProjectName, All Rights Reserved
							</div>
						</div>
						<div id="scroll-to-top" className="scroll-to-top">
							<a href="#header" className="smooth-anchor">
								<AiOutlineArrowUp />
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
