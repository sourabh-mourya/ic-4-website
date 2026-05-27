    import React from 'react'
    import StartHero from '../../components/StartHero/StartHero'
    import Footer from '../../components/Footer/Footer'
    import Nav from '../../components/Navbar/Nav';

    const ProgrameComitte = () => {
        const chiefPatron = ["Shri R.C. Mittal, Chancellor","Shri Gopal Agrawal, Pro Chancellor","Shri Palash Garg, OSD to Chancellor","Ms. Saloni Garg, Director Promotion & Branding"]
        const patron = [ "Prof. D.K. Patnaik, Vice Chancellor","Prof. D.K. Panda, Pro Vice Chancellor"]
        const conferenceChair = ["Prof. Pramod S. Nair"]
        const conferenceCoChair = ["Prof. Rajendra K Shukla"]
        const convener = [
            "Prof. Santosh S. Raghuwanshi",
            "Prof.Chayan Gupta"
        ]
        const conferenceSectery = [
            "Prof. Vipin Sharma (Editor)",
            "Prof. Sanjay Mohite (Finance)",
            "Prof. Ram Bansal (Publication)",
            "Prof. Sanjiv Kumar Jain (Tech)",
            "Prof. Chitresh Nayak (Tech)",
            "Prof. Ravindra Pathak (Collaboration)",
            "Prof. Rohini C Kale (Marketing & Promotion)"
        ];

        const programChair = [
            "Mr. P. Siluvainathan",
            "Prof. V. Ganeshan",
            "Prof. Shilpa Tripathi",
            "Prof. Ajay Kulkarni",
            "Prof. Jitendra Choudhary",
            "Prof. Prashant Panse",
            "Prof. Anil Patidar"
        ];
        
        
        const conferenceCoOrdinators = ["Prof. Rajendra Shukla", "Prof. Shilpa Tripathi", "Prof. Ajay Kulkarni", "Prof. Jitendra Choudhary", "Prof. Prashant Panse", "Prof. M. Murli", "Prof. Anil Patidar", "Prof. V. Ganeshan"];
        const oragnizingCommittee = [
            "Prof. Thirugnanasamban K G",
            "Prof. Rupesh Chalisgaonkar",
            "Prof. Amit Kulkarni",
            "Prof. Jayesh Padmakar Barve",
            "Prof. Manish Kumar Thakur",
            "Prof. Ramjanm Singh",
            "Prof. Amit Vijay Kulkarni",
            "Prof. Prashant Raghuwanshi",
            "Prof. Himanshu Shekhar",
            "Prof. Deepak Porwal",
            "Prof. Neha Verma",
            "Prof. Khaliq Ahmad",
            "Prof. Ajit Jain",
            "Prof. Babanpreet Singh",
            "Prof. Alok Rarotiya",
            "Prof. Ruchir Lashkari",
            "Prof. Deepak Jain",
            "Prof. Sachin Putambekar",
            "Prof. Juned S Siddiki",
            "Prof. Vidhya Barpha"
        ];
        const technicalCommitee = ["Prof. Sanket Gupta ","Prof. Kailash Bandhu"]
        const publicationCommitte = [
            "Prof. Vipin Sharma (Coordinator)",
            "Prof. Deepak Porwal (EE)",
            "Prof. Surya Pratap (CE)",
            "Prof. Akbar Ali (ME)"
        ]
        const sponsorshipCommittee = [
            "Prof. Sanjay Mohite (Coordinator)",
            "Prof. Nishant Dwivedi (EE)",
            "Prof. Surya Pratap Singh (CE)",
            "Dr. Akbar Ali (ME)"
        ]
        
        const registrationAndCertificateDistributionCommittee = [
            "Prof. Irfan Khan (Coordinator)",
            "Prof. Preeti Singh (EE)",
            "Prof. Monika Pagare (CE)",
            "Prof. Nisha Kumari (ME)"
        ]
        
        const stageCommittee = [
            "Prof. Alok Rarotiya (Coordinator)",
            "Prof. Neha Verma (EE)",
            "Prof. Parag Chaporkar (ME)",
            "Prof. Pradeep Kumar Mehta (ME)"
        ]
        const anchoringCommittee = [
            "Prof. Deepak Jain (Coordinator)",
            "Prof. Khaliq Ahmad (EE)",
            "Prof. Ritu Maheswari (CSE)"
        ]
        const keynoteSpeakerCommittee= [
            "Prof. Ravindra Pathak (Coordinator)",
            "Prof. Rupesh Chalisgaonkar",
            "Prof. Himanshu Shekar (EE)",
            "Dr. Rohini C Kale (CE)",
            "Dr. Swati Mishra (ME)",
            "Prof. Pankaj Shrivastava (ME)"
        ]

        const hospitalityCommittee = [
            "Prof. Dharmendra Mangal (Coordinator)",
            "Ms. Sharda Patwa (EE)",
            "Prof. Vinay Joshi (CE)",
            "Prof. Rituraj Raghuvanshi (ME)",
            "Prof. Abhishek Shrotriya (ME)"
        ]
        
        const reviewerCommittee = [
            "Dr. Chitresh Nayak (Coordinator)",
            "Prof. Anurag S. Yadav (EE)",
            "Dr. Shyam Birla (ME)",
            "Dr. Deepak Yadav (ME)",
            "Dr. Vivek Mishra (ME)",
            "Dr. Rupesh Chalisgaonkar (ME)",
            "Dr. Rajesh Kumar (ME)",
            "Dr. Swati Mishra (ME)",
            "Dr. Anuj Kumar Jain (ME)",
            "Dr. Mohit Pramod Sharma (ME)",
            "Prof. Aranav Debnath (CE)",
            "Prof. Kuldeep Swarokar (CE)",
            "Prof. Babanpreet Singh (CE)",
            "Prof. Alok Rarotiya (CE)"
        ]
        
        const logisticsCommittee =  [
            "Prof. Yash Mothe (Coordinator)",
            "Prof. K. Vijetha (EE)",
            "Prof. Lekhraj Patidar (ME)",
            "Prof. Sunil Kumar Patidar (ME)",
            "Prof. Rahul Thakur (ME)",
            "Prof. Ashwin Parihar (CE)",
            "Prof. Kuldeep Swarokar (CE)"
        ]
        
        const networkingCommittee = [
            "Prof. Sanket Gupta (Coordinator)",
            "Prof. Nishant Dwivedi (EE)",
            "Prof. Neeraj Yadav (ME)",
            "Prof. Yash Mothe (CE)",
            "Dr. Ajay Sinha (CE)",
            "Prof. Nakul Bansod (ME)"
        ]
        
        const volunteersCommittee = [
            "Prof. Ruchir Laskari (Coordinator)",
            "Prof. Gaurav Patel (ME)",
            "Prof. Bhupendra Singh Sikarwar (ME)",
            "Prof. Devendra Patel (ME)",
            "Prof. Manoj Kumar Gangwar (ME)"
        ]
        
        const feedbackCommittee = [
            "Prof. Vipin Sharma (Coordinator)",
            "Prof. Deepak Porwal (EE)",
            "Prof. Ankit Soni (CE)",
            "Prof. Hitesh Agrawal (ME)"
        ]
        
        const culturalCommittee =  [
            "Prof. Preeti Jain"
        ]
        
        const outreachCommittee = [
            "Prof. Ram Janam Singh (Coordinator)",
            "Prof. Ram Bansal (ME)",
            "Prof. Deepak Patel"
        ]
        const sponsorshipandFinanceCommittee = [
            "Prof. Sanjay Mohite (Coordinator)",
            "Prof. Nishant Dwivedi",
            "Prof. Siddheswar Kar",
            "Prof. Pankaj Shrivastava",
            "Prof. Prabhat Patel",
            "Prof. Ajit Jain",
            "Prof. Lekhraj Patidar"
        ]
        

        const marketingandPromotionCommittee = [
            "Prof. Rohini C Kale (Coordinator)",
            "Prof. Priti Singh (EE)",
            "Prof. Siddeshwar Kar (EE)",
            "Prof. Anurag Yadav (EE)",
            "Prof. Sharda Patwa (EE)"
        ]
        
        const CMTplatformCommittee = [
            "Prof. Chitresh Nayak (Coordinator)",
            "Prof. Sanjiv Kumar Jain (EE)",
            "Prof. Kailsh Bandhu (CSE)",
            "Prof. Sanket Gupta (CSE)"
        ]
        
        const mediaAndPublicity = [
            "Prof. Rita Nagwal (ME)",
            "Prof. Anshuman Purohit (ME)",
            "Prof. Ubaid I. Hanfee (CE)"
        ]
        
        const websiteCommittee = [
            "Prof. Thirugnanasamban KG (Coordinator)",
            "Prof. Ram Bansal (ME)",
            "Prof. Neha Verma (EE)"
        ]
                
        // const publicityChair = ["Hemant Kr. Pathak", "Sachin Solanki", "Ram Bansal", "Vishal Sharma"]
        // const programCommittee = ["Prof. Vipin Tyagi", "Prof. Durgesh K. Mishra", "Prof. MPS Chawla", "Prof. Vrinda Tokekar", "Prof. Richa Gupta", "Prof. Kamal Sethi", "Prof. Rashid Sheikh", "Prof. Shilpa Bhalerao", "Prof. Pravin Gupta", "Prof. G. S. Tomar", "Prof. Suresh Jain", "Prof. Sharvani Mathur"]
        const internationalAdvisoryCommitte1 = [
            "Prof. Anurag Srivastava, WS University USA",
            "Prof. Brij N. Singh, North Dakota USA",
            "Prof. Kwang Lee, BB University USA",
            "Prof. T K Sarkar, Syracuse University NY",
            "Prof. K. P. Wang, Sydney University Australia",
            "Prof. Rajesh Verma, VC Rani Durgavati Vishwavidyalaya",
            "Prof. S.K. Singh VC, Rajasthan Technical University Kota",
            "Prof. Bharat Charan Singh, Chairman MPPURC",
            "Prof. Istovan Erlich, DE University Germany",
            "Prof. L Lai, City University London",
            "Prof. K. N. Srivastava, ABB Sweden",
            "Prof. Ambrish Chandra, Montreal Canada",
            "Prof. Jai Govind, AIT Bangkok",
            "Prof. Fushuan Wen, China",
            "Prof. Maode Ma NTU, Singapore",
            "Prof. Satyendra Chauhan, NIT Jaipur",
            "Prof. Prabin K. Panigrahi, IIM Indore",
            "Prof. Jawar Singh, IIITDM Jabalpur",
            "Prof. Mini S. Thomas, JMI New Delhi",
            "Prof. Sanjay Chauhan, GU Greater Noida",
            "Prof. Usha Chauhan, GU Greater Noida",
            "Prof. Ajay Shankar Singh, GU Greater Noida",
            "Prof. S. C. Srivastava, IIT Kanpur",
            "Prof. J. Ram Kumar, IIT Kanpur",
            "Prof. Avadhesh Kumar –PVC, GU",
            "Prof. Vishnu Sharma, Galgotiyas Gr. Noida",
            "Prof. Akhilesh Sharma, Manipal Jaipur",
            "Prof. Parmanand, SU Gr.Noida",
            "Prof. Ripal Ranpura, Atmiya University",
            "Prof. Shailesh Tiwari, ABESEC Ghaziabad",
            "Prof. N. P. Padhy, IIT Rorkee",
            "Prof. Avadhesh Kumar, PVC GU",
            "Prof. Vijay Kumar, University of Missouri",
            "Dr Manish Jaiswal, Director NATRAX Indore",
            "Mr. Shailesh Mishra, Asst. Vice President at YASH Technologies",
            "Prof. Ashok Bhansali, Dean GLA University",
            "Prof. Subhalakshmi Kher, IOWA State University",
            "Prof. Sunil Kumar Gupta, VC RGPV",
            "Prof. S.L. Maskara, Retd. Prof. IIT Kharagpur",
            "Prof. O.P Vyas, IIIT Allahabad",
            "Prof. Subrat Sanyal, IIT Kharagpur",
            "Prof. B.K. Saraf, Vice Chairman SOA University",
            "Prof. Akhilesh Pandey, VC Vikram University",
            "Prof. C.D. Patil, Professor UEC Ujjain",
            "Prof. Aditya Trivedi, IIITM Gwalior",
            "Prof. S. Tapaswi, IIITM Gwalior",
            "Prof. Anupam Shukla, IIITM Gwalior",
            "Prof. R.C. Joshi, IIT Roorkee"
           ]
            
        const internationalAdvisoryCommitte2 = [
            "Prof. Kalyan Bandopadhyaya, IIT Kharagpur",
            "Prof. Santi Prasad Maity, Professor IIEST",
            "Prof. Akhilesh Tiwari, MITS Gwalior",
            "Prof. Sanjeev Tokekar, IET DAVV",
            "Prof. Abhay Dubey, Professor DAVV",
            "Prof. N.S. Choudhary, IIT Indore",
            "Prof. P. Abdullah, CUSAT Kerala",
            "Prof. Abdul Wahid, Maulana Azad Central University Hyderabad",
            "Prof. D. Kannan, CUSAT Kerala",
            "Prof. Vargheese Paul, CUSAT Kerala",
            "Prof. Bhahmajit Singh, Professor NIT",
            "Prof. Ashok Depbhakta, IEEE Senior Member",
            "Prof. Kamal Sethi, CSI Indore Chapter",
            "Prof. Sukumar Mishra, IIT Delhi",
            "Prof. Asheesh Singh, MNNIT Allahabad",
            "Prof. S. K. Singh, IIIT Allahabad",
            "Prof. Anil Gupta, Secretary CSI Indore",
            "Dr. Biplab Sikdar, NUS, Singapore",
            "Prof. Mohammad Khalid, Sunway University, Malaysia",
            "Prof. Dr. Ilhami COLAK, Gazi University, Ankara/Turkey",
            "Dr. Sukanta Basu, Delft Institute of Technology, Netherlands",
            "Dr. Firoz Alam, RMIT University, Australia",
            "Dr. Anant Dubey, Curtin University Australia",
            "Dr. Ginbar Ensermu Geleta, Wollega University, Ethiopia",
            "Dr. M. L. Kolhe, University of Agder (Norway)",
            "Dr. Anand Parey, IIT Indore",
            "Dr. Deepa Mithra, Qatar University",
            "Prof. Akshay Dwivedi, IIT Roorkee",
            "Dr. Ritunesh Kumar, IIT Indore",
            "Dr. Govind Maheshwari, IET DAVV, Indore",
            "Dr. N. P. Patidar, MANIT, Bhopal",
            "Dr. Y. Kumar, MANIT, Bhopal",
            "Dr. Shailendra Kumar Sharma, SGSITS, Indore",
            "Dr. R. K. Saxena, SGSITS, Indore",
            "Dr. H K Mahiyar, SGSITS Indore",
            "Dr. Amrit Kumar Roy, NIT Hamirpur",
            "Dr. Mayur Shirish Jain, IIT Indore",
            "Dr. R N Singh, DAVV, Indore",
            "Prof. Amit Pal, DTU Delhi",
            "Prof. Sagar Maji, DTU Delhi",
            "Dr. Jatinder Kumar, NIT Kurukshetra",
            "Dr. Shweta Rathi, NIT Kurukshetra",
            "Dr. J. P. Mishra, IIT BHU",
            "Dr. Ravi Panwar, IIT BHU",
            "Dr. Ranvir S. Panwar, NIMS, Chandigarh",
            "Dr. Satish Sharma, MNIT JAIPUR",
            "Dr. RK Saket, Professor, IIT (BHU)",
            "Dr. Sanjeevikumar Padmanaban, Professor, South-Eastern University, Norway"
        ];
        const coconvener = [ "Prof. Kailash Chandra Bandhu"];
        const cosecretary = [ "Prof. Latika Jindal"];
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

                            <div className="flex items-center mb-16 mr-8 justify-center" >

                                <h1 className='sm:text-4xl text-xl font-black text-black sm:ml-12 bodyFont2'>PROGRAM COMMITTEE MEMBERS
                                </h1>
                                <i className="fa-solid fa-user-large fa-3x ml-12" style={{ color: '#016698' }}></i>
                            </div>

                            <div className="flex flex-wrap">
                                <div className='basis-1/2'>
                                    
                                        <p className="leading-relaxed sm:text-[1.40rem] text-sm font-bold text-[#af0202]">Chief Patron</p>
                                    {chiefPatron.map((element) => (
                                        <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                            <span className='text-[#016698]'>{doMyTask(element)[0]},</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                        </p>

                                    ))}
                                    <p className="leading-relaxed sm:text-[1.40rem] text-sm  font-bold text-[#af0202]">Patron</p>
                                    {patron.map((element) => (
                                        <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                            <span className='text-[#016698]'>{doMyTask(element)[0]},</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                        </p>

                                    ))}
                                    
                                    <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-4 font-bold text-[#af0202]">Conference Co-Chair</p>
                                    {conferenceCoChair.map((element) => (
                                        <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                            <span className='text-[#016698]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                        </p>

                                    ))}
                                    
                                    <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-4 font-bold text-[#af0202]">Program Chair</p>
                                    {programChair.map((element) => (
                                        <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                            <span className='text-[#016698]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                        </p>

                                    ))}
                                    
                                    <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-4 font-bold text-[#af0202]">Publication Committee</p>
                                    {publicationCommitte.map((element) => (
                                        <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                            <span className='text-[#016698]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                        </p>

                                    ))}
                                    <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-4 font-bold text-[#af0202]">Sponsorship Committee</p>
                                    {sponsorshipCommittee.map((element) => (
                                        <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                            <span className='text-[#016698]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                        </p>

                                    ))}
                                    <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-4 font-bold text-[#af0202]">Registration & Certificate Distribution Committee</p>
                                    {registrationAndCertificateDistributionCommittee.map((element) => (
                                        <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                            <span className='text-[#016698]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                        </p>

                                    ))}
                                    <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-4 font-bold text-[#af0202]">Stage Committee</p>
                                    {stageCommittee.map((element) => (
                                        <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                            <span className='text-[#016698]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                        </p>

                                    ))}
                                    <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-4 font-bold text-[#af0202]">Anchoring Committee</p>
                                    {anchoringCommittee.map((element) => (
                                        <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                            <span className='text-[#016698]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                        </p>

                                    ))}
                                    <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-4 font-bold text-[#af0202]">Keynote Speaker Committee</p>
                                    {keynoteSpeakerCommittee.map((element) => (
                                        <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                            <span className='text-[#016698]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                        </p>

                                    ))}
                                    <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-4 font-bold text-[#af0202]">Hospitality Committee</p>
                                    {hospitalityCommittee.map((element) => (
                                        <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                            <span className='text-[#016698]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                        </p>

                                    ))}
                                    <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-4 font-bold text-[#af0202]">Reviewer Committee</p>
                                    {reviewerCommittee.map((element) => (
                                        <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                            <span className='text-[#016698]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                        </p>

                                    ))}
                                    <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-4 font-bold text-[#af0202]">Logistics Committee</p>
                                    {logisticsCommittee.map((element) => (
                                        <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                            <span className='text-[#016698]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                        </p>

                                    ))}
                                    
                                    
                                    
                                </div> 

                                <div className='basis-1/2'>
                                <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-4 font-bold text-[#af0202]">Conference Chair</p>
                                    {conferenceChair.map((element) => (
                                        <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                            <span className='text-[#016698]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                        </p>

                                    ))}
                                    <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-4 font-bold text-[#af0202]">Convener</p>
                                    {convener.map((element) => (
                                        <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                            <span className='text-[#016698]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                        </p>

                                    ))}
                                    <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-4 font-bold text-[#af0202]">Conference Secretary</p>
                                    {conferenceSectery.map((element) => (
                                        <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                            <span className='text-[#016698]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                        </p>

                                    ))}
                                    <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-4 font-bold text-[#af0202]">Technical Program Committee</p>
                                    {technicalCommitee.map((element) => (
                                        <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                            <span className='text-[#016698]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                        </p>

                                    ))}
                                    <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-4 font-bold text-[#af0202]">Organizing Committee</p>
                                    {oragnizingCommittee.map((element) => (
                                        <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                            <span className='text-[#016698]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                        </p>

                                    ))}
                                    <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-4 font-bold text-[#af0202]">Feedback Committee</p>
                                    {feedbackCommittee.map((element) => (
                                        <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                            <span className='text-[#016698]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                        </p>

                                    ))}
                                    <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-4 font-bold text-[#af0202]">Cultural Committee</p>
                                    {culturalCommittee.map((element) => (
                                        <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                            <span className='text-[#016698]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                        </p>

                                    ))}
                                    <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-4 font-bold text-[#af0202]">Outreach Committee</p>
                                    {outreachCommittee.map((element) => (
                                        <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                            <span className='text-[#016698]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                        </p>

                                    ))}
                                    <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-4 font-bold text-[#af0202]">Sponsorship & Finance Committee</p>
                                    {sponsorshipCommittee.map((element) => (
                                        <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                            <span className='text-[#016698]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                        </p>

                                    ))}
                                    <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-4 font-bold text-[#af0202]">CMT platform Committee</p>
                                    {CMTplatformCommittee.map((element) => (
                                        <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                            <span className='text-[#016698]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                        </p>

                                    ))}
                                    <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-4 font-bold text-[#af0202]">Media & Publicity</p>
                                    {mediaAndPublicity.map((element) => (
                                        <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                            <span className='text-[#016698]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                        </p>

                                    ))}
                                    <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-4 font-bold text-[#af0202]">Website Committee</p>
                                    {websiteCommittee.map((element) => (
                                        <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                            <span className='text-[#016698]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                        </p>

                                    ))}    
                                    <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-4 font-bold text-[#af0202]">Networking Committee</p>
                                    {networkingCommittee.map((element) => (
                                        <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                            <span className='text-[#016698]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                        </p>

                                    ))}
                                    <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-4 font-bold text-[#af0202]">Volunteers Committee</p>
                                    {volunteersCommittee.map((element) => (
                                        <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                            <span className='text-[#016698]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                        </p>

                                    ))}
                                </div>
                                {/* <div className='basis-1/3'>
                                            <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-6 font-bold text-black">Publication Chair</p>
                                            {publicationChair.map((element) => (
                                                <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                                    <span className='text-[#016698]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                                </p>

                                            ))}
                                        </div>
                                        <div className='basis-1/3'>
                                            <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-6 font-bold text-black">Publicity Chair</p>
                                            {publicityChair.map((element) => (
                                                <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                                    <span className='text-[#016698]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                                </p>

                                            ))}
                                        </div>
                                <div className='basis-1/3'>
                                            <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-6 font-bold text-black">Program Committee</p>
                                            {programCommittee.map((element) => (
                                                <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                                    <span className='text-[#016698]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                                </p>

                                            ))}
                                        </div> */}

                            </div>
                            <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-6 mb-2 font-bold text-[#af0202]">Intenational Advisory Committee</p>
                            <div className="flex">
                                <div className='basis-1/2'>
                                    {internationalAdvisoryCommitte1.map((element) => (
                                        <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                            <span className='text-[#016698]'>{doMyTask(element)[0]}</span>, {doMyTask(element)[1]} {doMyTask(element)[2]}
                                        </p>

                                    ))}
                                </div>
                                <div className='basis-1/2'>
                                    {internationalAdvisoryCommitte2.map((element) => (
                                        <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                            <span className='text-[#016698]'>{doMyTask(element)[0]}</span>, {doMyTask(element)[1]} {doMyTask(element)[2]}
                                        </p>

                                    ))}
                                </div>
                            </div>
                            <div className="text-center">
                                <span className="inline-block h-1 w-24 rounded bg-[#016698] mt-8 mb-6"></span>
                            </div>

                        </div>
                    </div>
                </section>
                <Footer />
            </>
        )
    }

    export default ProgrameComitte
