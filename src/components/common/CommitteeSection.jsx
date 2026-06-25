import React, { memo } from 'react';

/**
 * CommitteeSection - Renders a section of committee members with photos.
 * @param {string} title     - Section heading (e.g. "General Co-Chairs")
 * @param {Array}  members   - Array of { name, designation, image }
 * @param {boolean} fullWidth - When true renders full-width cards
 */
const CommitteeSection = memo(({ title, members, fullWidth = false }) => {
  if (!members || members.length === 0) return null;

  return (
    <div className="mb-10">
      <h3 className="leading-relaxed text-lg sm:text-[1.35rem] font-bold text-[#a21d2e] mt-4 mb-4 border-b border-gray-150 pb-2">
        {title}
      </h3>
      <div className={
        fullWidth 
          ? "grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 justify-center"
          : "grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-6 justify-center"
      }>
        {members.map((member, idx) => (
          <div key={idx} className="committee-card">
            {member.image && (
              <img
                src={member.image}
                alt={member.name}
                className="committee-img"
                loading="lazy"
              />
            )}
            <p className="committee-name">{member.name}</p>
            <p className="committee-designation">{member.designation}</p>
          </div>
        ))}
      </div>
    </div>
  );
});

CommitteeSection.displayName = 'CommitteeSection';

export default CommitteeSection;
