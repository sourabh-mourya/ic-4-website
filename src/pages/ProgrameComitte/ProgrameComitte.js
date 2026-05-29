import React from 'react'
import Footer from '../../components/Footer/Footer'
import Nav from '../../components/Navbar/Nav';
import './ProgramComitte.css'
const ProgrameComitte = () => {
    const chiefPatron = ["Shri R.C. Mittal, Chancellor","Shri Gopal Agrawal, Pro Chancellor","Shri Palash Garg, OSD to Chancellor","Ms. Saloni Garg, Director Promotion & Branding"]
    const patron = [ "Prof. D.K. Patnaik, Vice Chancellor" , "Prof. Birajashis Pattnaik, Pro Vice Chancellor"]
    const convener = [
  "Prof. Santosh S. Raghuwanshi",
  "Prof. Chayan Gupta",
  "Prof. Chitresh Nayak"
];

    const conferenceSectery = [
  "Prof. Ravindra Pathak", "Prof. Sanjiv Kumar Jain",
  "Prof. Vipin Sharma", "Prof. Ram Bansal",
  "Prof. Sanjay Mohite", "Prof. Rohini C Kale"
];

    const programChair =[
    "Prof. P. Siluvainathan",
    "Prof. V. Ganeshan",
    "Prof. Shilpa Tripathi",
    "Prof. Ajay Kulkarni",
    "Prof. D. Srinivasa Rao",
    "Prof. Sarita Kansal",
    "Prof. Vidhya Samad Barfa"
  ];


    const internationalAdvisoryCommitte1 = [
    "Prof. G S Tomar, Chairperson",
    "Prof. Manish Dixit, Vice Chairperson",
    "Prof. Manisha Badapanda, Vice Chairperson",
    "Prof. M P S Chawla, Treasurer",
    "Prof. Vijayalaxmi, Secretary & WIE Chair",
    "Prof. Durgesh Kumar Mishra, Chair CS",
    "Prof. Amit Raje, Chair PE Chapter",
    "Prof. Jinendra Agrawal, TPAC Chair",
    "Prof. Amit Ojha, MANIT Bhopal",
    "Prof. Somesh Kumar, Chair SAC",
    "Prof. Ashish Singhal, Vice-Chair SAC",
    "Prof. Shaibal Mukherjee, IIT Indore",
    "Prof. Ayan Mondal, IIT Indore",
    "Prof. Kamal Kumar Sethi, Chair Web Management",
    "Prof. Gaurav Bharti, Chair - Social Media",
    "Prof. Neha Gupta, Vice Chair SIGHT",
    "Prof. Pinku Ranjan, ABV-IIITM Gwalior",
    "Prof. Manish Sawle, Vice Chair, Ethics",
    "Prof. Ts. Dr Liu Li Li, TARUMT Malaysia",
    "Prof. Ts. Dr Yip Mum Wai, TARUMT Malaysia",
    "Prof. Ir. Lim Joo Eng, TARUMT Malaysia",
    "Prof. Anurag Srivastava, WS University USA",
    "Prof. Brij N Singh, North Dakota, USA",
    "Prof. Kwang Lee, BB University USA",
    "Prof. T K Sarkar, Syracuse University NY",
    "Prof. K. P. Wang, Sydney University Australia",
    "Prof. Rajesh Verma, VC RGPV",
    "Prof. S.K. Singh, VC RTU Kota",
    "Prof. Bharat Charan Singh, Chairman MPPU RC",
    "Prof. Istovan Erlich, DE University Germany",
    "Prof. L. Lai, City University London",
    "Prof. K. N. Srivastava, ABB Sweden",
    "Prof. Ambrish Chandra, Montreal Canada",
    "Prof. Jai Govind, AII Bangkok",
    "Prof. Fuishuan Wen, China",
    "Prof. Maode Ma NTU, Singapore",
    "Prof. Satyendra Chauhan, NIT Jaipur",
    "Prof. Prabah K. Panigrahi, IIIT Indore",
    "Prof. Jayor Singh, IIITDM Jabalpur",
    "Prof. Mini S. Thomas, JMI New Delhi",
    "Prof. Sanjay Chauhan, GU Greater Noida",
    "Prof. Akansay Dwivedi, IIT Roorkee",
    "Prof. Rhunush Kumar, IIT Indore",
    "Prof. Govind Maheshwari, IET DAVV Indore",
    "Prof. N. P. Patidar, MANIT Bhopal",
    "Prof. V. Kumar, MANIT Bhopal",
    "Prof. Shailendra Kumar Sharma, SGSITS Indore",
    "Prof. H K Mahiyar, SGSITS Indore",
    "Prof. Sunil Luthra, Director, T&L Bureau, AICTE",
    "Prof. Sukanta Basu, DT, Netherlands",
    "Prof. Ashwini Kumar Sharma, Graphic Era",
    "Prof. Usha Chauhan, GU Greater Noida",
    "Prof. Ajay Shankar Singh, GU Greater Noida",
    "Prof. S. C. Srivastava, IIT Kanpur",
    "Prof. J. Ram Kumar, IIT Kanpur",
    "Prof. Avadhesh Kumar, PVC, GU",
    "Prof. Akhilesh Sharma, Manipal University",
    "Prof. Premanand, SU, Noida",
    "Prof. Ravi Panwar, IIT BHU",
    "Prof. Ranvir S. Panwar, NIMS Chandigarh",
    "Prof. Satish Sharma, MNIT Jaipur",
    "Prof. Ripal Ranpura, Atmiya University",
    "Prof. Shailesh Tiwari, ABESEC Ghaziabad",
    "Prof. N. P. Padhy, IIT Rorkee"
];
        
    const internationalAdvisoryCommitte2 = [
  "Prof. Avadhesh Kumar, PVC GU",
  "Prof. Vijay Kumar, University of Missouri",
  "Prof. Manish Jambwal, Director, NATRAX Indore",
  "Prof. Shailesh Mishra, AVP, YASH technologies",
  "Prof. Ashok Bhansali, Dean GLA University",
  "Prof. Subhakalshmi Kher, IGWA State University",
  "Prof. Rajeev Tripathi, VC RGPV",
  "Prof. S.L. Maskara, Retd. Prof. IIT Kharagpur",
  "Prof. O.P Vyas, IIIT Allahabad",
  "Prof. Subrat Sarangi, IIT Kharagpur",
  "Prof. B.K. Saini, Vice Chairman SOA University",
  "Prof. Akhilesh Pandey, VC Vikram University",
  "Prof. C.D. Patil, Professor, UEC Ujjain",
  "Prof. Aditya Trivedi, IIITM Gwalior",
  "Prof. P. Tapaswi, IIITM Gwalior",
  "Prof. Anupam Shukla, IIITM Gwalior",
  "Prof. R.C. Joshi, IIT Roorkee",
  "Prof. Lovi Raj Gupta, Pro Vice Chancellor, LPU",
  "Prof. Nitin Upadhye, University of Modern Sciences",
  "Prof. Andrey Kuzmin, Man. Editor, BH Publishers",
  "Prof. R K Pandit, Vice Chancellor, MITS Gwalior",
  "Prof. Vivek Shrivastava, NIT Uttarakhand",
  "Prof. Kalyan Bandopadhyaya, IIT Kharagpur",
  "Prof. Santi Prasad Maity, Professor, IIEST",
  "Prof. Akhesa Tiwary, MIT Gwalior",
  "Prof. Sanjeev Tarlekar, IET DAVV",
  "Prof. Abhay Dubey, Professor, DAVV",
  "Prof. N.S. Choudhary, IIT Indore",
  "Prof. P. Abdullah, CUSAT Kerala",
  "Prof. Abdul Wahid, MACU Hyderabad",
  "Prof. D. Kannan, CUSAT Kerala",
  "Prof. Vargheese Paul, CUSAT Kerala",
  "Prof. Bhammejit Singh, Professor NIT Kurukshetra",
  "Prof. Ashok Depbexkta, SMIEEE",
  "Prof. Sukumar Mishra, IIT Delhi",
  "Prof. Sanjeevkumar Padmanaban, SEU Norway",
  "Prof. Biplab Sikdar, NUS Singapore",
  "Prof. Mohammad Khalid, Sunway University",
  "Prof. Dr. Ilhami Colak, Gazi University Ankara",
  "Prof. Firoz Alam, RMIT University Australia",
  "Prof. Anant Dubey, Curtin University Australia",
  "Prof. Ginbar Ensermu Geleta, Wollega University",
  "Prof. M. L. Kolhe, University of Agder, Norway",
  "Prof. Anand Parey, IIT Indore",
  "Prof. Deepa Mitra, Qatar University",
  "Prof. Asheesh Singh, MNNIT Allahabad",
  "Prof. S. K. Singh, IIIT Allahabad",
  "Prof. Anil Gupta, Secretary KSI Indore",
  "Prof. Amrit Kumar Roy, NIT Hamirpur",
  "Prof. Mayur Shirish Jain, IIT Indore",
  "Prof. R N Singh, DAVV Indore",
  "Prof. Amit Pal, DTU Delhi",
  "Prof. Sagar Raji, DTU Delhi",
  "Prof. Jatinder Kumar, NIT Kurukshetra",
  "Prof. Shweta Rathi, NIT Kurukshetra",
  "Prof. RK Saksat, Professor IIT BHU",
  "Prof. (Dr.) Arun Prasad, Professor, IIT (BHU)",
  "Prof. (Dr.) Ankit Gupta, Associate Professor, IIT (BHU)",
  "Prof. (Dr.) K.K. Panahi, Professor, IIT (BHU)",
  "Prof. (Dr.) Sandeep Choudhary, Professor, IIT Indore",
  "Prof. (Dr.) Neelima Satyam, Professor, IIT Indore",
  "Prof. (Dr.) Ravi Sharma, Professor, NIT Hamirpur",
  "Prof. (Dr.) R.B. Data, Professor, NIT Hamirpur",
  "Dr. Anurag Surana, Sr. GM Manager, PATH Mitra Indore",
  "Er. Rahul Goel, Zonal head & Vice president, Ultratech Cement Ltd"
];



    const generalChair = [
        "Dr. Ratnesh Litoriya, Dean of Engineering(Computing)"
    ]

    const conferenceCoChairs =  [
      "Dr. Kailash Chandra Bandhu, Head of Department, CSE",
      "Dr. Prashant Panse , Associate Dean Digitalization"
    ]

    const technicalProgramCommitteeChairs = [
        "Prof. Sanket Gupta",
    ]


    const publicationChairs = [
        "Dr. Sonu Kumar",
        
    ]
    

    const workingComittee = [
    "Dr. Manoj Kumar Rawat",
    "Dr. Safdar Sardar Khan",
    "Dr. Ritu Maheshwari",
    "Dr. Rohit Gupta",
    "Dr. Sunil Kushwaha",
    "Dr. Hareram Jha",
    "Prof. Ashish Kumar Kumawat",
    "Prof. Dharmendra Mangal",
    "Prof. Ajeet Singh Rajput",
    "Prof. Hemant K. Pathak",
    "Prof. Kriti Joshi",
    "Prof. Swati Vaidya",
    "Prof. Sourabh Dave",
    "Prof. Manish Korde",
    "Prof. Shubhrata Kanungo",
    "Prof. Sachin Yele",
    "Prof. Shivani Patnaha",
    "Prof. Vishal Sharma",
    "Prof. Priyanka Dhasal",
    "Dr. Aditya Mandloi",
    "Dr. Jyoti Kukade",
    "Prof. Ankita Chourasia",
    "Prof. Bhavana Kumari",
    "Prof. Dharmendra Gupta",
    "Prof. Mandakini Ingle",
    "Prof. Nishant Shrivastava",
    "Prof. Jyotsana Goyal",
    "Prof. Mohammad Mazhar",
    "Prof. Yatish Jain",
    "Dr. Devendra Singh Bais"
  ];

const financeChair = ["Prof. Rudresh Shah"];

 const publicityChair = ["Dr. Latika Jindal"];
    const doMyTask = (word) => {
        let arr = word.split(",", 3);
        return arr;
    }
    return (
        <>
            <Nav />
            {/* <StartHero /> */}
            <section className="text-gray-600 body-font mt-4">
                <div className="container px-5 py-8 mx-auto bg-[#E3F0FB]">
                    <div className="w-full mx-auto ml-16">

                        <div className="flex items-center mb-16 mr-8 justify-center gradientColor" >

                            <h1 className='sm:text-4xl text-xl font-black text-white sm:ml-12 bodyFont2'>COMMITTEES
                            </h1>
                            <i className="fa-solid fa-user-large fa-2x ml-12" style={{ color: '#ffffff' }}></i>
                        </div>

                        <div className="flex flex-wrap">
                            <div className='basis-1/2'>
                                
                                    <p className="leading-relaxed sm:text-[1.40rem] text-sm font-bold text-[#a21d2e]">Chief Patron</p>
                                    {chiefPatron.map((element) => (
                                    <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                        <span className='text-[#293985]'>{doMyTask(element)[0]},</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                    </p>

                                ))}
                                <p className="leading-relaxed sm:text-[1.40rem] text-sm  font-bold text-[#a21d2e]">Patron</p>
                                {patron.map((element) => (
                                    <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                        <span className='text-[#293985]'>{doMyTask(element)[0]},</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                    </p>

                                ))}
                                
                                {/* <p className="leading-relaxed sm:text-[1.40rem] text-sm font-bold text-[#a21d2e]">Hony General Chair</p>
                                    {honyGeneralChair.map((element) => (
                                    <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                        <span className='text-[#293985]'>{doMyTask(element)[0]},</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                    </p>

                                ))} */}

                                <p className="leading-relaxed sm:text-[1.40rem] text-sm font-bold text-[#a21d2e]">General Chair</p>
                                    {generalChair.map((element) => (
                                    <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                        <span className='text-[#293985]'>{doMyTask(element)[0]},</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                    </p>

                                ))}

                                {/* <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-4 font-bold text-[#a21d2e]">Conference Chair</p>
                                {conferenceChair.map((element) => (
                                    <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                        <span className='text-[#293985]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                    </p>

                                ))} */}

                                <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-4 font-bold text-[#a21d2e]">General Co-Chairs</p>
                                {conferenceCoChairs.map((element) => (
                                    <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                        <span className='text-[#293985]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                    </p>

                                ))}
                                
                                <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-4 font-bold text-[#a21d2e]">Program Chair</p>
                                {programChair.map((element) => (
                                    <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                        <span className='text-[#293985]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                    </p>

                                ))}
                                
                                {/* <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-4 font-bold text-[#a21d2e]">Conference Secretary</p>
                                {conferenceSectery.map((element) => (
                                    <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                        <span className='text-[#293985]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                    </p>

                                ))} */}

                                <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-4 font-bold text-[#a21d2e]">Publication Chairs</p>
                                {publicationChairs.map((element) => (
                                    <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                        <span className='text-[#293985]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                    </p>

                                ))}

                                <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-4 font-bold text-[#a21d2e]">Finance Chair</p>
                                {financeChair.map((element) => (
                                    <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                        <span className='text-[#293985]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                    </p>

                                ))}

                                <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-4 font-bold text-[#a21d2e]">Publicity Chair</p>
                                {publicityChair.map((element) => (
                                    <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                        <span className='text-[#293985]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                    </p>

                                ))}
                                {/* <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-4 font-bold text-[#a21d2e]">Sponsorship Committee</p>
                                {sponsorshipCommittee.map((element) => (
                                    <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                        <span className='text-[#293985]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                    </p>

                                ))} */}
                                {/* <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-4 font-bold text-[#a21d2e]">Registration & Certificate Distribution Committee</p>
                                {registrationAndCertificateDistributionCommittee.map((element) => (
                                    <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                        <span className='text-[#293985]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                    </p>

                                ))} */}
                                {/* <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-4 font-bold text-[#a21d2e]">Stage Committee</p>
                                {stageCommittee.map((element) => (
                                    <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                        <span className='text-[#293985]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                    </p>

                                ))} */}

                                {/* <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-4 font-bold text-[#a21d2e]">Keynote Speaker Committee</p>
                                {keynoteSpeakerCommittee.map((element) => (
                                    <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                        <span className='text-[#293985]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                    </p>

                                ))} */}
                                {/* <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-4 font-bold text-[#a21d2e]">Hospitality Committee</p>
                                {hospitalityCommittee.map((element) => (
                                    <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                        <span className='text-[#293985]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                    </p>

                                ))} */}
                                {/* <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-4 font-bold text-[#a21d2e]">Reviewer Committee</p>
                                {reviewerCommittee.map((element) => (
                                    <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                        <span className='text-[#293985]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                    </p>

                                ))} */}
                                {/* <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-4 font-bold text-[#a21d2e]">Logistics Committee</p>
                                {logisticsCommittee.map((element) => (
                                    <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                        <span className='text-[#293985]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                    </p>

                                ))}
                                 */}
                                

                                {/* <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-4 font-bold text-[#a21d2e]">Technical Reviewer Team</p>
                                {technicalReviewerTeam.map((element) => (
                                    <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                        <span className='text-[#293985]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                    </p>

                                ))} */}
                                
                            </div> 

                            <div className='basis-1/2'>
 
                                {/* <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-4 font-bold text-[#a21d2e]">Convener</p>
                                {convener.map((element) => (
                                    <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                        <span className='text-[#293985]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                    </p>

                                ))} */}

                                <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-4 font-bold text-[#a21d2e]">Technical Program Committee Chair</p>
                                {technicalProgramCommitteeChairs.map((element) => (
                                    <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                        <span className='text-[#293985]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                    </p>

                                ))}
                                {/* <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-4 font-bold text-[#a21d2e]">Organizing Committee</p>
                                {oragnizingCommittee.map((element) => (
                                    <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                        <span className='text-[#293985]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                    </p>

                                ))} */}
                                {/* <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-4 font-bold text-[#a21d2e]">Feedback Committee</p>
                                {feedbackCommittee.map((element) => (
                                    <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                        <span className='text-[#293985]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                    </p>

                                ))} */}
                                {/* <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-4 font-bold text-[#a21d2e]">Cultural Committee</p>
                                {culturalCommittee.map((element) => (
                                    <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                        <span className='text-[#293985]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                    </p>

                                ))} */}
                                {/* <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-4 font-bold text-[#a21d2e]">Outreach Committee</p>
                                {outreachCommittee.map((element) => (
                                    <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                        <span className='text-[#293985]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                    </p>

                                ))} */}
                                {/* <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-4 font-bold text-[#a21d2e]">Sponsorship & Finance Committee</p>
                                {sponsorshipCommittee.map((element) => (
                                    <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                        <span className='text-[#293985]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                    </p>

                                ))} */}
                                {/* <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-4 font-bold text-[#a21d2e]">CMT platform Committee</p>
                                {CMTplatformCommittee.map((element) => (
                                    <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                        <span className='text-[#293985]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                    </p>

                                ))} */}
                                {/* <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-4 font-bold text-[#a21d2e]">Finance Chair</p>
                                {financeChair.map((element) => (
                                    <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                        <span className='text-[#293985]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                    </p>

                                ))} */}




                                {/* <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-4 font-bold text-[#a21d2e]">Media & Publicity</p>
                                {mediaAndPublicity.map((element) => (
                                    <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                        <span className='text-[#293985]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                    </p>

                                ))} */}
                                {/* <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-4 font-bold text-[#a21d2e]">Website Committee</p>
                                {websiteCommittee.map((element) => (
                                    <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                        <span className='text-[#293985]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                    </p>

                                ))}     */}
                                <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-4 font-bold text-[#a21d2e]">Working Committee</p>
                                {workingComittee.map((element) => (
                                    <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                        <span className='text-[#293985]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                    </p>

                                ))}

                                {/* <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-4 font-bold text-[#a21d2e]">Volunteers Committee</p>
                                {volunteersCommittee.map((element) => (
                                    <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                        <span className='text-[#293985]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                    </p>      
                                ))} */}

                                {/* <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-4 font-bold text-[#a21d2e]">Anchoring Committee</p>
                                {anchoringCommittee.map((element) => (
                                    <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                        <span className='text-[#293985]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                    </p>

                                ))} */}

                                {/* <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-4 font-bold text-[#a21d2e]">Advisory Committee</p>
                                {advisoryCommittee.map((element) => (
                                    <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                        <span className='text-[#293985]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                    </p>

                                ))} */}
                            </div>
                            {/* <div className='basis-1/3'>
                                        <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-6 font-bold text-black">Publication Chair</p>
                                        {publicationChair.map((element) => (
                                            <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                                <span className='text-[#293985]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                            </p>

                                        ))}
                                    </div>
                                    <div className='basis-1/3'>
                                        <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-6 font-bold text-black">Publicity Chair</p>
                                        {publicityChair.map((element) => (
                                            <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                                <span className='text-[#293985]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                            </p>

                                        ))}
                                    </div>
                            <div className='basis-1/3'>
                                        <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-6 font-bold text-black">Program Committee</p>
                                        {programCommittee.map((element) => (
                                            <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                                <span className='text-[#293985]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                            </p>

                                        ))}
                                    </div> */}

                        </div>
                        <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-6 mb-2 font-bold text-[#a21d2e]">Intenational Advisory Committee</p>
                        <div className="flex">
                            <div className='basis-1/2'>
                                {internationalAdvisoryCommitte1.map((element) => (
                                    <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                        <span className='text-[#293985]'>{doMyTask(element)[0]}</span>, {doMyTask(element)[1]} {doMyTask(element)[2]}
                                    </p>

                                ))}
                            </div>
                            <div className='basis-1/2'>
                                {internationalAdvisoryCommitte2.map((element) => (
                                    <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                        <span className='text-[#293985]'>{doMyTask(element)[0]}</span>, {doMyTask(element)[1]} {doMyTask(element)[2]}
                                    </p>

                                ))}
                            </div>
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

export default ProgrameComitte
