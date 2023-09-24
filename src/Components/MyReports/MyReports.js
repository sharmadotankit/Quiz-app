import "./MyReports.css";
import dateFormat from 'dateformat';

function MyReports({ reports,userInfo }) {
    let rowNum = 1;
    console.log(userInfo)
    return (
        <div className="myReportsDiv">
            <table border="1">
            <thead>
                <tr>
                    <th>Sr No.</th>
                    <th>Subject</th>
                    <th>Level</th>
                    <th>Status</th>
                    <th>Score</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>               
                {
                    reports.map((report, i) => {
                        return <tr key={i}>
                            <td>{rowNum++}</td>
                            <td>{report.subject}</td>
                            <td>{report.level}</td>
                            <td>{report.status}</td>
                            <td>{report.score}</td>
                            <td>{dateFormat(report.date, "mmmm dS, yyyy")}</td>
                        </tr>
                    })
                }
                </tbody>
 
            </table>
        </div>
    );


}

export default MyReports;
