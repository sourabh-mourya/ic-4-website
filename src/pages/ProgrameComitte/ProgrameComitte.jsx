import React, { memo } from 'react'
import Footer from '../../components/Footer/Footer'
import Nav from '../../components/Navbar/Nav'
import './ProgramComitte.css'
import CommitteeSection from '../../components/common/CommitteeSection'
import {
  committeeData,
  programChair,
  workingCommittee,
  internationalAdvisoryCommittee1,
  internationalAdvisoryCommittee2,
} from '../../data/data'

const ProgrameComitte = memo(() => {
  const doMyTask = (word) => {
    let arr = word.split(',', 3)
    return arr
  }

  return (
    <>
      <Nav />
      <section className="text-gray-600 body-font mt-4">
        <div className="container px-5 py-8 mx-auto bg-[#E3F0FB]">
          <div className="w-full mx-auto ml-0 sm:ml-8">

            {/* Page Header */}
            <div className="flex items-center mb-8 mr-8 justify-center gradientColor">
              <h1 className="sm:text-4xl text-xl font-black text-white sm:ml-12 bodyFont2">COMMITTEES</h1>
              <i className="fa-solid fa-user-large fa-2x ml-12" style={{ color: '#ffffff' }}></i>
            </div>

            {/* ── PHOTO SECTIONS ── */}

            {/* Chief Patron */}
            <CommitteeSection title="Chief Patron" members={committeeData.chiefPatron} />

            {/* Patron */}
            <CommitteeSection title="Patron" members={committeeData.patron} />

            {/* General Chair */}
            <CommitteeSection title="General Chair" members={committeeData.generalChair} />

            {/* General Co-Chairs — includes Dr. Anuradha Kar */}
            <CommitteeSection title="General Co-Chairs" members={committeeData.generalCoChairs} />

            {/* Publication / Finance / Publicity / Technical */}
            <div className="flex flex-wrap gap-8 mt-4">
              <div className="flex-1 min-w-[280px]">
                <CommitteeSection title="Publication Chair" members={committeeData.publicationChairs} />
              </div>
              <div className="flex-1 min-w-[220px]">
                <CommitteeSection title="Finance Chair" members={committeeData.financeChair} />
              </div>
              <div className="flex-1 min-w-[220px]">
                <CommitteeSection title="Publicity Chair" members={committeeData.publicityChair} />
              </div>
              <div className="flex-1 min-w-[220px]">
                <CommitteeSection title="Technical Program Committee Chair" members={committeeData.technicalProgramChair} />
              </div>
            </div>

            {/* IEEE MP Section */}
            <CommitteeSection title="IEEE Madhya Pradesh Section" members={committeeData.ieeeMPSection} />

            {/* IEEE France Section — NEW */}
            <CommitteeSection title="IEEE France Section" members={committeeData.ieeeFranceSection} />

            <div className="text-center mt-4">
              <span className="inline-block h-1 w-24 rounded bg-[#a21d2e] mt-4 mb-6"></span>
            </div>

            {/* ── TEXT-ONLY SECTIONS (Advisory & Working Committees) ── */}
            <div className="bg-white border border-gray-150 rounded-2xl p-6 sm:p-10 shadow-md mt-12">
              <div className="flex flex-col lg:flex-row gap-12">
                
                {/* Left Panel: Program Chair & Working Committee */}
                <div className="w-full lg:w-1/2">
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-[#a21d2e] border-b border-gray-100 pb-2 mb-4 font-heading">Program Chair</h3>
                    <div className="space-y-2">
                      {programChair.map((element) => (
                        <p className="text-sm sm:text-base font-semibold text-gray-800" key={element}>
                          <span className="text-[#293985] font-bold">{doMyTask(element)[0]}</span>
                          {doMyTask(element)[1] ? `, ${doMyTask(element)[1]}` : ''}
                          {doMyTask(element)[2] ? ` ${doMyTask(element)[2]}` : ''}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#a21d2e] border-b border-gray-100 pb-2 mb-4 font-heading">Working Committee</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                      {workingCommittee.map((element) => (
                        <p className="text-xs sm:text-sm font-semibold text-gray-800 leading-snug" key={element}>
                          <span className="text-[#293985] font-bold">{doMyTask(element)[0]}</span>
                          {doMyTask(element)[1] ? `, ${doMyTask(element)[1]}` : ''}
                          {doMyTask(element)[2] ? ` ${doMyTask(element)[2]}` : ''}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Panel: International Advisory Committee */}
                <div className="w-full lg:w-1/2">
                  <h3 className="text-xl font-bold text-[#a21d2e] border-b border-gray-100 pb-2 mb-4 font-heading">International Advisory Committee</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      {internationalAdvisoryCommittee1.map((element) => (
                        <p className="text-xs sm:text-sm font-semibold text-gray-800 leading-tight" key={element}>
                          <span className="text-[#293985] font-bold">{doMyTask(element)[0]}</span>, {doMyTask(element)[1]} {doMyTask(element)[2]}
                        </p>
                      ))}
                    </div>
                    <div className="space-y-2">
                      {internationalAdvisoryCommittee2.map((element) => (
                        <p className="text-xs sm:text-sm font-semibold text-gray-800 leading-tight" key={element}>
                          <span className="text-[#293985] font-bold">{doMyTask(element)[0]}</span>, {doMyTask(element)[1]} {doMyTask(element)[2]}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
})

ProgrameComitte.displayName = 'ProgrameComitte'

export default ProgrameComitte
