"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { Code, Terminal, GitBranch, Cpu, Cloud, Database, Zap, Shield } from 'lucide-react'

interface DeveloperLogoProps {
  size?: number
}

export default function DeveloperLogo({ size = 300 }: DeveloperLogoProps) {
  const { theme } = useTheme()
  const isDayMode = theme === "light"

  const icons = [Shield, Terminal, GitBranch, Cpu, Cloud, Database, Zap] // Icons to orbit

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      {/* Background glow/pulse */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-30"
        animate={{
          background: isDayMode
            ? [
                "linear-gradient(45deg, #f59e0b, #ef4444)",
                "linear-gradient(45deg, #ef4444, #f97316)",
                "linear-gradient(45deg, #f97316, #eab308)",
                "linear-gradient(45deg, #eab308, #f59e0b)",
              ]
            : [
                "linear-gradient(45deg, #ec4899, #a855f7)",
                "linear-gradient(45deg, #a855f7, #3b82f6)",
                "linear-gradient(45deg, #3b82f6, #0ea5e9)",
                "linear-gradient(45deg, #0ea5e9, #ec4899)",
              ],
          scale: [1, 1.05, 1],
        }}
        transition={{
          background: { duration: isDayMode ? 2 : 3, repeat: Number.POSITIVE_INFINITY },
          scale: { duration: 2, repeat: Number.POSITIVE_INFINITY },
        }}
      />

      {/* Inner rotating circle/border */}
      <motion.div
        className="absolute inset-4 rounded-full"
        animate={{
          background: isDayMode
            ? [
                "linear-gradient(135deg, #f97316 0%, #eab308 100%)",
                "linear-gradient(135deg, #ef4444 0%, #f97316 100%)",
                "linear-gradient(135deg, #eab308 0%, #f59e0b 100%)",
                "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
              ]
            : [
                "linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)",
                "linear-gradient(135deg, #ec4899 0%, #a855f7 100%)",
                "linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%)",
                "linear-gradient(135deg, #ec4899 0%, #0ea5e9 100%)",
              ],
          rotate: [0, 360],
        }}
        transition={{
          background: { duration: isDayMode ? 3 : 4, repeat: Number.POSITIVE_INFINITY },
          rotate: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
        }}
      />

      {/* Central container for icons */}
      <motion.div
        className={`absolute inset-8 ${
          isDayMode ? "bg-white" : "bg-slate-900"
        } rounded-full flex items-center justify-center shadow-2xl transition-colors duration-500`}
        animate={{
          scale: [1, 1.05, 1],
          boxShadow: isDayMode
            ? [
                "0 0 20px rgba(249, 115, 22, 0.3)",
                "0 0 40px rgba(234, 179, 8, 0.4)",
                "0 0 20px rgba(249, 115, 22, 0.3)",
              ]
            : [
                "0 0 20px rgba(236, 72, 153, 0.3)",
                "0 0 40px rgba(168, 85, 247, 0.4)",
                "0 0 20px rgba(236, 72, 153, 0.3)",
              ],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
        }}
      >
        {/* Main Code Icon */}
        <motion.div
          className="absolute"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <Code
            className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 ${isDayMode ? "text-orange-600" : "text-pink-500"}`}
          />
        </motion.div>

        {/* Orbiting Icons */}
        {icons.map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: i * (10 / icons.length),
            }}
          >
            <motion.div
              className="absolute"
              style={{
                y: -size / 4,
              }}
              animate={{
                opacity: [0, 1, 1, 0],
                scale: [0.8, 1, 1, 0.8],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * (4 / icons.length),
                ease: "easeInOut",
              }}
            >
              <Icon className={`w-8 h-8 ${isDayMode ? "text-red-500" : "text-purple-400"}`} />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}