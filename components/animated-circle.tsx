"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"

interface AnimatedCircleProps {
  size?: number
  strokeWidth?: number
}

export default function AnimatedCircle({ size = 300, strokeWidth = 4 }: AnimatedCircleProps) {
  const { theme } = useTheme()
  const isDayMode = theme === "light"

  const colors = isDayMode
    ? {
        segment1: "#f59e0b", // orange-500
        segment2: "#ef4444", // red-500
        segment3: "#22c55e", // green-500
        segment4: "#06b6d4", // cyan-500
        innerShape: "#ef4444", // red-500
        innerDot: "#f97316", // orange-500
      }
    : {
        segment1: "#ec4899", // pink-500
        segment2: "#a855f7", // purple-500
        segment3: "#3b82f6", // blue-500
        segment4: "#0ea5e9", // sky-500
        innerShape: "#ef4444", // red-500
        innerDot: "#f97316", // orange-500
      }

  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const segmentLength = circumference / 4 // For 4 equal segments

  const circleVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        ease: "linear",
        repeat: Number.POSITIVE_INFINITY,
      },
    },
  }

  const segmentVariants = {
    hidden: { strokeDasharray: `${segmentLength} ${circumference}`, strokeDashoffset: segmentLength },
    visible: (i: number) => ({
      strokeDashoffset: 0,
      transition: {
        duration: 1.5,
        delay: i * 0.3,
        ease: "easeInOut",
      },
    }),
    loop: (i: number) => ({
      strokeDashoffset: [0, -segmentLength, 0], // Animate segments
      transition: {
        duration: 4,
        delay: i * 0.5,
        ease: "easeInOut",
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: 1,
      },
    }),
  }

  const innerShapeVariants = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Number.POSITIVE_INFINITY,
      },
    },
  }

  const dotPathVariants = {
    animate: {
      pathLength: [0, 1, 0],
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: 1,
      },
    },
  }

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <motion.svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute"
        variants={circleVariants}
        animate="animate"
      >
        {/* Outer Circle Segments */}
        {[colors.segment1, colors.segment2, colors.segment3, colors.segment4].map((color, i) => (
          <motion.circle
            key={i}
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            transform={`rotate(${i * 90}, ${size / 2}, ${size / 2})`}
            variants={segmentVariants}
            initial="hidden"
            animate="visible"
            whileInView="loop"
            viewport={{ once: false, amount: 0.8 }}
            custom={i}
          />
        ))}

        {/* Inner Abstract Shape (a simple diamond-like shape) */}
        <motion.path
          d={`M${size / 2},${size * 0.25} L${size * 0.75},${size / 2} L${size / 2},${size * 0.75} L${size * 0.25},${
            size / 2
          } Z`}
          fill={colors.innerShape}
          opacity={0.6}
          variants={innerShapeVariants}
          animate="animate"
        />

        {/* Inner Dotted Line Animation */}
        <motion.path
          d={`M${size * 0.25},${size * 0.4} C${size * 0.35},${size * 0.3}, ${size * 0.65},${size * 0.7}, ${
            size * 0.75
          },${size * 0.6}`}
          stroke={colors.innerDot}
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="0 10" // Make it dotted
          variants={dotPathVariants}
          animate="animate"
        />
      </motion.svg>


    </div>
  )
}