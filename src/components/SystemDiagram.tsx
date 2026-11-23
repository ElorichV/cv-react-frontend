export function SystemDiagram({ kind }: { kind: string }) {
  const labels =
    kind === "transactions"
      ? ["ORDER", "STOCK", "COMMIT"]
      : kind === "tests"
      ? ["BROWSER", "TEST RUNNER", "REPORT"]
      : kind === "api"
      ? ["CLOUDFRONT", "API GATEWAY", ".NET CORE"]
      : ["REACT 19", "TYPESCRIPT", "CLIENT"];

  return (
    <svg
      viewBox="0 0 640 360"
      className={`system-diagram diagram-${kind}`}
      role="img"
      aria-label={`${labels.join(" to ")} architecture illustration`}
    >
      <defs>
        <pattern id={`grid-${kind}`} width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" className="diagram-dot" />
        </pattern>
      </defs>
      <rect width="640" height="360" fill={`url(#grid-${kind})`} />
      <g className="diagram-guides">
        <path d="M0 180h640M320 0v360" />
        <circle cx="320" cy="180" r="118" />
        <circle cx="320" cy="180" r="140" strokeDasharray="3 9" />
      </g>
      {kind === "spa" ? (
        <g className="diagram-window">
          <rect x="168" y="84" width="304" height="194" rx="5" />
          <path d="M168 109h304M190 130h260M190 154h90v100h-90zM297 154h150M297 178h123M297 202h150M297 226h105" />
          <circle cx="181" cy="97" r="2" />
          <circle cx="190" cy="97" r="2" />
          <circle cx="199" cy="97" r="2" />
          <text x="235" y="214" textAnchor="middle">
            A / L
          </text>
        </g>
      ) : (
        <>
          <g className="diagram-connection">
            <path d="M130 180h380" />
            <path d="m231 175 6 5-6 5m163-10 6 5-6 5" />
          </g>
          {[130, 320, 510].map((x, index) => (
            <g
              key={x}
              className={index === 1 ? "diagram-node central-node" : "diagram-node"}
            >
              <rect x={x - 62} y="143" width="124" height="74" rx="3" />
              <path d={`M${x - 12} 158h24M${x - 12} 164h24`} />
              <text x={x} y="193" textAnchor="middle">
                {labels[index]}
              </text>
            </g>
          ))}
          <g className="diagram-guides">
            <path d="M130 217v32h380v-32" />
            <text x="320" y="269" textAnchor="middle">
              {kind === "tests"
                ? "REPEATABLE EXECUTION"
                : kind === "api"
                ? "CONTROLLED ACCESS"
                : "ATOMIC CONSISTENCY"}
            </text>
          </g>
        </>
      )}
      <text x="24" y="32" className="diagram-caption">
        {kind === "spa" ? "INTERFACE COMPOSITION" : "ARCHITECTURE SCHEMATIC"}
      </text>
      <path d="M24 46h30M616 314h-30" className="diagram-accent" />
      <text x="616" y="337" textAnchor="end" className="diagram-caption">
        AL / ENGINEERED SYSTEMS
      </text>
    </svg>
  );
}

export default SystemDiagram;
