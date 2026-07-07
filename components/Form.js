import { SquareArrowOutUpRightIcon } from "@animateicons/react/lucide";
import { useState } from "react";

export default function Form({ isHomepage=true }) {
    
      const [form, setForm] = useState({ name: '', email: '', mobile: '', level: '', agree: false });
      const [errors, setErrors] = useState({});
      const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
      const validate = () => {
        const newErrors = {};
        if (!form.name.trim()) newErrors.name = 'Full name is required.';
        else if (form.name.trim().length < 2) newErrors.name = 'Name must be at least 2 characters.';
    
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!form.email.trim()) newErrors.email = 'Email address is required.';
        else if (!emailRegex.test(form.email)) newErrors.email = 'Enter a valid email address.';
    
        const mobileRegex = /^[6-9]\d{9}$/;
        if (!form.mobile.trim()) newErrors.mobile = 'Mobile number is required.';
        else if (!mobileRegex.test(form.mobile.replace(/\s/g, ''))) newErrors.mobile = 'Enter a valid 10-digit Indian mobile number.';
    
        if (!form.level) newErrors.level = 'Please select your experience level.';
        if (!form.agree) newErrors.agree = 'You must agree to the terms to enroll.';
        return newErrors;
      };
    
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
      };
    
    const handleSubmit = async (e) => {
  e.preventDefault();

  const validationErrors = validate();

  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  // Get URL params
  const params = new URLSearchParams(window.location.search);

  const tracking = {
    source: params.get("utm_source") || "",
    medium: params.get("utm_medium") || "",
    campaign: params.get("utm_campaign") || "",
    term: params.get("utm_term") || "",
    content: params.get("utm_content") || "",
    gclid: params.get("gclid") || "",
    fbclid: params.get("fbclid") || "",
    landing_page: window.location.href,
    page_path: window.location.pathname,
    referrer: document.referrer || "Direct",
    user_agent: navigator.userAgent,
  };

  try {
    setLoading(true);

    const response = await fetch("https://salescrm-xi.vercel.app/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: form.name,
        email: form.email,
        phone: form.mobile,
        level: form.level,
        course: "Azure + Azure DevOps",
        consent: form.agree,

        // Tracking
        ...tracking,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong");
    }
    window.location.href = "/thank-you";
    setSubmitted(true);

    setForm({
      name: "",
      email: "",
      mobile: "",
      level: "",
      agree: false,
    });
  } catch (error) {
    alert(error.message);
  } finally {
    setLoading(false);
  }
};
    
      const inputBase = {
        width: '100%',
        padding: '10px 14px',
        borderRadius: '6px',
        border: '1px solid rgba(255,255,255,0.25)',
        background: 'rgba(255,255,255,0.12)',
        color: '#fff',
        fontSize: '14px',
        outline: 'none',
        boxSizing: 'border-box',
        backdropFilter: 'blur(4px)',
        transition: 'border-color 0.2s, background 0.2s',
      };
    
      const errorStyle = { color: '#fca5a5', fontSize: '12px', marginTop: '4px', display: 'block' };
      const labelStyle = { color: 'rgba(255,255,255,0.85)', fontSize: '13px', fontWeight: 500, marginBottom: '6px', display: 'block' };
    return(
        <div
            className="w-full max-w-lg mx-auto text-left"
            id="formSub"
            style={{
              background: 'rgba(255,255,255,0.10)',
              border: '1px solid rgba(255,255,255,0.20)',
              borderRadius: '8px',
              padding: '32px',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 8px 40px rgba(0,0,0,0.30)',
            }}
          >
            {submitted ? (
              <div className="text-center py-6">
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(255,255,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: 28 }}>✓</div>
                <h3 className="text-xl font-bold text-white mb-2">You're on the list!</h3>
                <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14 }}>Our team will reach out to you within 24 hours with enrollment details.</p>
              </div>
            ) : (
              <>
                <h2 className="text-lg font-bold text-white mb-1">{isHomepage ? "Reserve Your Seat" : "Book Your FREE Career Counseling"}</h2>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 13, marginBottom: 24 }}>{isHomepage ? "Next cohort starts 01 August 2026 — spots fill fast." : "Talk to an Azure expert and choose the right learning path."}</p>

                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 gap-4 mb-4">
                    <div>
                      <label style={labelStyle} htmlFor="name">Full Name</label>
                      <input id="name" name="name" type="text" placeholder="Rahul Sharma" value={form.name} onChange={handleChange}
                        style={{ ...inputBase, borderColor: errors.name ? '#f87171' : 'rgba(255,255,255,0.25)' }}
                        onFocus={e => (e.target.style.borderColor = 'rgba(255,255,255,0.6)')}
                        onBlur={e => (e.target.style.borderColor = errors.name ? '#f87171' : 'rgba(255,255,255,0.25)')}
                      />
                      {errors.name && <span style={errorStyle}>{errors.name}</span>}
                    </div>

                    <div>
                      <label style={labelStyle} htmlFor="email">Email Address</label>
                      <input id="email" name="email" type="email" placeholder="rahul@example.com" value={form.email} onChange={handleChange}
                        style={{ ...inputBase, borderColor: errors.email ? '#f87171' : 'rgba(255,255,255,0.25)' }}
                        onFocus={e => (e.target.style.borderColor = 'rgba(255,255,255,0.6)')}
                        onBlur={e => (e.target.style.borderColor = errors.email ? '#f87171' : 'rgba(255,255,255,0.25)')}
                      />
                      {errors.email && <span style={errorStyle}>{errors.email}</span>}
                    </div>

                    <div>
                      <label style={labelStyle} htmlFor="mobile">Mobile Number</label>
                      <input id="mobile" name="mobile" type="tel" placeholder="9876543210" value={form.mobile} onChange={handleChange} maxLength={10}
                        style={{ ...inputBase, borderColor: errors.mobile ? '#f87171' : 'rgba(255,255,255,0.25)' }}
                        onFocus={e => (e.target.style.borderColor = 'rgba(255,255,255,0.6)')}
                        onBlur={e => (e.target.style.borderColor = errors.mobile ? '#f87171' : 'rgba(255,255,255,0.25)')}
                      />
                      {errors.mobile && <span style={errorStyle}>{errors.mobile}</span>}
                    </div>

                    <div>
                      <label style={labelStyle} htmlFor="level">Experience Level</label>
                      <select id="level" name="level" value={form.level} onChange={handleChange}
                        style={{ ...inputBase, borderColor: errors.level ? '#f87171' : 'rgba(255,255,255,0.25)', appearance: 'none', cursor: 'pointer', color: form.level ? '#fff' : 'rgba(255,255,255,0.45)' }}
                        onFocus={e => (e.target.style.borderColor = 'rgba(255,255,255,0.6)')}
                        onBlur={e => (e.target.style.borderColor = errors.level ? '#f87171' : 'rgba(255,255,255,0.25)')}
                      >
                        <option value="" disabled style={{ background: '#0078d4', color: '#fff' }}>Select your level</option>
                        <option value="fresher" style={{ background: '#0078d4', color: '#fff' }}>Fresher — New to Cloud</option>
                        <option value="experienced" style={{ background: '#0078d4', color: '#fff' }}>Experienced — Working Professional</option>
                      </select>
                      {errors.level && <span style={errorStyle}>{errors.level}</span>}
                    </div>
                  </div>

                  {/* Checkbox */}
                  <div className="mb-6">
                    <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer' }}>
                      <input type="checkbox" name="agree" checked={form.agree} onChange={handleChange}
                        style={{ width: 16, height: 16, marginTop: 2, accentColor: '#ffffff', cursor: 'pointer', flexShrink: 0 }}
                      />
                      <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '13px', lineHeight: 1.5 }}>
                        I agree to be contacted by the admissions team and accept the{' '}
                        <a href="https://grras.com/privacy-policy/" target="_blank" style={{ color: '#ffffff', textDecoration: 'underline', fontWeight: 600 }}>Terms & Privacy Policy</a>.
                      </span>
                    </label>
                    {errors.agree && <span style={{ ...errorStyle, marginTop: '6px', display: 'block' }}>{errors.agree}</span>}
                  </div>

                  {/* Submit */}
                <button
  type="submit"
  disabled={loading}
  className="group relative overflow-hidden w-full flex items-center justify-center gap-2 py-3.5 font-bold text-gray-900 rounded-md cursor-pointer bg-gradient-to-b from-white to-gray-300 shadow-lg text-sm md:text-base transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
>
  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/70 to-transparent group-hover:translate-x-full transition-transform duration-1000"></span>

  <span className="relative z-10 flex items-center gap-2">
    <SquareArrowOutUpRightIcon size={16} duration={1} color="#111" />
    {loading ? "Submitting..." : isHomepage ? "Claim My Seat — August 2026" : "Get Free Counseling"}
  </span>
</button>
                </form>
              </>
            )}
          </div>
    )
}