import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>


		<div class="container">
		 <div class="row card each-project" ng-repeat="project in projects">
                <div class="col-xs-12 col-sm-2">
                    <img class="img-circle round-image img-responsive" ng-src="images/pizza.jpg" src="img/diva.png" />
                </div>    
                <div class="col-xs-12 col-sm-10">
                    <div class="project-data">
                    <h3 class="project-title">Consumer Care Portal - DivaCup</h3>
                    <p class= "ng-binding">Designed and developed a web application which will be used to offer support to users of The DivaCup for after business hours. The web portal is developed using HTML5, CSS3, Java Script, jQuery, and Bootstrap framework.
This portal has different sections for women between the age group of 11-50. This will be a self-contained product whose link will be sent to the customers when they call up for help after the work hours of the company. This portal contains all the descriptive information about the products, videos and images related to various issues and doubts of the consumers regarding DivaCup products.
</p>
                    <ul class="pull-left">
                        <li ng-repeat="technology in project.tech" class="ng-binding ng-scope">HTML5</li>
						<li ng-repeat="technology in project.tech" class="ng-binding ng-scope">CSS3</li>
						<li ng-repeat="technology in project.tech" class="ng-binding ng-scope">JS</li>
						<li ng-repeat="technology in project.tech" class="ng-binding ng-scope">BOOTSTRAP</li>
						
                    </ul>
                  
                    
                    </div>
                </div>
                
            </div>
			</div>
			
						<div className="row">
							<div className="col-md-12 "> 
							{/* animate-box" >  */}
							{/* data-animate-effect="fadeInLeft"> */}
								<div className="row card each-project" ng-repeat="project in projects" style={{backgroundImage: 'url(images/prats1.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3>Consumer Care Portal - DivaCup</h3>
											<span>Designed and developed a web application which will be used to offer support to users of The DivaCup for after business hours. The web portal is developed using HTML5, CSS3, Java Script, jQuery, and Bootstrap framework.
This portal has different sections for women between the age group of 11-50. This will be a self-contained product whose link will be sent to the customers when they call up for help after the work hours of the company. This portal contains all the descriptive information about the products, videos and images related to various issues and doubts of the consumers regarding DivaCup products.</span>
											<p className="icon">
												{/* <span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span> */}
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/img-2.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 02</a></h3>
											<span>Animation</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/img-3.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 03</a></h3>
											<span>Illustration</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/img-4.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 04</a></h3>
											<span>Application</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/img-5.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 05</a></h3>
											<span>Graphic, Logo</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/img-6.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 06</a></h3>
											<span>Web Design</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
							</div>
						</div>
					</div>
				</section>
      </div>
    )
  }
}
