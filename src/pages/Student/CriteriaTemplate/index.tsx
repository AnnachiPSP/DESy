import React from 'react'
import PropTypes from 'prop-types';
import './index.css'


const CriteriaTemplate = ({ data }) => {
    const heading = ['Requirement Name', 'Required', 'Completed', 'Fulfilled'];
  
    return (
      <table className="table-container">
        <thead>
          <tr className="criteria-table-row bold">
            {heading.map((cell, cellIndex) => (
              <th key={cellIndex} className="table-cell">
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className={`criteria-table-row criteria-hoverable`}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className={`table-cell ${cellIndex === 3 ? 'icon' : ''}`}>
                  {cellIndex === 3 ? (
                    cell ? (
                      <i className="fas fa-check icon tick"></i>
                    ) : (
                      <i className="fas fa-times icon cross"></i>
                    )
                  ) : (
                    cell
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default CriteriaTemplate;
  