import type { CSSProperties } from "react";

type FeatureQuoteProps = {
  children: string;
  style?: CSSProperties;
};

export default function FeatureQuote({ children, style }: FeatureQuoteProps) {
  return (
    <div className="feature-quote" style={style}>
      {children}
    </div>
  );
}
