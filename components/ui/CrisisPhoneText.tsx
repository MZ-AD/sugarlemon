import { Fragment, type ReactNode } from "react";

const linkClass =
  "font-semibold text-[#5B7053] underline decoration-[#5B7053]/35 underline-offset-2 transition-colors hover:text-brand-gold hover:decoration-brand-gold";

function CallLink({ number }: { number: string }) {
  return (
    <a href={`tel:${number}`} className={linkClass}>
      Call
    </a>
  );
}

function TextLink({ number }: { number: string }) {
  return (
    <a href={`sms:${number}`} className={linkClass}>
      text
    </a>
  );
}

function SmsKeywordLink({
  number,
  keyword,
  label,
}: {
  number: string;
  keyword: string;
  label: string;
}) {
  const href = `sms:${number}?body=${encodeURIComponent(keyword)}`;
  return (
    <a href={href} className={linkClass}>
      {label}
    </a>
  );
}

/** Crisis Text Line English WhatsApp — (443) SUP-PORT */
const CRISIS_TEXT_LINE_WHATSAPP = "https://wa.me/14437877678";

function WhatsAppLink({ prefilledMessage }: { prefilledMessage?: string }) {
  const href = prefilledMessage
    ? `${CRISIS_TEXT_LINE_WHATSAPP}?text=${encodeURIComponent(prefilledMessage)}`
    : CRISIS_TEXT_LINE_WHATSAPP;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={linkClass}
    >
      WhatsApp
    </a>
  );
}

const PATTERNS: {
  re: RegExp;
  render: (match: RegExpExecArray) => ReactNode;
}[] = [
  {
    re: /Call or text 988/gi,
    render: () => (
      <>
        <CallLink number="988" /> or <TextLink number="988" /> 988
      </>
    ),
  },
  {
    re: /Text "([^"]+)" to 741741, or message them on WhatsApp\./,
    render: (m) => (
      <>
        <SmsKeywordLink number="741741" keyword={m[1]} label="Text" /> &quot;
        {m[1]}&quot; to 741741, or message them on{" "}
        <WhatsAppLink prefilledMessage={m[1]} />.
      </>
    ),
  },
  {
    re: /text "([^"]+)" to 741741/g,
    render: (m) => (
      <>
        <SmsKeywordLink number="741741" keyword={m[1]} label="text" /> &quot;
        {m[1]}&quot; to 741741
      </>
    ),
  },
];

function findNextMatch(text: string, from: number) {
  let best: { index: number; len: number; node: ReactNode } | null = null;

  for (const pattern of PATTERNS) {
    const slice = text.slice(from);
    const m = pattern.re.exec(slice);
    if (!m) continue;
    const index = from + m.index;
    if (!best || index < best.index) {
      best = { index, len: m[0].length, node: pattern.render(m) };
    }
  }

  return best;
}

/** Renders crisis copy with separate Call (tel) and text (sms) actions — numbers stay plain text. */
export function CrisisPhoneText({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  let cursor = 0;

  while (cursor < text.length) {
    const next = findNextMatch(text, cursor);
    if (!next) {
      nodes.push(text.slice(cursor));
      break;
    }
    if (next.index > cursor) {
      nodes.push(text.slice(cursor, next.index));
    }
    nodes.push(next.node);
    cursor = next.index + next.len;
  }

  return (
    <>
      {nodes.map((node, i) => (
        <Fragment key={i}>{node}</Fragment>
      ))}
    </>
  );
}
