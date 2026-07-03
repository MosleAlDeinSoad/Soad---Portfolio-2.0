import { motion } from "framer-motion";
import { ecosystem } from "../data/content";

const SIZE = 560;
const CENTER = SIZE / 2;
const RADIUS = 210;

function nodePos(i, total) {
  // start at top, go clockwise
  const angle = -Math.PI / 2 + (i * 2 * Math.PI) / total;
  return {
    x: CENTER + RADIUS * Math.cos(angle),
    y: CENTER + RADIUS * Math.sin(angle),
  };
}

export default function EcosystemMap() {
  return (
    <svg
      viewBox="-60 -60 680 680"
      role="img"
      aria-label="Diagram of Soad at the center of the PRISM platform ecosystem, connected to PRISM Echo, Unnoti, HRMS, IRIS/Optimus, the Insurance Portal, and the Retailers App"
      style={{ width: "100%", height: "auto", maxWidth: 560 }}
    >
      <defs>
        <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--cyan)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--cyan)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* connections */}
      {ecosystem.map((node, i) => {
        const p = nodePos(i, ecosystem.length);
        const color = node.status === "live" ? "var(--cyan)" : "var(--amber)";
        return (
          <g key={node.id}>
            <motion.line
              x1={CENTER}
              y1={CENTER}
              x2={p.x}
              y2={p.y}
              stroke="var(--line-strong)"
              strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.15 * i, ease: "easeOut" }}
            />
            {/* traveling pulse */}
            <motion.circle
              r="3"
              fill={color}
              initial={{ opacity: 0 }}
              animate={{
                cx: [CENTER, p.x],
                cy: [CENTER, p.y],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 2.2,
                delay: 1.2 + i * 0.35,
                repeat: Infinity,
                repeatDelay: ecosystem.length * 0.35 + 1,
                ease: "easeInOut",
              }}
            />
          </g>
        );
      })}

      {/* core glow */}
      <circle cx={CENTER} cy={CENTER} r="90" fill="url(#coreGlow)" />

      {/* center node */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "backOut" }}
      >
        <circle cx={CENTER} cy={CENTER} r="46" fill="var(--panel)" stroke="var(--cyan)" strokeWidth="1.5" />
        <text
          x={CENTER}
          y={CENTER - 4}
          textAnchor="middle"
          fill="var(--text)"
          style={{ font: "600 13px var(--font-display)" }}
        >
          SOAD
        </text>
        <text
          x={CENTER}
          y={CENTER + 14}
          textAnchor="middle"
          fill="var(--text-faint)"
          style={{ font: "500 8px var(--font-mono)", letterSpacing: "0.06em" }}
        >
          ORCHESTRATOR
        </text>
      </motion.g>

      {/* outer nodes */}
      {ecosystem.map((node, i) => {
        const p = nodePos(i, ecosystem.length);
        const color = node.status === "live" ? "var(--cyan)" : "var(--amber)";
        const isLeft = p.x < CENTER - 10;
        const isRight = p.x > CENTER + 10;
        const textAnchor = isLeft ? "end" : isRight ? "start" : "middle";
        const dx = isLeft ? -16 : isRight ? 16 : 0;
        const dy = p.y < CENTER ? -14 : 26;

        return (
          <motion.g
            key={node.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 * i + 0.3, ease: "backOut" }}
          >
            <circle cx={p.x} cy={p.y} r="7" fill="var(--bg)" stroke={color} strokeWidth="2" />
            <circle cx={p.x} cy={p.y} r="2.4" fill={color} />
            <text
              x={p.x + dx}
              y={p.y + dy}
              textAnchor={textAnchor}
              fill="var(--text)"
              style={{ font: "600 12.5px var(--font-display)" }}
            >
              {node.label}
            </text>
            <text
              x={p.x + dx}
              y={p.y + dy + 14}
              textAnchor={textAnchor}
              fill="var(--text-faint)"
              style={{ font: "500 9px var(--font-mono)" }}
            >
              {node.note}
            </text>
          </motion.g>
        );
      })}
    </svg>
  );
}
