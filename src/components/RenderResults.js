import React from 'react'

export default function RenderResults(props) {
console.log(props.results);
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">
                        Name
                        </th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB</th>
                </tr>
            </thead>
            <tbody>
                { props.results.map(result => (
                    // <li className="list-group-item" key={result.id.value}>
                    //     <img alt={result.name.first} className="img-fluid" src={result.picture.thumbnail} />
                    // </li>
                    <tr>
                        <th scope="row">
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
  