"use client"

import { useEffect, useRef } from "react"
import { getCarbonComparison } from "@/lib/carbon-calculations"
import Chart from "chart.js/auto"

interface CarbonComparisonProps {
  timeRange: string
}

export function CarbonComparison({ timeRange }: CarbonComparisonProps) {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<Chart | null>(null)

  useEffect(() => {
    if (!chartRef.current) return

    // Clean up previous chart instance
    if (chartInstance.current) {
      chartInstance.current.destroy()
    }

    const data = getCarbonComparison(timeRange)

    chartInstance.current = new Chart(chartRef.current, {
      type: "bar",
      data: {
        labels: ["Your Footprint", "Country Average", "Global Average", "Sustainable Target"],
        datasets: [
          {
            label: "Carbon Footprint (kg CO₂e)",
            data: [data.userFootprint, data.countryAverage, data.globalAverage, data.sustainableTarget],
            backgroundColor: [
              "rgba(34, 197, 94, 0.7)",
              "rgba(59, 130, 246, 0.7)",
              "rgba(234, 179, 8, 0.7)",
              "rgba(168, 85, 247, 0.7)",
            ],
            borderColor: [
              "rgba(34, 197, 94, 1)",
              "rgba(59, 130, 246, 1)",
              "rgba(234, 179, 8, 1)",
              "rgba(168, 85, 247, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "kg CO₂e",
            },
          },
        },
        plugins: {
          legend: {
            display: false,
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
