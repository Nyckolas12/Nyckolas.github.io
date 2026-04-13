import { motion } from 'framer-motion';

/**
 * Single full-screen SVG with four vine arms (top-left, top-right, bottom-left, bottom-right).
 * SVG-native transforms mirror them correctly — no CSS positioning tricks.
 *
 * isHome → thicker stems, full opacity, vines extend further across screen.
 * Other pages → lighter weight, ~40% opacity.
 */

const W = 1440;
const H = 900;

// ── Leaf ─────────────────────────────────────────────────────────────────────
function Leaf({ x, y, rot, w = 11, h = 24, fill, delay }) {
  const d = [
    `M 0 0`,
    `C  ${w * 0.55} -${h * 0.22}  ${w} -${h * 0.5}   ${w * 0.72} -${h * 0.8}`,
    `C  ${w * 0.36} -${h}         -${w * 0.36} -${h}  -${w * 0.72} -${h * 0.8}`,
    `C -${w} -${h * 0.5}          -${w * 0.55} -${h * 0.22}  0 0 Z`,
  ].join(' ');

  return (
    <motion.path
      d={d}
      fill={fill}
      transform={`translate(${x},${y}) rotate(${rot})`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4, ease: 'backOut' }}
    />
  );
}

// ── Animated stroke path ──────────────────────────────────────────────────────
function Stem({ d, stroke, strokeWidth, delay, duration }) {
  return (
    <motion.path
      d={d}
      stroke={stroke}
      strokeWidth={strokeWidth}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ delay, duration, ease: 'easeInOut' }}
    />
  );
}

// ── All vine geometry for the TOP-LEFT quadrant ───────────────────────────────
// viewBox is 1440×900. These paths start from the left edge and grow right.

