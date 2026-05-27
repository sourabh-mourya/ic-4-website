import { React } from 'react'
import Nav from '../../components/Navbar/Nav'
import "./Topics.css"

import Footer from '../../components/Footer/Footer'
const Topics = () => {
    const mechanicalEngineering =[
    "Materials Engineering",
    "Thermal and fluid sciences drive advancements in design and optimization",
    "Robotics and mechatronics enhance manufacturing",
    "Tribology and computational mechanics address challenges",
    "Innovations in space exploration support Earth monitoring and commercialization"
  ];

    
    const civilEngineering = [
  "Smart structures leverage innovations to enhance urban infrastructure",
  "Water resource management",
  "Sustainable materials",
  "Construction automation and robotics enable physical resilience",
  "Strategies support performance-based design and climate resilience",
  "Innovative waste management strategies",
  "Disaster resilience strategies address urban challenges"
];

        const electricalEngineering = [
        "Smart grid technologies and energy management enhance renewable energy integration",
        "IoT applications and machine learning support advanced power systems and electric vehicle infrastructure",
        "Innovations in energy storage",
        "Wireless communication",
        "Smart sensors drive automation",
        "AI optimizes power systems"
];
        const computerTechnologies =  [
  "AI and ML boost data science",
  "Cloud computing enhances scalability and cybersecurity",
  "IoT connects devices",
  "Blockchain secures transactions",
  "Quantum computing drives digital transformation",
  "Green computing drives digital transformation",
  "Hyperloop innovations revolutionize industries",
  "Precision agriculture revolutionizes industries"
];

const electronicAndCommuincation = [
  "Communication systems",
  "Signal processing",
  "Embedded systems",
  "Telecommunications",
  "VLSI design",
  "Automation"
];


        const theSpectrum = [
  "Eco-friendly methods",
  "Circular economy models",
  "Human-centric approaches in Industry 5.0",
  "Global supply chain dynamics",
  "Quality management",
  "Privacy and security",
  "Environmental impacts",
  "Supported by relevant case studies"
];
 

const mathematics = [
  "Game Theory",
  "Cryptography",
  "Operation Research",
  "Optimization Theory",
  "Fuzzy Theorem",
  "Computer Aided Geometrical Designs Using Splines",
  "Graph Theory and Combinatorics",
  "Mathematical and Logical Foundation",
  "Number Theory",
  "Numerical Analysis and Computational Mathematics",
  "Probability and Statistics",
  "Modeling and Simulation",
  "Image Processing and Fixed Point Theory",
  "Discrete Mathematics",
  "General Mathematical Research",
  "Multidisciplinary Research"
];

const techDomains = [
  "AI and ML",
  "Data Science",
  "Cloud Computing",
  "Cybersecurity",
  "Big Data",
  "Database and Data Mining",
  "Blockchain",
  "Quantum Computing",
  "Cryptography"
];

const electronicsDomains = [
  "Communication Systems",
  "Wireless Communication",
  "Optical Communication",
  "Signal Processing",
  "Embedded Systems",
  "VLSI Design and Microelectronics",
  "IoT and Automation",
  "Antennas",
  "High Power Amplifiers",
  "Microwave Devices"
];

const itDomains = [
  "IT Convergence Technology",
  "Information Systems",
  "Wireless Sensor Networks",
  "Healthcare Informatics",
  "Web-Based Learning"
];

const measurementAndControlDomains = [
  "Medical and Biological Measurement",
  "Measurement Techniques",
  "Sensor Networks",
  "Nanotechnology",
  "Speech, Audio and Video Signal Processing",
  "Optical Control, Process Control and Distributed Control"
];

const energyAndPowerDomains = [
  "Smart Grid Technologies",
  "Energy Management",
  "Renewable Energy Integration",
  "Electric Vehicle Applications",
  "Innovations in Energy Storage",
  "AI Optimized Power Systems"
];

const roboticsDomains = [
  "Industrial Robotics",
  "Computational Intelligence in Robotics",
  "Field Robotics",
  "Human-Robot Interaction",
  "Humanoid Robotics",
  "Design and Control"
];
    return (
        <>
            <Nav />

            {/* <StartHero/> */}
            <section className="text-gray-600 body-font mt-4">
                <div className="container px-5 py-8 mx-auto bg-[#E3F0FB] ">
                    <div className="w-full mx-auto text-center ">




                        <div className="flex items-center mb-16 mr-8 justify-center gradientColor" >

                            <h1 className='sm:text-4xl text-xl font-extrabold text-white sm:ml-12 bodyFont2 '>Topics of interest include, but are not limited to, the following
                            </h1>
                        </div>

                        {/* ACCORDION */}
                         {/* <div class="accordion mx-auto" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Accordion Item #1
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Accordion Item #2
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Accordion Item #3
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="text-4xl my-6 text-black font-bold bodyFont2">Track 1 : MECHANICAL ENGINEERING</div>
                        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                            {
                                mechanicalEngineering.map((element) => (
                                    <div className="p-2 sm:w-1/2 w-full" key={element}>
                                        <div className="bg-[#57B7E7] rounded flex p-4 h-full items-center borderTopic">
                                            <i className="fa-solid fa-lightbulb mr-4 fa-xl iconclrps"></i>
                                            <span className="font-bold text-black sm:text-[1.3] text-sm">{element}</span>
                                        </div>
                                    </div>
                                ))
                            }

                        </div> */}
                        {/* <div className="text-center">
                            <span className="inline-block h-1 w-24 rounded bg-[#016698] mt-8 mb-6"></span>
                        </div> */}

                        {/* <div className="text-4xl my-6 text-black font-bold bodyFont2">Track 2 : CIVIL ENGINEERING</div>
                        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                            {
                                civilEngineering.map((element) => (
                                    <div className="p-2 sm:w-1/2 w-full" key={element}>
                                        <div className="bg-[#57B7E7] rounded flex p-4 h-full items-center borderTopic">
                                            <i className="fa-solid fa-lightbulb mr-4 fa-xl iconclrps"></i>
                                            <span className="font-bold text-black sm:text-[1.3] text-sm">{element}</span>
                                        </div>
                                    </div>
                                ))
                            }

                        </div> */}
                        {/* <div className="text-center">
                            <span className="inline-block h-1 w-24 rounded bg-[#016698] mt-8 mb-6"></span>
                        </div> */}
                        <div className="text-4xl my-6 text-[#293985] font-bold bodyFont2">Track 1 : COMPUTER SCIENCE AND ENGINEERING</div>
                        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                            {
                                techDomains.map((element) => (
                                    <div className="p-2 sm:w-1/2 w-full" key={element}>
                                        <div className="bg-[#57B7E7] rounded flex p-4 h-full items-center borderTopic gradientColor">
                                            <i className="fa-solid fa-lightbulb mr-4 fa-xl iconclrps"></i>
                                            <span className="font-bold text-white sm:text-[1.3] text-sm">{element}</span>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
<div className="text-center">
                            <span className="inline-block h-1 w-24 rounded bg-[#a21d2e] mt-8 mb-6"></span>
                        </div>
                        <div className="text-4xl my-6 text-[#293985] font-bold bodyFont2 ">Track 2 : ELECTRONICS AND COMMUNICATION</div>
                        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                            {
                                electronicsDomains.map((element) => (
                                    <div className="p-2 sm:w-1/2 w-full" key={element}>
                                        <div className="bg-[#57B7E7] rounded flex p-4 h-full items-center borderTopic gradientColor">
                                            <i className="fa-solid fa-lightbulb mr-4 fa-xl iconclrps"></i>
                                            <span className="font-bold text-white sm:text-[1.3] text-sm">{element}</span>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>

<div className="text-center">
                            <span className="inline-block h-1 w-24 rounded bg-[#a21d2e] mt-8 mb-6"></span>
                        </div>

                        <div className="text-4xl my-6 text-[#293985] font-bold bodyFont2 ">Track 3 : INFORMATION TECHNOLOY</div>
                        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                            {
                                itDomains.map((element) => (
                                    <div className="p-2 sm:w-1/2 w-full" key={element}>
                                        <div className="rounded flex p-4 h-full items-center borderTopic gradientColor">
                                            <i className="fa-solid fa-lightbulb mr-4 fa-xl iconclrps"></i>
                                            <span className="font-bold text-white sm:text-[1.3] text-sm">{element}</span>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                        <div className="text-center">
                            <span className="inline-block h-1 w-24 rounded bg-[#a21d2e] mt-8 mb-6"></span>
                        </div>

                        <div className="text-4xl my-6 text-[#293985] font-bold bodyFont2 " >Track 4 : INSTRUMENTATION</div>
                        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                            {
                                measurementAndControlDomains.map((element) => (
                                    <div className="p-2 sm:w-1/2 w-full" key={element}>
                                        <div className="bg-[#57B7E7] rounded flex p-4 h-full items-center borderTopic gradientColor">
                                            <i className="fa-solid fa-lightbulb mr-4 fa-xl iconclrps"></i>
                                            <span className="font-bold text-white sm:text-[1.3] text-sm">{element}</span>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
<div className="text-center">
                            <span className="inline-block h-1 w-24 rounded bg-[#a21d2e] mt-8 mb-6"></span>
                        </div>
                        <div className="text-4xl my-6 text-[#293985] font-bold bodyFont2 ">Track 5 : ELECTRICAL ENGINEERING</div>
                        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                            {
                                energyAndPowerDomains.map((element) => (
                                    <div className="p-2 sm:w-1/2 w-full" key={element}>
                                        <div className="bg-[#57B7E7] rounded flex p-4 h-full items-center borderTopic gradientColor">
                                            <i className="fa-solid fa-lightbulb mr-4 fa-xl iconclrps"></i>
                                            <span className="font-bold text-white sm:text-[1.3] text-sm">{element}</span>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
<div className="text-center">
                            <span className="inline-block h-1 w-24 rounded bg-[#a21d2e] mt-8 mb-6"></span>
                        </div>
                        <div className="text-4xl my-6 text-[#293985] font-bold bodyFont2 ">Track 6 : ROBOTICS AND AUTOMATION</div>
                        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                            {
                               roboticsDomains.map((element) => (
                                    <div className="p-2 sm:w-1/2 w-full" key={element}>
                                        <div className="bg-[#57B7E7] rounded flex p-4 h-full items-center borderTopic gradientColor">
                                            <i className="fa-solid fa-lightbulb mr-4 fa-xl iconclrps"></i>
                                            <span className="font-bold text-white sm:text-[1.3] text-sm">{element}</span>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>

                        <div className="text-center">
                            <span className="inline-block h-1 w-24 rounded bg-[#a21d2e] mt-8 mb-6"></span>
                        </div>
                    </div>
                </div>
            </section>


            <Footer />
        </>
    )
}

export default Topics
