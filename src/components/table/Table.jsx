import PropTypes from 'prop-types'
import React from 'react'
import { useState } from 'react';
import { renderBody, renderHead } from '../../utils/table';
import './table.css'

let pages = 1;
let range = [];

const Table = ({ headData, bodyData, limit }) => {
	const initShowData = limit ? bodyData.slice(0, limit) : bodyData;
	const [showData, setShowData] = useState(initShowData);
	const [currentPage, setCurrentPage] = useState(1);

	if (limit) {
		let page = Math.floor(bodyData.length / limit);
		pages = bodyData.length % limit === 0 ? page : page + 1;
		range = [...Array(pages).keys()];
	}

	const selectOnPage = page => {
		const start = limit * page;
		const end = start + limit;

		setShowData(bodyData.slice(start, end));
		setCurrentPage(page + 1);
	}

	return (
		<>
			<div className="table-wrapper">
				<table>
					{
						headData && 
							<thead>
								<tr>
									{
										headData.map((item, index) => renderHead(item, index))
									}
								</tr>
							</thead>
					}
					{
						bodyData &&
							<tbody>
								{
									showData.map((item, index) => renderBody(item, index))
								}
							</tbody>
					}
				</table>
			</div>
			{
				pages > 1 && (
					<div className="table__pagination">
						{
							range.map((item, index) => (
								<div 
									className={`table__pagination-item ${currentPage === item + 1 ? 'table__pagination-item--active': ''}`} 
									key={index}
									onClick={() => selectOnPage(item)}
								>
									{ item + 1 }
								</div>	
							))
						}
					</div>
				)
			}
		</>
	)
}

Table.propTypes = {
	headData: PropTypes.array,
	bodyData: PropTypes.array,
	limit: PropTypes.number,
}

Table.defaultProps = {
	headData: [],
	bodyData: [],
	limit: null,
}

export default Table
