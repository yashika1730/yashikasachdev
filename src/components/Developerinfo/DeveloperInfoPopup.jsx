// DeveloperInfoPopup.jsx (यह कोड सही है)

// Example structure for a React component (conceptual)
import './DeveloperInfoPopup.css'
function DeveloperInfoPopup({ show, onClose, studentName, studentPhotoUrl, uniqueMessage }) {
  if (!show) {
    return null; // Don't render if not visible
  }
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>&times;</button>
        <img src={studentPhotoUrl} alt={`${studentName}'s Photo`} className="student-photo" />
        <h3 className="popup-title">Developed & Deployed by:</h3>
        <p className="student-name">{studentName}</p> {/* <-- यह लाइन आपका नाम (Yashika) प्रिंट करेगी */}
        <p className="unique-message">{uniqueMessage}</p>
        <button className="ok-button" onClick={onClose}>Got It!</button>
      </div>
    </div>
  );
}
export default DeveloperInfoPopup;