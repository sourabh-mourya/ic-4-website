import React, { memo } from 'react'
import Footer from '../../components/layout/Footer/Footer'
import Nav from '../../components/layout/Navbar/Navbar'
import PageHeader from '../../components/common/PageHeader'
import '../../components/common/PageHeader.css'
import './Committee.css'
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
      
      <PageHeader
        eyebrow="Organizers"
        title="Committees"
        desc="Meet the academic leaders, advisory board, and organizing committee behind IC4'27."
      />

      <div className="page-body">
        <div className="page-container">

          {/* ── PHOTO SECTIONS ── */}

          {/* Chief Patron */}
          <CommitteeSection title="Chief Patron" members={committeeData.chiefPatron} />

          {/* Patron */}
          <CommitteeSection title="Patron" members={committeeData.patron} />

          {/* General Chair */}
          <CommitteeSection title="General Chair" members={committeeData.generalChair} />

          {/* General Co-Chairs */}
          <CommitteeSection title="General Co-Chairs" members={committeeData.generalCoChairs} />

          {/* Publication / Finance / Publicity / Technical */}
          <div className="committee-chairs-grid">
            <div className="committee-chairs-item">
              <CommitteeSection title="Publication Chair" members={committeeData.publicationChairs} />
            </div>
            <div className="committee-chairs-item">
              <CommitteeSection title="Finance Chair" members={committeeData.financeChair} />
            </div>
            <div className="committee-chairs-item">
              <CommitteeSection title="Publicity Chair" members={committeeData.publicityChair} />
            </div>
            <div className="committee-chairs-item">
              <CommitteeSection title="Technical Program Committee Chair" members={committeeData.technicalProgramChair} />
            </div>
          </div>

          {/* IEEE MP Section */}
          <CommitteeSection title="IEEE Madhya Pradesh Section" members={committeeData.ieeeMPSection} />

          <div className="committee-divider-wrap">
            <span className="committee-divider-line" />
          </div>

          {/* ── TEXT-ONLY SECTIONS ── */}
          <div className="committee-text-panel">
            <div className="committee-text-inner">

              {/* Left Panel */}
              <div className="committee-text-left">
                <div className="committee-subsection">
                  <h3 className="committee-sub-title">Program Chair</h3>
                  <div className="committee-list">
                    {programChair.map((element) => (
                      <p className="committee-list-item" key={element}>
                        <span className="committee-name-highlight">{doMyTask(element)[0]}</span>
                        {doMyTask(element)[1] ? `, ${doMyTask(element)[1]}` : ''}
                        {doMyTask(element)[2] ? ` ${doMyTask(element)[2]}` : ''}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="committee-subsection">
                  <h3 className="committee-sub-title">Working Committee</h3>
                  <div className="committee-working-grid">
                    {workingCommittee.map((element) => (
                      <p className="committee-list-item committee-list-item--sm" key={element}>
                        <span className="committee-name-highlight">{doMyTask(element)[0]}</span>
                        {doMyTask(element)[1] ? `, ${doMyTask(element)[1]}` : ''}
                        {doMyTask(element)[2] ? ` ${doMyTask(element)[2]}` : ''}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Panel */}
              <div className="committee-text-right">
                <h3 className="committee-sub-title">International Advisory Committee</h3>
                <div className="committee-advisory-grid">
                  <div className="committee-list">
                    {internationalAdvisoryCommittee1.map((element) => (
                      <p className="committee-list-item committee-list-item--sm" key={element}>
                        <span className="committee-name-highlight">{doMyTask(element)[0]}</span>
                        {doMyTask(element)[1] ? `, ${doMyTask(element)[1]}` : ''}
                        {doMyTask(element)[2] ? ` ${doMyTask(element)[2]}` : ''}
                      </p>
                    ))}
                  </div>
                  <div className="committee-list">
                    {internationalAdvisoryCommittee2.map((element) => (
                      <p className="committee-list-item committee-list-item--sm" key={element}>
                        <span className="committee-name-highlight">{doMyTask(element)[0]}</span>
                        {doMyTask(element)[1] ? `, ${doMyTask(element)[1]}` : ''}
                        {doMyTask(element)[2] ? ` ${doMyTask(element)[2]}` : ''}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  )
})

ProgrameComitte.displayName = 'ProgrameComitte'

export default ProgrameComitte
