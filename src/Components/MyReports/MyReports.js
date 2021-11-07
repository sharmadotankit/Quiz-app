import "./MyReports.css";
import dateFormat from 'dateformat';

function MyReports({ reports }) {
    let rowNum = 1;
    return (
        <div className="myReportsDiv">
            <table border="1">
                <tr>
                    <th>Sr No.</th>
                    <th>Subject</th>
                    <th>Level</th>
                    <th>Status</th>
                    <th>Score</th>
                    <th>Date</th>
                </tr>
                {
                    reports.map((report, i) => {
                        return <tr>
                            <td>{rowNum++}</td>
                            <td>{report.subject}</td>
                            <td>{report.level}</td>
                            <td>{report.status}</td>
                            <td>{report.score}</td>
                            <td>{dateFormat(report.date, "mmmm dS, yyyy")}</td>
                        </tr>
                    })
                }
            </table>
        </div>
    );


}

export default MyReports;
