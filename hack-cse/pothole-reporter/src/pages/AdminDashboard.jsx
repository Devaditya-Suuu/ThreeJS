import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";

const AdminDashboard = () => {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        fetchReports();
    }, []);

    const fetchReports = async () => {
        const querySnapshot = await getDocs(collection(db, "reports"));
        const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setReports(data);
    };

    const handleDelete = async (id) => {
        await deleteDoc(doc(db, "reports", id));
        setReports(reports.filter((report) => report.id !== id));
    };

    const handleStatusUpdate = async (id, newStatus) => {
        await updateDoc(doc(db, "reports", id), { status: newStatus });
        setReports(reports.map((report) => report.id === id ? { ...report, status: newStatus } : report));
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Admin Dashboard</h2>
            <div style={styles.tableContainer}>
                <table style={styles.table}>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Location</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {reports.map((report, index) => (
                        <tr key={report.id}>
                            <td>{index + 1}</td>
                            <td>
                                <img src={report.imageUrl} alt="Pothole" style={styles.image} />
                            </td>
                            <td>{report.location ? `${report.location.lat}, ${report.location.lng}` : "Not Available"}</td>
                            <td>
                                <select
                                    value={report.status}
                                    onChange={(e) => handleStatusUpdate(report.id, e.target.value)}
                                    style={styles.statusSelect}
                                >
                                    <option value="Pending">Pending</option>
                                    <option value="Work in Progress">Work in Progress</option>
                                    <option value="Completed">Completed</option>
                                </select>
                            </td>
                            <td>
                                <button onClick={() => handleDelete(report.id)} style={styles.deleteBtn}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

// Styling
const styles = {
    container: {
        maxWidth: "90%",
        margin: "20px auto",
        padding: "20px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    },
    heading: {
        textAlign: "center",
        color: "#333",
        marginBottom: "15px",
    },
    tableContainer: {
        overflowX: "auto",
    },
    table: {
        width: "100%",
        borderCollapse: "collapse",
        textAlign: "center",
    },
    image: {
        width: "200px",
        height: "150px",
        borderRadius: "5px",
    },
    statusSelect: {
        padding: "5px",
        borderRadius: "5px",
        cursor: "pointer",
    },
    deleteBtn: {
        backgroundColor: "red",
        color: "white",
        padding: "5px 10px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
};

export default AdminDashboard;
