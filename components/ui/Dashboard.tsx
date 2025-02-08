"use client"

import { useEffect, useState } from "react"
import { Bar, Pie } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from "chart.js"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement)

// Mock data
const mockData = {
  totalUsers: 1500,
  quizCompletions: 750,
  quizResults: [300, 200, 150, 100],
  productSales: [5000, 4000, 3000, 2000],
}

export function Dashboard() {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    // Simulate a delay to mimic data fetching
    const timer = setTimeout(() => {
      setData(mockData)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (!data) return <div>Loading...</div>

  const quizResultsData = {
    labels: ["Standardized", "Full Cream", "Toned", "Chocolate Protein"],
    datasets: [
      {
        label: "Quiz Results",
        data: data.quizResults,
        backgroundColor: ["#60A5FA", "#34D399", "#FBBF24", "#F87171"],
      },
    ],
  }

  const productSalesData = {
    labels: ["Standardized", "Full Cream", "Toned", "Chocolate Protein"],
    datasets: [
      {
        label: "Product Sales",
        data: data.productSales,
        backgroundColor: ["#60A5FA", "#34D399", "#FBBF24", "#F87171"],
      },
    ],
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Total Users</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-bold">{data.totalUsers}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Quiz Completions</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-bold">{data.quizCompletions}</p>
        </CardContent>
      </Card>
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Quiz Results</CardTitle>
        </CardHeader>
        <CardContent>
          <Pie data={quizResultsData} />
        </CardContent>
      </Card>
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Product Sales</CardTitle>
        </CardHeader>
        <CardContent>
          <Bar
            data={productSalesData}
            options={{
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            }}
          />
        </CardContent>
      </Card>
    </div>
  )
}
