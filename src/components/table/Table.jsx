import React from 'react'
import { renderBody, renderHead } from '../../utils/table';
import './table.css'

const Table = ({ headData, bodyData }) => {
	return (
		<div className="table-wrapper">
			<table>
				{
					headData && renderHead && 
						<thead>
							<tr>
								{
									headData.map((item, index) => renderHead(item, index))
								}
							</tr>
						</thead>
				}
				{
					bodyData && renderBody &&
						<tbody>
							{
								bodyData.map((item, index) => renderBody(item, index))
							}
						</tbody>
				}
			</table>
		</div>
	)
}

export default Table
