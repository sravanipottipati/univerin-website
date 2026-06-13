import React from 'react';

export default function SellerAgreement() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: 700, margin: "0 auto", padding: "40px 20px" }}>
      <div style={{ textAlign: "center", marginBottom: 30 }}>
        <h1 style={{ color: "#1669ef", fontSize: 28 }}>Univerin Seller Agreement</h1>
        <p style={{ color: "#666" }}>Please read carefully before registering as a seller</p>
      </div>

      <div style={{ backgroundColor: "#eff6ff", border: "1px solid #1669ef", borderRadius: 12, padding: 20, marginBottom: 24 }}>
        <h3 style={{ color: "#1669ef", margin: "0 0 8px" }}>FSSAI Compliance</h3>
        <p style={{ color: "#444", fontSize: 14, margin: 0 }}>All food sellers must hold a valid FSSAI license. Univerin will verify your FSSAI number before activating your account.</p>
      </div>

      <h2 style={{ color: "#111", fontSize: 18 }}>1. FSSAI License Requirements</h2>
      <ul style={{ color: "#444", fontSize: 14, lineHeight: 1.8 }}>
        <li>You must hold a valid FSSAI License/Registration at the time of onboarding</li>
        <li>You must upload your FSSAI certificate during registration</li>
        <li>You must notify Univerin immediately if your FSSAI license expires or is cancelled</li>
        <li>Selling food without a valid FSSAI license is a punishable offense under FSS Act, 2006</li>
      </ul>

      <h2 style={{ color: "#111", fontSize: 18 }}>2. Accurate Product Listing</h2>
      <ul style={{ color: "#444", fontSize: 14, lineHeight: 1.8 }}>
        <li>Provide accurate product name, price, ingredients, net weight, expiry date</li>
        <li>Do not make false or misleading claims about products</li>
        <li>Update listings immediately when product information changes</li>
        <li>All products must comply with FSSAI labeling requirements</li>
      </ul>

      <h2 style={{ color: "#111", fontSize: 18 }}>3. Food Safety Standards</h2>
      <ul style={{ color: "#444", fontSize: 14, lineHeight: 1.8 }}>
        <li>Comply with all provisions of FSS Act, 2006 and FSSAI regulations</li>
        <li>Maintain proper hygiene in food preparation and storage</li>
        <li>Do not sell adulterated, misbranded, or expired products</li>
        <li>Use food-grade packaging materials only</li>
      </ul>

      <h2 style={{ color: "#111", fontSize: 18 }}>4. Commission & Tax</h2>
      <ul style={{ color: "#444", fontSize: 14, lineHeight: 1.8 }}>
        <li>Commission: Groceries 6%, Vegetables/Fruits 3%, Restaurant/Bakery/FastFood 20%</li>
        <li>GST TCS @ 0.5% deducted (GST registered sellers only)</li>
        <li>TDS @ 1% u/s 194-O deducted from all sellers</li>
        <li>Weekly settlement to registered bank account</li>
      </ul>

      <h2 style={{ color: "#111", fontSize: 18 }}>5. Joint Liability</h2>
      <ul style={{ color: "#444", fontSize: 14, lineHeight: 1.8 }}>
        <li>You are solely responsible for quality and safety of your products</li>
        <li>You agree to indemnify Univerin for any claims arising from your products</li>
        <li>False FSSAI information may result in account termination and legal action</li>
      </ul>

      <div style={{ backgroundColor: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 12, padding: 20, marginTop: 30 }}>
        <p style={{ color: "#666", fontSize: 13, margin: 0 }}>
          By registering on Univerin, you confirm that you have read, understood, and agree to all terms of this Seller Agreement.
          For queries: <a href="mailto:contact@univerin.in" style={{ color: "#1669ef" }}>contact@univerin.in</a>
        </p>
      </div>

      <div style={{ borderTop: "1px solid #E5E7EB", marginTop: 40, paddingTop: 20, textAlign: "center" }}>
        <p style={{ color: "#9CA3AF", fontSize: 14 }}>© 2026 Univerin Private Limited | contact@univerin.in</p>
      </div>
    </div>
  );
}
