import React from 'react'
import StartHero from '../../components/StartHero/StartHero'
import Footer from '../../components/Footer/Footer'
import Nav from '../../components/Navbar/Nav';

const ProgrameComitte = () => {
    const chiefPatron = ["Shri R.C. Mittal, Chancellor", "Shri Gopal Agrawal, Pro Chancellor", "Shri Palash Garg, OSD to Chancellor", "Ms. Saloni Garg, Director Promotion & Branding"]
    const patron = ["Dr. D.K. Patnaik, Vice Chancellor", "Dr. D.K. Panda, Pro Vice Chancellor", "Dr. Ankur Saxena, Deputy Pro Vice Chancellor"]
    const conferenceChair = ["Dr. Pramod S. Nair"]
    const convener = ["Dr. Ratnesh Lithoriya"]
    const conferenceCoOrdinators = ["Dr. Rajendra Shukla", "Dr. Shilpa Tripathi", "Dr. Ajay Kulkarni", "Dr. Jitendra Choudhary", "Dr. Prashant Panse", "Dr. M. Murli", "Prof. Anil Patidar", "Prof. V. Ganeshan"];
    const oragnizingCommittee = ["Dr. Kailash Chandra Bandhu", "Prof. Rakesh Pandit", "Prof. Ram Bansal", "Dr. Latika Jindal", "Prof. Sanket Gupta", "Dr. D.S. Rao", "Dr. Jitendra Sitlani", "Dr. Harsh Pratap Singh", "Dr. Sanjiv Jain", "Dr. Chitresh Nayak", "Dr. Ruby Bhatt", "Prof. Vidya Samad", "Prof. Safdar Sardar Khan", "Prof. Arpit Deo", "Prof. Mubeen Ahmed Khan "]
    const publicationChair = ["Dr. Prashant Panse", "Dr. Kailash Bandhu"]
    // const publicityChair = ["Hemant Kr. Pathak", "Sachin Solanki", "Ram Bansal", "Vishal Sharma"]
    // const programCommittee = ["Dr. Vipin Tyagi", "Dr. Durgesh K. Mishra", "Prof. MPS Chawla", "Dr. Vrinda Tokekar", "Dr. Richa Gupta", "Dr. Kamal Sethi", "Dr. Rashid Sheikh", "Dr. Shilpa Bhalerao", "Dr. Pravin Gupta", "Dr. G. S. Tomar", "Dr. Suresh Jain", "Dr. Sharvani Mathur"]
    const internationalAdvisoryCommitte1 = ["Prof. Anurag Srivastava, WS University, USA", "Prof. Brij N. Singh, North Dakota, USA", "Prof. Kwang Lee, BB University, USA", "Prof. T K Sarkar, Syracuse University, NY, USA", "Prof. K. P. Wang, Sydney University, Australia", "Prof. Istovan Erlich, DE University, Germany", "Prof. L Lai, City University, London", "Prof. K. N. Srivastava, ABB Sweden", "Prof. Ambrish Chandra, Montreal Canada", "Prof. Jai Govind, AIT, Bangkok", "Prof. Fushuan Wen, China", "Prof. Maode Ma NTU, Singapore", "Prof. Satyendra Chauhan, NIT Jaipur", "Prof. Prabin K. Panigrahi, IIM Indore", "Prof. Jawar Singh, IIITDM, Jabalpur", "Prof. Mini S. Thomas, JMI, New Delhi", "Prof. Sanjay Chauhan, GU, Greater Noida", "Prof. Usha Chauhan, GU, Greater Noida", "Prof. Ajay Shankar Singh, GU, Greater Noida", "Prof. S. C. Srivastava, IIT Kanpur", "Prof. J. Ram Kumar, IIT Kanpur", "Prof. Sanjay Garg, JUET Guna", "Prof. Vipin Tyagi, JUET Guna", "Prof. Prateek Pandey, JUET Guna", "Prof. Vivekanand Mukherjee, ISM, Dhanbad", "Prof. Avadhesh Kumar –PVC,GU", "Prof. Vishnu Sharma , Galgotiyas Gr. Noida", "Prof. Akhilesh Sharma, Manipal Jaipur", "Prof. Parmanand, SU, Gr.Noida", "Dr. Ripal Ranpura, Atmiya University", "Prof. Shailesh Tiwari, ABESEC, Ghaziabad", "Prof. Akhilesh Tiwari, MITS, Gwalior", "Prof. N. P. Padhy, IIT Rorkee"]
    const internationalAdvisoryCommitte2 = ["Prof. Avadhesh Kumar, PVC, GU, Gr. Noida.", "Prof. Vijay Kumar, University of Missouri", "Prof. Subhalakshmi Kher, IOWA State University", "Prof. Piyus Trivedi, Ex-VC, RGPV Bhopal", "Prof. K.S. Dasgupta, Director, IIST,Trivendrum", "Prof. S.L. Maskara, Retd. Prof., IIT Kharagpur", "Prof. O.P Vyas, IIIT,Allahabad", "Prof. Subrat Sanyal, IIT, Kharagpur", "Prof. B.K. Saraf, Vice Chairman, SOA University,Orissa", "Prof. A.K. Singh, Professor, RGPV, Bhopal", "Prof. C.D. Patil, Professor, UEC Ujjain", "Prof. Aditya Trivedi, IIITM, Gwalior", "Prof. S. Tapaswi, IIITM, Gwalior", "Prof. Anupam Shukla, IIITM Gwalior", "Prof. R.C. Joshi, IIT, Roorkee", "Prof. Kalyan Bandopadhyaya, IIT, Kharagpur", "Prof. Santi Prasad Maity,Professor, IIEST, Howrah", "Prof. Sanjeev Tokekar, IET, DAVV, Indore", "Prof. Abhay Dubey, Professor, DAVV, Indore", "Prof. N.S.Choudhary, IIT Indore", "Prof. P.Abdullah, CUSAT, Kerala", "Prof. Abdul Wahid, Maulana Azad Central University, Hyderabad", "Prof. D. Kannan, CUSAT, Kerala", "Prof. Vargheese Paul, CUSAT, Kerala", "Prof. Bhahmajit Singh, Professor, NIT, Kurukshetra", "Prof. B. N. Biswas, Chairman, SKFGI, West Bengal", "Prof. Neha Shukla, KIET Group of Institution", "Prof. Ashok Depbhakta, IEEE Senior Member", "Dr. Kamal Sethi, CSI Indore Chapter", "Prof. Sukumar Mishra, IIT Delhi", "Prof. Asheesh Singh, MNNIT, Allahabad", "Prof. S. K. Singh, IIIT, Allahabad", "Prof. Anil Gupta, Secretary, CSI Indore"];
    const coconvener = ["Dr. Nitika Vats Doohan"];
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
                            </div>
                            <div className='basis-1/2'>
                                <p className="leading-relaxed sm:text-[1.40rem] text-sm  font-bold text-[#af0202]">Patron</p>
                                {patron.map((element) => (
                                    <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                        <span className='text-[#016698]'>{doMyTask(element)[0]},</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
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
                                <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-4 font-bold text-[#af0202]">Co-Convener</p>
                                {coconvener.map((element) => (
                                    <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                        <span className='text-[#016698]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                    </p>

                                ))}
                                <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-4 font-bold text-[#af0202]">Program Chair</p>
                                {conferenceCoOrdinators.map((element) => (
                                    <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                        <span className='text-[#016698]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                    </p>

                                ))}
                            </div>
                            {/* <div className='basis-1/2'>
                                    <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-6 font-bold text-black">Convener</p>
                                    {convener.map((element) => (
                                        <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                            <span className='text-[#016698]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                        </p>

                                    ))}
                                </div> */}
                            {/* <div className='basis-1/2'>
                                    <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-6 font-bold text-black">Conference Co-ordinators</p>
                                    {conferenceCoOrdinators.map((element) => (
                                        <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                            <span className='text-[#016698]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                        </p>

                                    ))}
                                </div> */}
                            <div className='basis-1/2'>
                                <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-6 font-bold text-[#af0202]"> Oraganizing Committee</p>
                                {oragnizingCommittee.map((element) => (
                                    <p className="leading-relaxed sm:text-xl text-sm mt-2 font-bold text-black" key={element}>
                                        <span className='text-[#016698]'>{doMyTask(element)[0]}</span> {doMyTask(element)[1]} {doMyTask(element)[2]}
                                    </p>

                                ))}
                                <p className="leading-relaxed sm:text-[1.40rem] text-sm mt-6 font-bold text-[#af0202]"> Oraganizing Committee</p>
                                {oragnizingCommittee.map((element) => (
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
                                    </div> */}
                            {/* <div className='basis-1/3'>
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
