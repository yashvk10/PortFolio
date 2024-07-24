import './Resume.css'

function Resume() {
    return (<>

        <section id="resume" class="resume">
            <div class="container">

                <div class="section-title">
                    <h2 style={{letterSpacing:"2px"}}><b>RESUME</b></h2>
                   
                </div>

                <div class="row">
                    <div class="col-lg-6">
                        <h3 class="resume-title">Professional Experience</h3>
                        <div class="resume-item">
                            <h4>Digital Associate Engineer (Backend Developer)</h4>
                            <h5>Jan 2023 - Present</h5>
                            <p><em>Sonata Software ltd </em></p>
                            <p>
                                <ul>
                                    <li>Proficient in crafting robust and scalable applications using
                                        Spring Boot, with a track record of successfully
                                        implementing comprehensive CRUD operations, integrating
                                        Jwt for secure authentication, leveraging Redis for enhanced
                                        performance, and enabling seamless PDF/Excel download
                                        functionalities.</li>
                                    <li> Demonstrated commitment to delivering scalable solutions
                                        is evident in contributions to API endpoint development
                                        while strictly adhering to Spring Boot best practices. Utilized AWS Lambda and Java to perform file manipulation
                                        tasks like format conversion and zipping.</li>
                                    <li> Leveraging
                                        Lambda’s scalability. Responsibilities included clean code
                                        development, error handling, and seamless integration with
                                        other AWS services for reliable system functionality. Tools using: Splunk, Git, AzureDevops, Aws lambda, Jira</li>
                                </ul>
                            </p>
                        </div>


                    </div>
                    <div class="col-lg-6">

                        <h3 class="resume-title">Education</h3>
                        
                        <div class="resume-item">
                            <h4>B.Tech in Electrical Engineering</h4>
                            <h5>2019 - 2022</h5>
                            <p><em>Dr.BabaSaheb Ambedkar Technological University,Lonere,Maharashtra</em></p>
                            <p>CGPA :<bold>8.65</bold></p>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    </>);
}

export default Resume;