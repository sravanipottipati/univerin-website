import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ContactUs() {
  const navigate = useNavigate();
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <button style={styles.backBtn} onClick={() => navigate('/')}>← Back to Home</button>
        <h1 style={styles.title}>Contact Us</h1>
        <p style={styles.updated}>We're here to help!</p>
      </div>
      <div style={styles.content}>

        <section style={styles.section}>
          <h2 style={styles.h2}>Get in Touch</h2>
          <p style={styles.p}>Have a question or need help? Reach out to us through any of the following channels:</p>
        </section>

        <div style={styles.cardsRow}>
          <div style={styles.card}>
            <div style={styles.cardIcon}>📧</div>
            <h3 style={styles.cardTitle}>Email Support</h3>
            <p style={styles.cardText}>support@univerin.in</p>
            <p style={styles.cardSub}>We reply within 24 hours</p>
          </div>
          <div style={styles.card}>
            <div style={styles.cardIcon}>📞</div>
            <h3 style={styles.cardTitle}>Phone Support</h3>
            <p style={styles.cardText}>+91 9000869619</p>
            <p style={styles.cardSub}>Mon-Sat, 9AM - 6PM</p>
          </div>
          <div style={styles.card}>
            <div style={styles.cardIcon}>🌐</div>
            <h3 style={styles.cardTitle}>Website</h3>
            <p style={styles.cardText}>www.univerin.in</p>
            <p style={styles.cardSub}>Always available</p>
          </div>
        </div>

        <section style={styles.section}>
          <h2 style={styles.h2}>Registered Address</h2>
          <div style={styles.addressBox}>
            <p style={styles.p}><strong>Univerin Private Limited</strong></p>
            <p style={styles.p}>4/11, Sankarapuram, Govindampalli</p>
            <p style={styles.p}>Obulavaripalle - 516105</p>
            <p style={styles.p}>Andhra Pradesh, India</p>
            <p style={styles.p}><strong>GSTIN:</strong> 37AADCU8846J1ZP</p>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>For Vendors</h2>
          <p style={styles.p}>Interested in listing your shop on Univerin? Contact us at <strong>support@univerin.in</strong> with your shop details.</p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>Privacy Concerns</h2>
          <p style={styles.p}>For privacy-related queries or account deletion requests, email us at <strong>privacy@univerin.in</strong></p>
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
  p: { fontSize: 15, color: '#444', marginBottom: 8 },
  cardsRow: { display: 'flex', gap: 16, marginBottom: 32, flexWrap: 'wrap' },
  card: { flex: 1, minWidth: 200, backgroundColor: '#F8FAFF', border: '1px solid #dbeafe', borderRadius: 12, padding: 20, textAlign: 'center' },
  cardIcon: { fontSize: 32, marginBottom: 8 },
  cardTitle: { fontSize: 16, fontWeight: 700, color: '#111', marginBottom: 8 },
  cardText: { fontSize: 15, color: '#1669ef', fontWeight: 600, marginBottom: 4 },
  cardSub: { fontSize: 13, color: '#888' },
  addressBox: { backgroundColor: '#F8FAFF', border: '1px solid #dbeafe', borderRadius: 12, padding: 20 },
};
