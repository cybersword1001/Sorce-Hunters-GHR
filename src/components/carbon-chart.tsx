"use client"

import { useEffect, useRef } from "react"
import { getCarbonData } from "@/lib/carbon-calculations"
import Chart from "chart.js/auto"

interface CarbonChartProps {
  timeRange: string
}

export function CarbonChart({ timeRange }: CarbonChartProps) {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<Chart | null>(null)

  useEffect(() => {
    if (!chartRef.current) return

    // Clean up previous chart instance
    if (chartInstance.current) {
      chartInstance.current.destroy()
    }

    const data = getCarbonData(timeRange)

    chartInstance.current = new Chart(chartRef.current, {
      type: "line",
      data: {
        labels: data.labels,
        datasets: [
          {
            label: "Transportation",
            data: data.transportation,
            borderColor: "#3b82f6",
            backgroundColor: "rgba(59, 130, 246, 0.1)",
            tension: 0.3,
            fill: true,
          },
          {
            label: "Energy",
            data: data.energy,
            borderColor: "#eab308",
            backgroundColor: "rgba(234, 179, 8, 0.1)",
            tension: 0.3,
            fill: true,
          },
          {
            label: "Food",
            data: data.food,
            borderColor: "#22c55e",
            backgroundColor: "rgba(34, 197, 94, 0.1)",
            tension: 0.3,
            fill: true,
          },
          {
            label: "Shopping",
            data: data.shopping,
            borderColor: "#a855f7",
            backgroundColor: "rgba(168, 85, 247, 0.1)",
            tension: 0.3,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "kg CO₂e",
            },
          },
        },
        plugins: {
          tooltip: {
            mode: "index",
            intersect: false,
          },
          legend: {
            position: "top",
            labels: {
              usePointStyle: true,
              boxWidth: 6,
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
