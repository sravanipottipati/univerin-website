import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function RefundPolicy() {
  const navigate = useNavigate();
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <button style={styles.backBtn} onClick={() => navigate('/')}>← Back to Home</button>
        <h1 style={styles.title}>Refund & Cancellation Policy</h1>
        <p style={styles.updated}>Last updated: May 2026</p>
      </div>
      <div style={styles.content}>

        <section style={styles.section}>
          <h2 style={styles.h2}>1. Order Cancellation</h2>
          <p style={styles.p}>You can cancel your order only if it has not been accepted by the vendor yet (status: "Order Placed"). Once the vendor accepts the order, cancellation is not possible.</p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>2. Refund Eligibility</h2>
          <p style={styles.p}>Refunds are applicable in the following cases:</p>
          <ul style={styles.ul}>
            <li style={styles.li}>Wrong item delivered</li>
            <li style={styles.li}>Damaged or spoiled product delivered</li>
            <li style={styles.li}>Order not delivered but marked as delivered</li>
            <li style={styles.li}>Order cancelled before vendor acceptance</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>3. Refund Process</h2>
          <ul style={styles.ul}>
            <li style={styles.li}>Contact us within 24 hours of delivery with photo evidence</li>
            <li style={styles.li}>Refund requests are reviewed within 2 business days</li>
            <li style={styles.li}>Approved refunds are processed within 5-7 business days</li>
            <li style={styles.li}>Refund will be credited to the original payment method</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>4. Non-Refundable Items</h2>
          <ul style={styles.ul}>
            <li style={styles.li}>Platform fee is non-refundable once order is placed</li>
            <li style={styles.li}>Delivery fee is non-refundable once order is dispatched</li>
            <li style={styles.li}>Perishable items cannot be returned unless damaged</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>5. Cash on Delivery Orders</h2>
          <p style={styles.p}>For COD orders, refunds will be processed via bank transfer. Please provide your bank account details when contacting support.</p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.h2}>6. Contact for Refunds</h2>
          <p style={styles.p}><strong>Email:</strong> support@univerin.in</p>
          <p style={styles.p}><strong>Phone:</strong> +91 9000869619 (Mon-Sat, 9AM-6PM)</p>
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
