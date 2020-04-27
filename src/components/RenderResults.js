import React from 'react'

export default function RenderResults(props) {

      const labelColor = {
          color:"#007BFF"
      }
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col" style={labelColor}>Image</th>
                    <th scope="col">
                        <a  href="#" onClick={props.sortByName}>Name</a>
                    </th>
                    <th scope="col" style={labelColor}>Phone</th>
                    <th scope="col" style={labelColor}>Email</th>
                    <th scope="col" style={labelColor}>
                    <a  href="#" onClick={props.sortByDOB}>DOB</a>
                    </th>
                </tr>
            </thead>
            <tbody>
                { props.results.map((result,index) => (
                    <tr key={index}>
                        <th >
                            <img src={result.picture.thumbnail} alt="Mark's pic"></img>
                        </th>
                        <td>{result.name.first} {result.name.last}</td>
                        <td>{result.phone}</td>
                        <td>{result.email}</td>
                        <td>{result.dob.date.substring(0,10)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
  