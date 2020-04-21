console.log(props)
// console.log(props.results[1].gender);
//     console.log(props.results.length);
//   for(let i=0;i<props.results.length -1 ;i++){
//        console.log(props.results[i].gender);
//   }<br/>
<table className="table">
    <thead>
        <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">
                <img src="https://randomuser.me/api/portraits/thumb/men/75.jpg" alt="Mark's pic"></img>
            </th>
            <td>Mark</td>
            <td>04-931-349</td>
            <td>aatu.honkala@example.com</td>
            <td>1968-10-19T09:54:34.189Z</td>
        </tr>
        <tr>
            <th scope="row">
                <img src="https://randomuser.me/api/portraits/thumb/men/51.jpg" alt="Mark's pic"></img>
            </th>
            <td>Mark</td>
            <td>04-931-349</td>
            <td>aatu.honkala@example.com</td>
            <td>1968-10-19T09:54:34.189Z</td>
        </tr>
        <tr>
            <th scope="row">
                <img src="https://randomuser.me/api/portraits/thumb/men/88.jpg" alt="Mark's pic"></img>
            </th>
            <td>Mark</td>
            <td>04-931-349</td>
            <td>aatu.honkala@example.com</td>
            <td>1968-10-19T09:54:34.189Z</td>
        </tr>
        <tr>
            <th scope="row">
                <img src="https://randomuser.me/api/portraits/thumb/women/18.jpg" alt="Mark's pic"></img>
            </th>
            <td>Mark</td>
            <td>04-931-349</td>
            <td>aatu.honkala@example.com</td>
            <td>1968-10-19T09:54:34.189Z</td>
        </tr>
    </tbody>
</table>


/**
 *    console.log(res.data.results);
                 var apiResult = res.data.results;
                 apiResult.sort(API.compareByName);
                 return this.setState( { results: apiResult} );
 */