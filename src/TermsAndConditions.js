import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function TermsAndConditions() {
  const navigate = useNavigate();
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <button style={styles.backBtn} onClick={() => navigate('/')}>← Back to Home</button>
        <h1 style={styles.title}>Terms & Conditions</h1>
        <p style={styles.updated}>Last updated: May 2026</p>
      </div>
      <div style={styles.content}>

        <section style={styles.section}>
          <h2 style={styles.h2}>1. Acceptance of Terms</h2>
          <p style={styles.p}>By using the Univerin app or website, you agree to these Terms and Conditions. If you do not agree, please do not use our services.</p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>2. About Univerin</h2>
          <p style={styles.p}>Univerin is a hyperlocal marketplace that connects buyers with local shops in their neighborhood. We facilitate orders between buyers and vendors but are not responsible for the products sold by vendors.</p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>3. User Accounts</h2>
          <ul style={styles.ul}>
            <li style={styles.li}>You must provide accurate information when creating an account</li>
            <li style={styles.li}>You are responsible for maintaining the security of your account</li>
            <li style={styles.li}>You must be at least 18 years old to use our services</li>
            <li style={styles.li}>One person may only have one account</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>4. Orders and Payments</h2>
          <ul style={styles.ul}>
            <li style={styles.li}>Orders are subject to vendor availability and acceptance</li>
            <li style={styles.li}>Prices are set by vendors and may vary</li>
            <li style={styles.li}>Payment can be made via Cash on Delivery or Online Payment</li>
            <li style={styles.li}>Platform fee and delivery charges apply as shown at checkout</li>
            <li style={styles.li}>GST (18%) is applicable on platform and delivery fees</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>5. Delivery</h2>
          <ul style={styles.ul}>
            <li style={styles.li}>Delivery time is estimated and may vary based on vendor and distance</li>
            <li style={styles.li}>Delivery is available within the vendor's delivery radius</li>
            <li style={styles.li}>You must provide accurate delivery address</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>6. Vendor Terms</h2>
          <ul style={styles.ul}>
            <li style={styles.li}>Vendors must provide accurate product information and pricing</li>
            <li style={styles.li}>Vendors are responsible for the quality of their products</li>
            <li style={styles.li}>Platform fee is charged per order as per the vendor's category</li>
            <li style={styles.li}>Earnings are settled weekly by Univerin admin</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>7. Prohibited Activities</h2>
          <ul style={styles.ul}>
            <li style={styles.li}>Fraudulent orders or payments</li>
            <li style={styles.li}>Misuse of the platform</li>
            <li style={styles.li}>Selling prohibited or illegal items</li>
            <li style={styles.li}>Creating fake reviews or ratings</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>8. Contact Us</h2>
          <p style={styles.p}><strong>Email:</strong> support@univerin.in</p>
          <p style={styles.p}><strong>Address:</strong> Univerin Private Limited, 4/11, Sankarapuram, Govindampalli, Obulavaripalle - 516105, Andhra Pradesh, India</p>
          <p style={styles.p}><strong>GSTIN:</strong> 37AADCU8846J1ZP</p>
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