function VineArm({ stemColor, leafColor, sw, db }) {
  // sw = strokeWidth base, db = delay base
  return (
    <g>
      {/* ── Main thick stem ── */}
      <Stem
        d="M -90 148 C 30 118 110 158 230 130 C 345 102 430 145 555 118 C 655 96 730 135 820 108 C 895 85 955 120 1020 98"
        stroke={stemColor} strokeWidth={sw} delay={db} duration={2.6}
      />

      {/* ── Secondary thinner stem (lower, lags slightly) ── */}
      <Stem
        d="M -90 195 C 50 172 125 205 240 182 C 355 158 420 192 530 170 C 620 151 685 178 760 160"
        stroke={stemColor} strokeWidth={sw * 0.6} delay={db + 0.3} duration={2.3}
      />

      {/* ── Tertiary wispy stem (even lower) ── */}
      <Stem
        d="M -90 240 C 60 222 130 248 248 230 C 360 212 425 238 530 222 C 610 208 665 228 720 215"
        stroke={stemColor} strokeWidth={sw * 0.38} delay={db + 0.55} duration={2.0}
      />

      {/* ── Branches / tendrils off main stem ── */}
      <Stem d="M 180 136 C 188 116 192 96 185 82"          stroke={stemColor} strokeWidth={sw * 0.45} delay={db + 1.1} duration={0.7} />
      <Stem d="M 430 130 C 440 108 446 88 438 74"           stroke={stemColor} strokeWidth={sw * 0.42} delay={db + 1.4} duration={0.7} />
      <Stem d="M 680 118 C 692 96 698 76 688 62"            stroke={stemColor} strokeWidth={sw * 0.4}  delay={db + 1.7} duration={0.7} />
      <Stem d="M 900 102 C 912 82 916 64 906 52"            stroke={stemColor} strokeWidth={sw * 0.36} delay={db + 2.0} duration={0.65} />

      {/* Tendril curls off secondary stem */}
      <Stem d="M 310 177 C 318 158 322 140 314 128"         stroke={stemColor} strokeWidth={sw * 0.35} delay={db + 1.3} duration={0.6} />
      <Stem d="M 570 166 C 578 148 582 130 574 118"         stroke={stemColor} strokeWidth={sw * 0.33} delay={db + 1.6} duration={0.6} />

      {/* Cross-linking tendril between stems */}
      <Stem d="M 350 145 C 355 162 348 175 340 182"         stroke={stemColor} strokeWidth={sw * 0.3}  delay={db + 1.9} duration={0.5} />
      <Stem d="M 600 132 C 606 150 600 164 592 170"         stroke={stemColor} strokeWidth={sw * 0.28} delay={db + 2.1} duration={0.5} />

      {/* ── Leaves on main stem ── */}
      <Leaf x={100}  y={142} rot={-42} w={12} h={26} fill={leafColor} delay={db + 1.3} />
      <Leaf x={210}  y={128} rot={ 35} w={14} h={29} fill={leafColor} delay={db + 1.5} />
      <Leaf x={320}  y={115} rot={-28} w={13} h={27} fill={leafColor} delay={db + 1.7} />
      <Leaf x={450}  y={130} rot={ 48} w={12} h={25} fill={leafColor} delay={db + 1.9} />
      <Leaf x={570}  y={112} rot={-35} w={13} h={27} fill={leafColor} delay={db + 2.1} />
      <Leaf x={680}  y={120} rot={ 30} w={11} h={23} fill={leafColor} delay={db + 2.3} />
      <Leaf x={790}  y={106} rot={-22} w={12} h={24} fill={leafColor} delay={db + 2.4} />
      <Leaf x={890}  y={114} rot={ 40} w={10} h={21} fill={leafColor} delay={db + 2.5} />
      <Leaf x={975}  y={ 98} rot={-30} w={ 9} h={19} fill={leafColor} delay={db + 2.7} />

      {/* Leaves on secondary stem */}
      <Leaf x={140}  y={185} rot={ 38} w={10} h={21} fill={leafColor} delay={db + 1.6} />
      <Leaf x={280}  y={175} rot={-30} w={11} h={22} fill={leafColor} delay={db + 1.8} />
      <Leaf x={430}  y={183} rot={ 25} w={10} h={20} fill={leafColor} delay={db + 2.0} />
      <Leaf x={570}  y={168} rot={-28} w={ 9} h={19} fill={leafColor} delay={db + 2.2} />
      <Leaf x={700}  y={158} rot={ 35} w={ 9} h={18} fill={leafColor} delay={db + 2.4} />

      {/* Leaves on tertiary stem */}
      <Leaf x={180}  y={232} rot={-22} w={ 8} h={17} fill={leafColor} delay={db + 1.9} />
      <Leaf x={320}  y={225} rot={ 32} w={ 8} h={16} fill={leafColor} delay={db + 2.1} />
      <Leaf x={460}  y={228} rot={-18} w={ 7} h={15} fill={leafColor} delay={db + 2.3} />
      <Leaf x={600}  y={218} rot={ 28} w={ 7} h={14} fill={leafColor} delay={db + 2.5} />

      {/* Leaves off branch tendrils */}
      <Leaf x={186}  y={ 82} rot={-10} w={ 7} h={15} fill={leafColor} delay={db + 2.6} />
      <Leaf x={440}  y={ 74} rot={ 12} w={ 7} h={14} fill={leafColor} delay={db + 2.8} />
      <Leaf x={690}  y={ 62} rot={ -8} w={ 6} h={13} fill={leafColor} delay={db + 3.0} />
      <Leaf x={908}  y={ 52} rot={ 15} w={ 6} h={12} fill={leafColor} delay={db + 3.1} />
    </g>
  );
}

// ── Full overlay ──────────────────────────────────────────────────────────────
export default function VineOverlay({ god, isHome }) {
  const stemColor = god.primary;
  const leafColor = god.secondary;
  const sw = isHome ? 5 : 3.2;
  const opacity = isHome ? 1 : 0.4;

  // Re-key on god to retrigger all draw animations on page change
  const k = god.name;

  return (
    <motion.svg
      key={k}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 5,
        overflow: 'visible',
      }}
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      animate={{ opacity }}
      transition={{ duration: 0.6 }}
    >
      {/* Top-left (origin) */}
      <VineArm stemColor={stemColor} leafColor={leafColor} sw={sw} db={0} />

      {/* Top-right: mirror horizontally around center X */}
      <g transform={`translate(${W}, 0) scale(-1, 1)`}>
        <VineArm stemColor={stemColor} leafColor={leafColor} sw={sw} db={0.2} />
      </g>

      {/* Bottom-left: mirror vertically around center Y */}
      <g transform={`translate(0, ${H}) scale(1, -1)`}>
        <VineArm stemColor={stemColor} leafColor={leafColor} sw={sw} db={0.35} />
      </g>

      {/* Bottom-right: mirror both axes */}
      <g transform={`translate(${W}, ${H}) scale(-1, -1)`}>
        <VineArm stemColor={stemColor} leafColor={leafColor} sw={sw} db={0.5} />
      </g>
    </motion.svg>
  );
}
