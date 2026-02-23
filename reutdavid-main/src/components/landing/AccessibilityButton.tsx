import { useState, useEffect, useCallback } from "react";
import { Accessibility, Plus, Minus, Eye, Link2, PauseCircle, Focus } from "lucide-react";

type A11yState = {
  fontSize: number;
  highContrast: boolean;
  highlightLinks: boolean;
  stopAnimations: boolean;
  focusOutline: boolean;
};

const defaultState: A11yState = {
  fontSize: 0,
  highContrast: false,
  highlightLinks: false,
  stopAnimations: false,
  focusOutline: false,
};

const AccessibilityButton = () => {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<A11yState>(defaultState);

  const apply = useCallback((s: A11yState) => {
    const root = document.documentElement;

    // Font size
    root.style.fontSize = s.fontSize === 0 ? "" : `${100 + s.fontSize * 12.5}%`;

    // High contrast
    root.classList.toggle("a11y-high-contrast", s.highContrast);

    // Highlight links
    root.classList.toggle("a11y-highlight-links", s.highlightLinks);

    // Stop animations
    root.classList.toggle("a11y-stop-animations", s.stopAnimations);

    // Focus outline
    root.classList.toggle("a11y-focus-outline", s.focusOutline);
  }, []);

  useEffect(() => {
    apply(state);
  }, [state, apply]);

  const update = (patch: Partial<A11yState>) => setState((prev) => ({ ...prev, ...patch }));

  const reset = () => {
    setState(defaultState);
  };

  const controls = [
    {
      label: "הגדל טקסט",
      icon: Plus,
      action: () => update({ fontSize: Math.min(state.fontSize + 1, 4) }),
      active: state.fontSize > 0,
    },
    {
      label: "הקטן טקסט",
      icon: Minus,
      action: () => update({ fontSize: Math.max(state.fontSize - 1, -2) }),
      active: state.fontSize < 0,
    },
    {
      label: "ניגודיות גבוהה",
      icon: Eye,
      action: () => update({ highContrast: !state.highContrast }),
      active: state.highContrast,
    },
    {
      label: "הדגשת קישורים",
      icon: Link2,
      action: () => update({ highlightLinks: !state.highlightLinks }),
      active: state.highlightLinks,
    },
    {
      label: "עצירת אנימציות",
      icon: PauseCircle,
      action: () => update({ stopAnimations: !state.stopAnimations }),
      active: state.stopAnimations,
    },
    {
      label: "מיקוד מקלדת",
      icon: Focus,
      action: () => update({ focusOutline: !state.focusOutline }),
      active: state.focusOutline,
    },
  ];

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <button
        onClick={() => setOpen(!open)}
        className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-warm-brown-light transition-colors"
        aria-label="תפריט נגישות"
        aria-expanded={open}
      >
        <Accessibility className="w-5 h-5" />
      </button>
      {open && (
        <div
          className="absolute bottom-14 left-0 bg-card border border-border rounded-xl p-4 shadow-xl min-w-[220px]"
          role="menu"
          aria-label="אפשרויות נגישות"
        >
          <p className="font-display font-semibold text-foreground mb-3 text-sm">נגישות</p>
          <div className="space-y-1">
            {controls.map((c) => (
              <button
                key={c.label}
                role="menuitem"
                onClick={c.action}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-body transition-colors text-right ${
                  c.active
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                <c.icon className="w-4 h-4 shrink-0" strokeWidth={1.5} />
                <span>{c.label}</span>
              </button>
            ))}
          </div>
          <button
            onClick={reset}
            className="w-full mt-3 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            איפוס הגדרות
          </button>
        </div>
      )}
    </div>
  );
};

export default AccessibilityButton;
