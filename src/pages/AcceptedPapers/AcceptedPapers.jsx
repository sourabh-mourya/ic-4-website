import React from 'react';
import Footer from '../../components/layout/Footer/Footer';
import Nav from '../../components/layout/Navbar/Navbar';
import PageHeader from '../../components/common/PageHeader';
import '../../components/common/PageHeader.css';
import { assets } from '../../constants/assets';
import './AcceptedPapers.css';

const AcceptedPapers = () => {
  return (
    <>
      <Nav />
      
      <PageHeader
        eyebrow="For Accepted Authors"
        title="Paper Guidelines"
        desc="Please follow these instructions carefully to ensure your final camera-ready paper is accepted for publication."
      />

      <div className="page-body">
        <div className="page-container page-container--narrow">
          
          <div className="guidelines-card-wrapper">
            
            {/* Key Constraints Grid */}
            <div className="constraints-grid">
              <div className="constraint-item">
                <span className="constraint-label">Page Limit</span>
                <span className="constraint-val">6 Pages (Max 8)</span>
              </div>
              <div className="constraint-item">
                <span className="constraint-label">File Size</span>
                <span className="constraint-val">Below 5 MB</span>
              </div>
              <div className="constraint-item">
                <span className="constraint-label">Plagiarism Limit</span>
                <span className="constraint-val">Under 15%</span>
              </div>
              <div className="constraint-item">
                <span className="constraint-label">Language</span>
                <span className="constraint-val">English Only</span>
              </div>
            </div>

            {/* Submission Guidelines List */}
            <div className="guidelines-checklist-section">
              <h3 className="section-subtitle font-heading">
                Submission Guidelines
              </h3>
              <ul className="checklist-items">
                <li className="checklist-item">
                  <div className="checklist-bullet">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <span>
                    <strong>Original Submissions:</strong> We invite researchers, practitioners, and students worldwide to submit previously unpublished, original, innovative papers for presentation.
                  </span>
                </li>
                <li className="checklist-item">
                  <div className="checklist-bullet">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <span>
                    <strong>Peer Review Process:</strong> All submissions will undergo strict double-blind peer-review. Papers must include a title, complete author contact info, abstract, and keywords on the first page.
                  </span>
                </li>
                <li className="checklist-item">
                  <div className="checklist-bullet">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <span>
                    <strong>IEEE Template:</strong> The paper formatting must strictly align with the standard IEEE templates. You can download the template using the button below or find more details on the{' '}
                    <a 
                      href="https://www.ieee.org/conferences/publishing/templates.html" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-link"
                    >
                      IEEE Publishing Templates
                    </a>{' '}
                    portal.
                  </span>
                </li>
                <li className="checklist-item">
                  <div className="checklist-bullet">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <span>
                    <strong>Plagiarism Check:</strong> All submitted manuscripts will go through a plagiarism check. Papers with a similarity score of <strong>15% or above</strong> are liable to be rejected immediately without further review.
                  </span>
                </li>
                <li className="checklist-item">
                  <div className="checklist-bullet">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <span>
                    <strong>CMT Submission:</strong> Paper submission must be done online via the CMT link provided on our submission page. Email submissions are not accepted.
                  </span>
                </li>
              </ul>
            </div>

            {/* Rejection Criteria */}
            <div className="rejection-box">
              <h3 className="rejection-title font-heading">
                <i className="fa-solid fa-circle-exclamation"></i> Common Reasons for Rejection
              </h3>
              <p className="rejection-desc">
                The organizing committee reserves the right to reject submitted papers for publication in cases of:
              </p>
              <div className="rejection-grid">
                <div className="rejection-item">
                  <span className="rejection-num">1.</span> Poor English language quality
                </div>
                <div className="rejection-item">
                  <span className="rejection-num">2.</span> Insufficient technical or scientific content
                </div>
                <div className="rejection-item">
                  <span className="rejection-num">3.</span> Failure to address reviewer feedback and remarks
                </div>
                <div className="rejection-item">
                  <span className="rejection-num">4.</span> Plagiarism / High similarity index (&ge; 15%)
                </div>
                <div className="rejection-item rejection-item--full">
                  <span className="rejection-num">5.</span> Significant deviations from standard IEEE template formatting
                </div>
              </div>
            </div>

            {/* Download Action Section */}
            <div className="template-download-footer">
              <div className="template-info">
                <h4 className="template-title font-heading">Standard Paper Template</h4>
                <p className="template-desc">Download standard double-column IEEE format for formatting reference.</p>
              </div>
              <a href={assets.paperTemplate} download="IEEE-Paper-Template.docx" className="template-btn-wrap">
                <button className="page-btn page-btn--primary">
                  <i className="fa-solid fa-file-arrow-down"></i> Download IEEE Format
                </button>
              </a>
            </div>

          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default AcceptedPapers;