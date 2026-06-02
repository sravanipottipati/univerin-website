import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PrivacyPolicy() {
  const navigate = useNavigate();
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <button style={styles.backBtn} onClick={() => navigate('/')}>← Back to Home</button>
        <h1 style={styles.title}>Privacy Policy</h1>
        <p style={styles.updated}>Last updated: May 2026</p>
      </div>
      <div style={styles.content}>

        <section style={styles.section}>
          <h2 style={styles.h2}>1. Introduction</h2>
          <p style={styles.p}>Univerin Private Limited ("Univerin", "we", "us", or "our") operates the Univerin mobile application and website (www.univerin.in). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.</p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>2. Information We Collect</h2>
          <p style={styles.p}>We collect the following types of information:</p>
          <ul style={styles.ul}>
            <li style={styles.li}><strong>Personal Information:</strong> Name, phone number, email address</li>
            <li style={styles.li}><strong>Location Data:</strong> Precise location to show nearby shops</li>
            <li style={styles.li}><strong>Order History:</strong> Items ordered, delivery addresses, order status</li>
            <li style={styles.li}><strong>Device Information:</strong> Device ID for push notifications</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>3. How We Use Your Information</h2>
          <ul style={styles.ul}>
            <li style={styles.li}>To create and manage your account</li>
            <li style={styles.li}>To process and deliver your orders</li>
            <li style={styles.li}>To send order status notifications</li>
            <li style={styles.li}>To show nearby local shops based on your location</li>
            <li style={styles.li}>To improve our services and user experience</li>
            <li style={styles.li}>To process payments securely</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>4. Data Sharing</h2>
          <p style={styles.p}>We do not sell your personal data. We may share your information with:</p>
          <ul style={styles.ul}>
            <li style={styles.li}><strong>Local Vendors:</strong> Your name, delivery address and phone for order fulfillment</li>
            <li style={styles.li}><strong>Payment Gateway:</strong> Razorpay handles all payment data securely</li>
            <li style={styles.li}><strong>SMS Provider:</strong> Phone number for OTP verification only</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>5. Data Security</h2>
          <p style={styles.p}>We implement industry-standard security measures to protect your data. All data is transmitted over HTTPS. Passwords are encrypted and never stored in plain text.</p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>6. Account Deletion</h2>
          <p style={styles.p}>You can request account deletion by contacting us at privacy@univerin.in. We will delete your personal data within 30 days of the request.</p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>7. Contact Us</h2>
          <p style={styles.p}>For privacy concerns, contact us at:</p>
          <p style={styles.p}><strong>Email:</strong> privacy@univerin.in</p>
          <p style={styles.p}><strong>Address:</strong> Univerin Private Limited, 4/11, Sankarapuram, Govindampalli, Obulavaripalle - 516105, Andhra Pradesh, India</p>
        </section>

      </div>
    </div>
  );
}

const styles = {
  container: { maxWidth: 800, margin: '0 auto', padding: '20px 24px', fontFamily: 'sans-serif', color: '#111' },
  header: { borderBottom: '2px solid #1669ef', paddingBottom: 20, marginBottom: 30 },
  backBtn: { background: 'none', border: '1px solid #1669ef', color: '#1669ef', padding: '8px 16px', borderRadius: 8, cursor: 'pointer', marginBottom: 16, fontSize: 14 },
  title: { fontSize: 32, fontWeight: 800, color: '#111', margin: '0 0 8px 0' },
  updated: { color: '#888', fontSize: 14, margin: 0 },
  content: { lineHeight: 1.8 },
  section: { marginBottom: 32 },
  h2: { fontSize: 20, fontWeight: 700, color: '#1669ef', marginBottom: 12 },
  p: { fontSize: 15, color: '#444', marginBottom: 12 },
  ul: { paddingLeft: 20 },
  li: { fontSize: 15, color: '#444', marginBottom: 8 },
};
