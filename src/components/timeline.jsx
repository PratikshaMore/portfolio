import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Developer - Radius Finanial Group Inc <span>Sep' 2018 - Present</span></h2>
                        <p>●	Building and maintaining REST APIs for CRUD manipulations on financial documents and meta data
●	Created an interactive web client tool that consumes the APIs for the same
●	Integrated existing tools for Free Form extraction and Zonal OCR/ICR with the document pipeline
●	Analyzed historical financial data and working on generating predictive Business Intelligence models using Ephesoft that develops Intelligent Document Capture system and intends to automate the whole document processing workflow
</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Engineering Intern - Checkmate Diabetes <span>July 2018 - Sep' 2018</span></h2>
                        <p>●	Contributed to the development of mobile app to help diabetes patients track blood sugar levels and medication for Web, Android and iOS
●	Used Python, Swift, Java to develop a feedback module of the application to collect and analyze beta user feedback

</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Engineer - MindCraft Software Pvt. Ltd. <span>May 2015 - June 2016</span></h2>
                        <p>●	Developed web application for tracking tax related appeals and judgments of the income-tax department, managed server-side configurations and worked as a database developer
●	Responsible for developing and migrating web services for Reliance Life Insurance. Database and web portal development for National Judicial Reference System (NJRS), Income Tax Department of Govt. of India
●	Successfully integrated the online payment portals with insurance web portal, created web services using Web sphere integration developer for policy creation and updates, worked on database maintenance and web service testing

</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
