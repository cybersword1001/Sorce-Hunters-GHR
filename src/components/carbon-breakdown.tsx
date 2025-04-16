"use client"

import { useEffect, useRef } from "react"
import { getCarbonBreakdown } from "@/lib/carbon-calculations"
import Chart from "chart.js/auto"

interface CarbonBreakdownProps {
  timeRange: string
}

export function CarbonBreakdown({ timeRange }: CarbonBreakdownProps) {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<Chart | null>(null)

  useEffect(() => {
    if (!chartRef.current) return

    // Clean up previous chart instance
    if (chartInstance.current) {
      chartInstance.current.destroy()
    }

    const data = getCarbonBreakdown(timeRange)

    chartInstance.current = new Chart(chartRef.current, {
      type: "doughnut",
      data: {
        labels: ["Transportation", "Energy", "Food", "Shopping"],
        datasets: [
          {
            data: [data.transportation, data.energy, data.food, data.shopping],
            backgroundColor: [
              "rgba(59, 130, 246, 0.7)",
              "rgba(234, 179, 8, 0.7)",
              "rgba(34, 197, 94, 0.7)",
              "rgba(168, 85, 247, 0.7)",
            ],
            borderColor: [
              "rgba(59, 130, 246, 1)",
              "rgba(234, 179, 8, 1)",
              "rgba(34, 197, 94, 1)",
              "rgba(168, 85, 247, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "right",
            labels: {
              usePointStyle: true,
              boxWidth: 6,
            },
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                const label = context.label || ""
                const value = context.raw as number
                const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0) as number
                const percentage = Math.round((value / total) * 100)
                return `${label}: ${value} kg CO₂e (${percentage}%)`
              },
            },
          },
        },
      },
    })

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [timeRange])

  return (
    <div className="w-full h-full">
      <canvas ref={chartRef}></canvas>
    </div>
  )
}
