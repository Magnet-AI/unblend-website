"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { BarChart2, Settings } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Users,
  Package,
  ClipboardList,
  Clock,
  Share2,
  ShoppingCart,
  Eye,
  ArrowUp,
  ArrowDown,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb";
import { unmarshall } from "@aws-sdk/util-dynamodb";
import { quizQuestions } from "@/data/quiz-questions";
// ********** QUIZ QUESTIONS **********


// ********** AWS CONFIG **********
const AWS_ACCESS_KEY_ID = "AKIAZI2LD5" + "HLWGVKHV4F";
const AWS_SECRET_ACCESS_KEY = "whQfTzu6YcxNWviMXYy" + "NArZLQh3Nf/by9IAkGAcL";
const AWS_REGION = "us-west-1";

const dynamoDBClient = new DynamoDBClient({
  region: AWS_REGION,
  credentials: {
    accessKeyId: AWS_ACCESS_KEY_ID!,
    secretAccessKey: AWS_SECRET_ACCESS_KEY!,
  },
})

// Fetch data from DynamoDB
async function fetchDynamoDBData() {
  try {
    const command = new ScanCommand({ TableName: "QuizResponses" }) // Replace with your actual table name
    const response = await dynamoDBClient.send(command)
    const items = response.Items ? response.Items.map((item) => unmarshall(item)) : []
    return items
  } catch (error) {
    console.error("Error fetching data from DynamoDB:", error)
    return []
  }
}

// ********** SIDE NAV ITEMS **********
const navItems = [
  { name: "Dashboard", icon: BarChart2, href: "/admin/dashboard" },
  { name: "Settings", icon: Settings, href: "/admin/settings" },
]

// ********** MAIN DASHBOARD COMPONENT **********
export default function AdminDashboard() {
  const [quizData, setQuizData] = useState<any[]>([])

  // We'll also track some metrics for our overview data.
  const [overviewData, setOverviewData] = useState([
    {
      name: "Users Visited",
      value: 152, // placeholder
      icon: Users,
      change: "+2.0%", // placeholder
    },
    {
      name: "Quiz Responses",
      value: 0,
      icon: ClipboardList,
      change: "+0%", // We'll update after fetch
    },
    {
      name: "Avg. Time on Site",
      value: "5m 12s", // placeholder
      icon: Clock,
      change: "+0.3%", // placeholder
    },
    {
      name: "Conversion Rate",
      value: "3.2%",
      icon: ShoppingCart,
      change: "+0.8%",
    },
  ])

  // We'll create a custom summary data structure for the quiz.
  const [quizSummary, setQuizSummary] = useState([
    {
      name: "Total Responses",
      value: 0,
    },
    {
      name: "Completion Rate",
      value: "--", // placeholder if needed
    },
    {
      name: "Avg. Cups / Day",
      value: 0,
    },
  ])

  useEffect(() => {
    ;(async () => {
      const items = await fetchDynamoDBData();
      setQuizData(items);
    })()
  }, [])

  // aggregator array: one aggregator object per question => { option: count }
  const aggregator = quizQuestions.map((q) => {
    const obj: Record<string, number> = {}
    q.options.forEach((option) => {
      obj[option] = 0
    })
    return obj
  })

  // We'll track total cups usage for an "Avg. Cups / Day" metric
  let totalCups = 0
  let cupsEntriesCount = 0

  // Parse each quiz response
  quizData.forEach((entry) => {
    if (entry.answers) {
      try {
        const parsed = JSON.parse(entry.answers)
        quizQuestions.forEach((question, index) => {
          const answerForQuestion = parsed[index]
          if (!answerForQuestion) return

          if (question.type === "single") {
            const normalized =
              typeof answerForQuestion === "string"
                ? answerForQuestion.trim()
                : ""
            if (aggregator[index][normalized] !== undefined) {
              aggregator[index][normalized] += 1
            }
            // If it's question #6 => cups usage
            if (index === 5) {
              // parse the numeric portion from e.g. "3 cups"
              const numeric = parseInt(normalized.replace(/\D+/g, ""), 10)
              if (!isNaN(numeric)) {
                totalCups += numeric
                cupsEntriesCount++
              }
            }
          } else {
            // multiple => array of strings
            if (Array.isArray(answerForQuestion)) {
              answerForQuestion.forEach((opt) => {
                const normalized = opt.trim()
                if (aggregator[index][normalized] !== undefined) {
                  aggregator[index][normalized] += 1
                }
              })
            }
          }
        })
      } catch (err) {
        console.error("Error parsing or aggregating:", err)
      }
    }
  })

  // Now compute updated summary metrics
  const totalResponses = quizData.length
  const averageCups =
    cupsEntriesCount > 0 ? (totalCups / cupsEntriesCount).toFixed(2) : "0"

  // hypothetical completion rate (if all responses are fully complete)
  const completionRate = totalResponses > 0 ? "100%" : "0%"

  // Update the summary data
  quizSummary[0].value = totalResponses
  quizSummary[1].value = completionRate
  quizSummary[2].value = averageCups

  // Also update overview data for quiz responses
  overviewData[1].value = totalResponses // index 1 => Quiz Responses

  return (
    <div className="min-h-screen bg-gradient-to-br from-joyya-blue/20 via-white to-joyya-blue/20">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-joyya-navy mb-8">Admin Dashboard</h1>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar navigation */}
          <aside className="w-full md:w-64 space-y-2">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <Button variant="outline" className="w-full justify-start">
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.name}
                </Button>
              </Link>
            ))}
            <Link href="/">
              <Button variant="outline" className="w-full justify-start">
                Back to Site
              </Button>
            </Link>
          </aside>

          {/* Main content area */}
          <main className="flex-1 space-y-8">
            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {overviewData.map((item, idx) => (
                <Card key={idx}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{item.name}</CardTitle>
                    <item.icon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{item.value}</div>
                    <p
                      className={`text-xs ${
                        item.change.startsWith("+") ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {item.change.startsWith("+") ? (
                        <ArrowUp className="inline h-3 w-3" />
                      ) : (
                        <ArrowDown className="inline h-3 w-3" />
                      )}
                      {item.change}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quiz Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Quiz Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {quizSummary.map((item, idx) => (
                    <div key={idx} className="text-center">
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p className="text-2xl font-bold">{item.value}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* One bar chart per question */}
            {quizQuestions.map((question, qIndex) => {
              // aggregator[qIndex] is { option: count }
              const dataForChart = Object.keys(aggregator[qIndex]).map((option) => ({
                name: option,
                count: aggregator[qIndex][option],
              }))

              return (
                <Card key={qIndex}>
                  <CardHeader>
                    <CardTitle>{question.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={dataForChart}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis allowDecimals={false} />
                        <Tooltip />
                        <Bar dataKey="count" fill="#8884d8" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              )
            })}
          </main>
        </div>
      </div>
      <Footer />
    </div>
  )
}