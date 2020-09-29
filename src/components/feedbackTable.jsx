import React from 'react'
import { Link } from 'react-router-dom'

export default ({ feedbacks }) => (
  <div>
    <table className='feedback-table'>
      <thead>
        <tr>
          <th> Id </th>
          <th> Title </th>
          <th> User </th>
          <th> Status </th>
          <th>  </th>
        </tr>
      </thead>
      <tbody>
        { feedbacks.map(item => (
          <tr key={ item.id }>
            <td> { item.id } </td>
            <td> { item.title } </td>
            <td> { item.username } </td>
            <td> { item.status } </td>
            <td>
              <Link to={`/feedback/${item.id}`}> Show </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)
