import React, { useState } from 'react';

export default function DeleteAccount() {
  const [submitted, setSubmitted] = useState(false);
  const [phone, setPhone] = useState('');
  const [reason, setReason] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!phone) { alert('Please enter your phone number'); return; }
    setLoading(true);
    try {
      await fetch('https://api.univerin.in/api/users/delete-account-request/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, reason }),
      });
      setSubmitted(true);
    } catch (e) {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: 600, margin: "0 auto", padding: "40px 20px" }}>
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <h1 style={{ color: "#1669ef", fontSize: 28 }}>Delete Your Univerin Account</h1>
        <p style={{ color: "#666" }}>We are sorry to see you go!</p>
      </div>
      {!submitted ? (
        <>
          <div style={{ backgroundColor: "#fef2f2", border: "1px solid #fecaca", borderRadius: 12, padding: 20, marginBottom: 30 }}>
            <h3 style={{ color: "#dc2626", margin: "0 0 10px" }}>Before you delete</h3>
            <ul style={{ color: "#444", paddingLeft: 20 }}>
              <li>All your order history will be permanently deleted</li>
              <li>Your wallet balance will be forfeited</li>
              <li>This action cannot be undone</li>
              <li>We will process your request within 24 hours</li>
            </ul>
          </div>
          <h3 style={{ color: "#111", marginBottom: 16 }}>Submit deletion request:</h3>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: 16 }}>
              <label style={{ display: "block", marginBottom: 6, color: "#444", fontWeight: "600" }}>Phone Number *</label>
              <input type="tel" value={phone} onChange={e => setPhone(e.target.value)}
                placeholder="Enter your registered phone number"
                style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: "1px solid #D1D5DB", fontSize: 16, boxSizing: "border-box" }} />
            </div>
            <div style={{ marginBottom: 24 }}>
              <label style={{ display: "block", marginBottom: 6, color: "#444", fontWeight: "600" }}>Reason (optional)</label>
              <textarea value={reason} onChange={e => setReason(e.target.value)}
                placeholder="Tell us why you are leaving..." rows={3}
                style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: "1px solid #D1D5DB", fontSize: 16, boxSizing: "border-box", resize: "vertical" }} />
            </div>
            <button type="submit" disabled={loading}
              style={{ width: "100%", padding: "14px", backgroundColor: "#dc2626", color: "#fff", border: "none", borderRadius: 8, fontSize: 16, fontWeight: "700", cursor: "pointer" }}>
              {loading ? "Submitting..." : "Submit Deletion Request"}
            </button>
          </form>
        </>
      ) : (
        <div style={{ textAlign: "center", padding: 40 }}>
          <div style={{ fontSize: 64, marginBottom: 20 }}>✅</div>
          <h2 style={{ color: "#16a34a" }}>Request Submitted!</h2>
          <p style={{ color: "#666", fontSize: 16 }}>Your account will be deleted within 24 hours.</p>
          <p style={{ color: "#666" }}>For queries: <a href="mailto:contact@univerin.in" style={{ color: "#1669ef" }}>contact@univerin.in</a></p>
        </div>
      )}
      <div style={{ borderTop: "1px solid #E5E7EB", marginTop: 40, paddingTop: 20, textAlign: "center" }}>
        <p style={{ color: "#9CA3AF", fontSize: 14 }}>2026 Univerin Private Limited | contact@univerin.in</p>
      </div>
    </div>
  );
}
