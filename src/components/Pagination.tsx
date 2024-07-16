import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="flex justify-center mt-4">
      <ul className="flex space-x-2">
        {currentPage > 1 && (
          <li>
            <button onClick={() => onPageChange(currentPage - 1)} className="px-3 py-1 border rounded">
              &lt;&lt;
            </button>
          </li>
        )}
        <li>
          <button onClick={() => onPageChange(1)} className="px-3 py-1 border rounded">
            &lt;
          </button>
        </li>
        {pageNumbers.map(number => (
          <li key={number}>
            <button
              onClick={() => onPageChange(number)}
              className={`px-3 py-1 border rounded ${currentPage === number ? 'bg-black text-white' : ''}`}
            >
              {number}
            </button>
          </li>
        ))}
        <li>
          <button onClick={() => onPageChange(totalPages)} className="px-3 py-1 border rounded">
            &gt;
          </button>
        </li>
        {currentPage < totalPages && (
          <li>
            <button onClick={() => onPageChange(currentPage + 1)} className="px-3 py-1 border rounded">
              &gt;&gt;
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;