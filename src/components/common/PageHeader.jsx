import React, { memo } from 'react';

/**
 * PageHeader - Consistent gradient banner header for all pages.
 * @param {string} title - Page title text
 * @param {string} icon  - FontAwesome icon class (e.g. "fa-address-book")
 */
const PageHeader = memo(({ title, icon }) => {
  return (
    <div className="flex items-center mb-3 mr-8 justify-center gradientColor rounded-sm">
      <h1 className="sm:text-4xl text-xl font-black text-white sm:ml-12 ml-4 py-3 bodyFont2">
        {title}
      </h1>
      {icon && (
        <i
          className={`fa-solid ${icon} sm:fa-3x fa-2x ml-12`}
          style={{ color: '#ffffff' }}
        />
      )}
    </div>
  );
});

PageHeader.displayName = 'PageHeader';

export default PageHeader;
