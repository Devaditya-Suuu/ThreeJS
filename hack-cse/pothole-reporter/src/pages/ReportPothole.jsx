import ReportForm from '../components/ReportForm';

function ReportPothole({ setReports, reports }) {
    return (
        <div>
            {/*<h2>Report a Pothole</h2>*/}
            <ReportForm setReports={setReports} reports={reports} />
        </div>
    );
}

export default ReportPothole;
