/* @ds-bundle: {"format":4,"namespace":"RadiantSkinDesignSystem_1607be","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconChip","sourcePath":"components/core/IconChip.jsx"},{"name":"ServiceCard","sourcePath":"components/data/ServiceCard.jsx"},{"name":"StatCard","sourcePath":"components/data/StatCard.jsx"},{"name":"TestimonialCard","sourcePath":"components/data/TestimonialCard.jsx"},{"name":"TimelineStep","sourcePath":"components/data/TimelineStep.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"d68ac20b8188","components/core/Button.jsx":"53509f0396df","components/core/IconChip.jsx":"2fdb94c49541","components/data/ServiceCard.jsx":"31fc76cbfa04","components/data/StatCard.jsx":"efac8d4fc355","components/data/TestimonialCard.jsx":"3153284c5273","components/data/TimelineStep.jsx":"29368d4d607e","components/forms/Input.jsx":"57afb50a352e","components/forms/Textarea.jsx":"698a99761a16","components/navigation/NavBar.jsx":"421cd07420af","ui_kits/website/AboutSection.jsx":"61dc3a2a49d5","ui_kits/website/ContactSection.jsx":"facbd6db1a5d","ui_kits/website/Footer.jsx":"f21530360e8d","ui_kits/website/Hero.jsx":"af206e109479","ui_kits/website/ProcessSection.jsx":"3124eb4bb845","ui_kits/website/ServicesSection.jsx":"42b7e6c64462","ui_kits/website/StatsSection.jsx":"02711e819ead","ui_kits/website/StickyBook.jsx":"318de3122c38","ui_kits/website/TestimonialsSection.jsx":"9b62adba8a89","ui_kits/website/TrustMarquee.jsx":"5d966219957b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.RadiantSkinDesignSystem_1607be = window.RadiantSkinDesignSystem_1607be || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function Badge({
  children,
  dark = false
}) {
  return React.createElement('span', {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 'var(--text-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: dark ? 'var(--gold-light)' : 'var(--text-accent)'
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const VARIANT_STYLE = {
  primary: {
    background: 'var(--gradient-gold)',
    color: 'var(--ink)',
    border: 'none',
    boxShadow: 'var(--shadow-gold-glow)'
  },
  secondary: {
    background: 'transparent',
    color: 'var(--ink)',
    border: '1.5px solid var(--ink)',
    boxShadow: 'none'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--gold-deep)',
    border: 'none',
    boxShadow: 'none'
  }
};
const SIZE_STYLE = {
  md: {
    padding: '14px 28px',
    fontSize: 15
  },
  sm: {
    padding: '10px 20px',
    fontSize: 14
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  disabled,
  href,
  onClick,
  children
}) {
  const style = {
    fontFamily: 'var(--font-body)',
    fontWeight: 700,
    borderRadius: 'var(--radius-pill)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: `transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)`,
    ...VARIANT_STYLE[variant],
    ...SIZE_STYLE[size]
  };
  const handlers = disabled ? {} : {
    onMouseDown: e => {
      e.currentTarget.style.transform = 'scale(0.97)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  };
  const Tag = href ? 'a' : 'button';
  return React.createElement(Tag, {
    href,
    onClick,
    disabled,
    style,
    ...handlers
  }, icon, React.createElement('span', null, children));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconChip.jsx
try { (() => {
function IconChip({
  icon,
  size = 56
}) {
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, []);
  return React.createElement('div', {
    style: {
      width: size,
      height: size,
      borderRadius: 'var(--radius-md)',
      background: 'var(--gradient-gold)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-inset-glass)',
      flexShrink: 0
    }
  }, React.createElement('i', {
    'data-lucide': icon,
    style: {
      width: size * 0.44,
      height: size * 0.44,
      color: 'var(--ink)'
    }
  }));
}
Object.assign(__ds_scope, { IconChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconChip.jsx", error: String((e && e.message) || e) }); }

// components/data/ServiceCard.jsx
try { (() => {
function ServiceCard({
  icon,
  title,
  description,
  href = '#'
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, []);
  const onMove = e => {
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    ref.current.style.transform = `perspective(800px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) translateY(-4px)`;
  };
  const onLeave = () => {
    ref.current.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateY(0)';
  };
  return React.createElement('div', {
    ref,
    onMouseMove: onMove,
    onMouseLeave: onLeave,
    style: {
      background: 'var(--white)',
      borderRadius: 'var(--radius-lg)',
      padding: '28px 26px',
      boxShadow: 'var(--shadow-card)',
      transition: `transform var(--dur-med) var(--ease-out), box-shadow var(--dur-med) var(--ease-out)`,
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('div', {
    style: {
      width: 56,
      height: 56,
      borderRadius: 'var(--radius-md)',
      background: 'var(--gradient-gold)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, React.createElement('i', {
    'data-lucide': icon,
    style: {
      width: 24,
      height: 24,
      color: 'var(--ink)'
    }
  })), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 20,
      color: 'var(--ink)'
    }
  }, title), React.createElement('p', {
    style: {
      fontSize: 14.5,
      color: 'var(--muted)',
      lineHeight: 1.6,
      margin: 0
    }
  }, description), React.createElement('a', {
    href,
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--gold-deep)',
      textDecoration: 'none'
    }
  }, 'Learn more →'));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/data/StatCard.jsx
try { (() => {
function StatCard({
  value,
  label,
  floating = false
}) {
  return React.createElement('div', {
    style: {
      background: floating ? 'var(--white)' : 'transparent',
      borderRadius: 'var(--radius-lg)',
      padding: floating ? '20px 26px' : '0',
      boxShadow: floating ? 'var(--shadow-card-hover)' : 'none',
      textAlign: 'center',
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 36,
      color: 'var(--ink)'
    }
  }, value), React.createElement('div', {
    style: {
      fontSize: 13,
      color: 'var(--muted)',
      marginTop: 4
    }
  }, label));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/data/TestimonialCard.jsx
try { (() => {
function TestimonialCard({
  quote,
  name,
  treatment
}) {
  return React.createElement('div', {
    style: {
      background: 'var(--white)',
      borderRadius: 'var(--radius-lg)',
      padding: '28px 26px',
      boxShadow: 'var(--shadow-card)',
      fontFamily: 'var(--font-body)',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 40,
      color: 'var(--gold)',
      lineHeight: 0.5,
      fontStyle: 'italic'
    }
  }, '\u201C'), React.createElement('p', {
    style: {
      fontSize: 15,
      color: 'var(--ink)',
      lineHeight: 1.6,
      margin: 0
    }
  }, quote), React.createElement('div', {
    style: {
      fontSize: 13,
      color: 'var(--muted)',
      fontWeight: 600
    }
  }, name + ' — ' + treatment));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/data/TimelineStep.jsx
try { (() => {
function TimelineStep({
  index,
  title,
  description,
  dark = true
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      flex: 1,
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('div', {
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: 'var(--gradient-gold)',
      color: 'var(--ink)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 800,
      fontSize: 15
    }
  }, String(index).padStart(2, '0')), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 19,
      color: dark ? 'var(--cream)' : 'var(--ink)'
    }
  }, title), React.createElement('div', {
    style: {
      fontSize: 14,
      lineHeight: 1.5,
      color: dark ? 'var(--text-on-dark-muted)' : 'var(--muted)'
    }
  }, description));
}
Object.assign(__ds_scope, { TimelineStep });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/TimelineStep.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  name,
  type = 'text'
}) {
  return React.createElement('label', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('span', {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--muted)'
    }
  }, label), React.createElement('input', {
    name,
    type,
    placeholder,
    style: {
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-sm)',
      padding: '13px 16px',
      fontSize: 15,
      fontFamily: 'var(--font-body)',
      background: 'var(--white)',
      color: 'var(--ink)',
      outline: 'none'
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = 'var(--gold)';
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = 'var(--border-hairline)';
    }
  }));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function Textarea({
  label,
  placeholder,
  name,
  rows = 4
}) {
  return React.createElement('label', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)'
    }
  }, React.createElement('span', {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--muted)'
    }
  }, label), React.createElement('textarea', {
    name,
    placeholder,
    rows,
    style: {
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-sm)',
      padding: '13px 16px',
      fontSize: 15,
      fontFamily: 'var(--font-body)',
      background: 'var(--white)',
      color: 'var(--ink)',
      outline: 'none',
      resize: 'vertical'
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = 'var(--gold)';
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = 'var(--border-hairline)';
    }
  }));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function NavBar({
  links = [],
  phone
}) {
  const [open, setOpen] = React.useState(false);
  return React.createElement('div', {
    style: {
      fontFamily: 'var(--font-body)',
      background: 'var(--cream)',
      borderBottom: '1px solid var(--border-hairline)',
      position: 'relative'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 28px',
      maxWidth: 1320,
      margin: '0 auto'
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 20,
      color: 'var(--ink)'
    }
  }, 'Radiant', React.createElement('span', {
    style: {
      fontStyle: 'italic',
      color: 'var(--gold-deep)'
    }
  }, ' Skin')), React.createElement('div', {
    className: 'radiant-nav-links',
    style: {
      display: 'flex',
      gap: 28,
      alignItems: 'center'
    }
  }, links.map(l => React.createElement('a', {
    key: l,
    href: '#' + l.toLowerCase(),
    style: {
      color: 'var(--ink)',
      fontSize: 14,
      fontWeight: 600,
      textDecoration: 'none'
    }
  }, l)), React.createElement('a', {
    href: 'tel:' + (phone || ''),
    style: {
      background: 'var(--gradient-gold)',
      color: 'var(--ink)',
      padding: '10px 20px',
      borderRadius: 'var(--radius-pill)',
      fontWeight: 700,
      fontSize: 14,
      textDecoration: 'none'
    }
  }, 'Call Now')), React.createElement('button', {
    onClick: () => setOpen(!open),
    style: {
      display: 'none',
      background: 'none',
      border: 'none',
      fontSize: 24,
      cursor: 'pointer',
      color: 'var(--ink)'
    },
    className: 'radiant-nav-toggle'
  }, open ? '\u2715' : '\u2630')), open && React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      padding: '0 28px 20px'
    }
  }, links.map(l => React.createElement('a', {
    key: l,
    href: '#' + l.toLowerCase(),
    style: {
      color: 'var(--ink)',
      fontSize: 15,
      fontWeight: 600,
      textDecoration: 'none'
    }
  }, l))));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AboutSection.jsx
try { (() => {
function AboutSection() {
  const {
    StatCard,
    Badge
  } = window.RadiantSkinDesignSystem_1607be;
  const points = ['Personalized treatment plans for every skin type', 'Certified, experienced clinicians', 'Hygiene-first, medical-grade protocols', 'Ongoing aftercare guidance'];
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    style: {
      padding: '96px 40px',
      background: 'var(--surface-section)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 340,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      width: 280,
      height: 280,
      borderRadius: '50%',
      border: '2px dashed var(--gold)',
      animation: 'ringSpin 40s linear infinite reverse'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 180,
      height: 180,
      borderRadius: '50%',
      background: 'var(--gradient-gold)',
      boxShadow: 'var(--shadow-orb)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 20
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    value: "500+",
    label: "Happy Clients",
    floating: true
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, null, "Why Radiant"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 38,
      color: 'var(--ink)',
      marginTop: 10,
      marginBottom: 20
    }
  }, "Care that's personal, not generic"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, points.map(p => /*#__PURE__*/React.createElement("div", {
    key: p,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check-circle",
    style: {
      width: 18,
      height: 18,
      color: 'var(--gold-deep)',
      marginTop: 2,
      flexShrink: 0
    }
  }), p))), /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    style: {
      display: 'inline-block',
      marginTop: 28,
      background: 'var(--gradient-gold)',
      color: 'var(--ink)',
      padding: '14px 28px',
      borderRadius: 999,
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 14,
      textDecoration: 'none'
    }
  }, "Book Consultation"))));
}
window.AboutSection = AboutSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AboutSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactSection.jsx
try { (() => {
function ContactSection() {
  const {
    Input,
    Textarea,
    Badge
  } = window.RadiantSkinDesignSystem_1607be;
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      padding: '96px 40px',
      background: 'var(--surface-dark-deep)',
      color: 'var(--cream)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    dark: true
  }, "Visit Us"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 34,
      marginTop: 10,
      marginBottom: 24
    }
  }, "Come see us in Pune"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-on-dark-muted)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "map-pin",
    style: {
      width: 18,
      height: 18,
      color: 'var(--gold-light)',
      flexShrink: 0
    }
  }), "Destination Center, Sinhgad Rd, Ghule Patil Nagar, Pandurang Industrial Area, Nanded, Pune, Maharashtra 411068"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "phone",
    style: {
      width: 18,
      height: 18,
      color: 'var(--gold-light)',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("a", {
    href: "tel:+919699654324",
    style: {
      color: 'var(--text-on-dark-muted)',
      textDecoration: 'none'
    }
  }, "+91 96996 54324")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "clock",
    style: {
      width: 18,
      height: 18,
      color: 'var(--gold-light)',
      flexShrink: 0
    }
  }), "[Mon \u2013 Sat: 10:00 AM \u2013 8:00 PM]")), /*#__PURE__*/React.createElement("a", {
    href: "https://www.google.com/maps/search/?api=1&query=Destination+Center+Sinhgad+Rd+Ghule+Patil+Nagar+Pandurang+Industrial+Area+Nanded+Pune+Maharashtra+411068",
    target: "_blank",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 24,
      background: 'var(--gradient-gold)',
      color: 'var(--ink)',
      padding: '13px 24px',
      borderRadius: 999,
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 14,
      textDecoration: 'none'
    }
  }, "Get Directions"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      marginTop: 28,
      height: 160,
      borderRadius: 16,
      background: 'rgba(255,255,255,0.06)',
      border: '1px solid var(--border-hairline-dark)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "map-pin",
    style: {
      width: 30,
      height: 30,
      color: 'var(--gold)',
      animation: 'bouncePin 2s ease-in-out infinite'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 10,
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--text-on-dark-muted)'
    }
  }, "Map placeholder \u2014 connect a live embed"))), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      background: 'var(--white)',
      borderRadius: 20,
      padding: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full name",
    placeholder: "Your name",
    name: "name"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Phone",
    placeholder: "+91 ",
    name: "phone",
    type: "tel"
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: "Message",
    placeholder: "Tell us what you're looking for",
    name: "message"
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    style: {
      background: 'var(--gradient-gold)',
      color: 'var(--ink)',
      border: 'none',
      padding: '14px',
      borderRadius: 999,
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 15,
      cursor: 'pointer'
    }
  }, sent ? 'Thanks — we\'ll be in touch' : 'Send Message'))));
}
window.ContactSection = ContactSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
function SiteFooter() {
  const treatments = ['HydraFacial', 'PRP Therapy', 'Acne Treatment', 'Pigmentation Correction', 'Anti-Aging Care', 'Hair Restoration'];
  const links = ['Services', 'About', 'Journey', 'Reviews', 'Contact'];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink-deep)',
      color: 'var(--text-on-dark-muted)',
      padding: '64px 40px 28px',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      fontWeight: 700,
      color: 'var(--cream)'
    }
  }, "Radiant ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: 'var(--gold-light)',
      fontStyle: 'italic'
    }
  }, "Skin")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.6,
      marginTop: 12,
      maxWidth: 280
    }
  }, "Skin, hair and aesthetic care clinic in Pune \u2014 personalized treatment plans and clinician-led aftercare."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 18
    }
  }, ['at-sign', 'link'].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.08)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": i,
    style: {
      width: 16,
      height: 16,
      color: 'var(--gold-light)'
    }
  }))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--cream)',
      fontWeight: 700,
      fontSize: 13,
      marginBottom: 14
    }
  }, "Quick Links"), links.map(l => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: '#' + l.toLowerCase(),
    style: {
      color: 'inherit',
      fontSize: 14,
      textDecoration: 'none',
      display: 'block',
      marginBottom: 10
    }
  }, l)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--cream)',
      fontWeight: 700,
      fontSize: 13,
      marginBottom: 14
    }
  }, "Treatments"), treatments.map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      fontSize: 14,
      marginBottom: 10
    }
  }, t))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--cream)',
      fontWeight: 700,
      fontSize: 13,
      marginBottom: 14
    }
  }, "Contact"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:+919699654324",
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, "+91 96996 54324")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: 1.5
    }
  }, "Destination Center, Sinhgad Rd, Nanded, Pune 411068"))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: '40px auto 0',
      borderTop: '1px solid var(--border-hairline-dark)',
      paddingTop: 20,
      fontSize: 12.5
    }
  }, "\xA9 2026 Radiant Skin & Cosmetology Clinic. All rights reserved."));
}
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
function Hero() {
  const services = [{
    icon: 'droplet',
    label: 'HydraFacial'
  }, {
    icon: 'sparkles',
    label: 'Glow Renewal'
  }, {
    icon: 'leaf',
    label: 'Aftercare'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "hero",
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--cream)',
      padding: '140px 40px 100px',
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr',
      gap: 40,
      alignItems: 'center',
      maxWidth: 1320,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "blob",
    style: {
      position: 'absolute',
      top: -120,
      left: -140,
      width: 420,
      height: 420,
      borderRadius: '50%',
      background: 'radial-gradient(circle,rgba(201,162,39,0.22),transparent 70%)',
      filter: 'blur(20px)',
      animation: 'blobDrift 22s ease-in-out infinite'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--gold-deep)',
      marginBottom: 18
    }
  }, "Skin \xB7 Hair \xB7 Aesthetic Care"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 60,
      lineHeight: 1.08,
      color: 'var(--ink)',
      margin: 0
    }
  }, "Reveal skin that ", /*#__PURE__*/React.createElement("em", {
    style: {
      color: 'var(--gold-deep)',
      fontStyle: 'italic'
    }
  }, "glows naturally")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 17,
      color: 'var(--muted)',
      lineHeight: 1.6,
      marginTop: 20,
      maxWidth: 460
    }
  }, "Personalized skin, hair and aesthetic treatments \u2014 from your first consultation to lasting aftercare, guided by clinicians who listen."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      marginTop: 32,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    style: {
      background: 'var(--gradient-gold)',
      color: 'var(--ink)',
      padding: '15px 30px',
      borderRadius: 999,
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 15,
      textDecoration: 'none',
      boxShadow: 'var(--shadow-gold-glow)'
    }
  }, "Book Consultation"), /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    style: {
      border: '1.5px solid var(--ink)',
      color: 'var(--ink)',
      padding: '15px 30px',
      borderRadius: 999,
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 15,
      textDecoration: 'none'
    }
  }, "Visit the Clinic")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      marginTop: 32,
      flexWrap: 'wrap'
    }
  }, ['Hygiene-first protocols', 'Personalized plans', 'Experienced clinicians'].map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      color: 'var(--ink)',
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check",
    style: {
      width: 16,
      height: 16,
      color: 'var(--gold-deep)'
    }
  }), t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 420,
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: 280,
      height: 280,
      marginTop: -140,
      marginLeft: -140,
      borderRadius: '50%',
      background: 'var(--gradient-orb)',
      boxShadow: 'var(--shadow-orb)',
      animation: 'spinOrb 34s linear infinite'
    }
  }), services.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.label,
    style: {
      position: 'absolute',
      top: [30, 170, 300][i],
      left: [10, 220, 60][i],
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: 'rgba(255,255,255,0.55)',
      backdropFilter: 'blur(14px)',
      borderRadius: 16,
      padding: '12px 18px',
      boxShadow: 'var(--shadow-inset-glass), var(--shadow-card)',
      animation: `float${i + 1} ${5 + i}s ease-in-out infinite`,
      animationDelay: `${i * 0.4}s`
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": s.icon,
    style: {
      width: 18,
      height: 18,
      color: 'var(--gold-deep)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--ink)'
    }
  }, s.label)))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProcessSection.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ProcessSection() {
  const {
    TimelineStep,
    Badge
  } = window.RadiantSkinDesignSystem_1607be;
  const steps = [{
    title: 'Consultation',
    description: 'We listen and assess your skin, hair and goals.'
  }, {
    title: 'Custom Plan',
    description: 'A treatment plan tailored to you.'
  }, {
    title: 'Treatment',
    description: 'Care delivered by experienced clinicians.'
  }, {
    title: 'Aftercare & Glow',
    description: 'Ongoing guidance so results last.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "journey",
    style: {
      padding: '96px 40px',
      background: 'var(--surface-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    dark: true
  }, "Your Glow Journey"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 38,
      color: 'var(--cream)',
      marginTop: 10
    }
  }, "Four steps to your best skin")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 32
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement(TimelineStep, _extends({
    key: s.title,
    index: i + 1
  }, s))))));
}
window.ProcessSection = ProcessSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProcessSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServicesSection.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ServicesSection() {
  const {
    ServiceCard,
    Badge
  } = window.RadiantSkinDesignSystem_1607be;
  const services = [{
    icon: 'droplet',
    title: 'HydraFacial',
    description: 'Deep hydration and gentle exfoliation for instantly refreshed skin.'
  }, {
    icon: 'syringe',
    title: 'PRP Therapy',
    description: 'Platelet-rich plasma treatments to support natural skin renewal.'
  }, {
    icon: 'sparkles',
    title: 'Acne Treatment',
    description: 'Targeted care to clear breakouts and calm inflammation.'
  }, {
    icon: 'sun',
    title: 'Pigmentation Correction',
    description: 'Evening out tone and fading dark spots over time.'
  }, {
    icon: 'clock',
    title: 'Anti-Aging Care',
    description: 'Firming and rejuvenating treatments for lasting results.'
  }, {
    icon: 'scissors',
    title: 'Hair Restoration',
    description: 'Restorative treatments to support fuller, healthier hair.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "services",
    style: {
      padding: '96px 40px',
      maxWidth: 1320,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(Badge, null, "What We Offer"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 38,
      color: 'var(--ink)',
      marginTop: 10
    }
  }, "Treatments built around you")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, services.map(s => /*#__PURE__*/React.createElement(ServiceCard, _extends({
    key: s.title
  }, s, {
    href: "#contact"
  })))));
}
window.ServicesSection = ServicesSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServicesSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/StatsSection.jsx
try { (() => {
function StatsSection() {
  const {
    StatCard
  } = window.RadiantSkinDesignSystem_1607be;
  const stats = [['500+', 'Happy Clients'], ['[X]+', 'Years of Excellence'], ['1200+', 'Treatments Done'], ['4.9★', 'Average Rating']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '56px 40px',
      maxWidth: 1320,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 24
    }
  }, stats.map(([v, l]) => /*#__PURE__*/React.createElement(StatCard, {
    key: l,
    value: v,
    label: l
  })));
}
window.StatsSection = StatsSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/StatsSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/StickyBook.jsx
try { (() => {
function StickyBook() {
  return /*#__PURE__*/React.createElement("a", {
    href: "tel:+919699654324",
    style: {
      position: 'fixed',
      bottom: 28,
      right: 28,
      zIndex: 50,
      background: 'var(--gradient-gold)',
      color: 'var(--ink)',
      padding: '15px 26px',
      borderRadius: 999,
      fontFamily: 'var(--font-body)',
      fontWeight: 800,
      fontSize: 14,
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      animation: 'pulseGlow 2.4s ease-in-out infinite'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "phone",
    style: {
      width: 16,
      height: 16
    }
  }), "Book Now");
}
window.StickyBook = StickyBook;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/StickyBook.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/TestimonialsSection.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TestimonialsSection() {
  const {
    TestimonialCard,
    Badge
  } = window.RadiantSkinDesignSystem_1607be;
  const quotes = [{
    quote: '[Placeholder testimonial quote to be replaced with a real client review.]',
    name: '[Client name]',
    treatment: 'HydraFacial'
  }, {
    quote: '[Placeholder testimonial quote to be replaced with a real client review.]',
    name: '[Client name]',
    treatment: 'PRP Therapy'
  }, {
    quote: '[Placeholder testimonial quote to be replaced with a real client review.]',
    name: '[Client name]',
    treatment: 'Pigmentation Correction'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "reviews",
    style: {
      padding: '96px 40px',
      background: 'var(--surface-section)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(Badge, null, "Reviews"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 38,
      color: 'var(--ink)',
      marginTop: 10
    }
  }, "What our clients say")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, quotes.map((q, i) => /*#__PURE__*/React.createElement(TestimonialCard, _extends({
    key: i
  }, q))))));
}
window.TestimonialsSection = TestimonialsSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/TestimonialsSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/TrustMarquee.jsx
try { (() => {
function TrustMarquee() {
  const items = ['Hygiene-first protocols', 'Personalized treatment plans', 'Certified clinicians', 'Glow Naturally'];
  const track = [...items, ...items];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink)',
      overflow: 'hidden',
      padding: '22px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 64,
      width: 'max-content',
      animation: 'marquee 26s linear infinite'
    }
  }, track.map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 18,
      color: 'var(--gold-light)',
      whiteSpace: 'nowrap'
    }
  }, t))));
}
window.TrustMarquee = TrustMarquee;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/TrustMarquee.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconChip = __ds_scope.IconChip;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.TimelineStep = __ds_scope.TimelineStep;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.NavBar = __ds_scope.NavBar;

})();
