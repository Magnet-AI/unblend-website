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
const NEXT_PUBLIC_GA_PROPERTY_ID = "477964090" 
const NEXT_PUBLIC_GA_CLIENT_EMAIL= "starting-account-edvw8gdbgxzy@unblend-admin-1739434329356.iam.gserviceaccount.com"
const NEXT_PUBLIC_GA_PRIVATE_KEY= "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDLOiX/HPC3C5P5\nlDmn0fBMwCdha04gv6dZfv8iaEovNOVGJ0lOcv+PDzicL2DDxcBC/RboGIEm49YH\nTXuhDcn3yvKItlBQ4Gh+yOyIkmIszI0QtyE6LoGijsujCEjotTEm78tELO8vOPPD\nC8mDf6yLrbZvxNDL2MTVGNFs5nTb5otgIQDMlTDPvCz7yn7RVOP3WGM4qs/OJqrx\nejiAgywR5IGkfabOpaD/00ekUXOYNzTWFosjXn4H0T7aEGMBCdY6lHrV6KGyMhk+\nl/4YdOGfJd+R3ruw84apJpqu9PEdNmbpMloc5nMfr/28xecHy+4CBYEh61oExM2Z\nOgm2rUzLAgMBAAECggEACSwwttkJjFl7blJgX9C79drebCk5t4Su+v0eauEmKAdN\nKeNwDZhnLH/VYEdLKMruKJffxs4EVksGSAIZSGWk7gg89iq0aVIXpVFQS8G/qKH6\n4/xABa4/r6SeUFd5Yvd6pnVASW11xj3d0rnfeI30rcFDcLwDaI/6IlwiZ7XnJF2o\n46QfzgX9cYBzbbwlgNGUcyCWwe8QgvJ7w5cNWahG5w++ayxL3hyc2gvpIMZ1HLyn\nZEOkYFnkUESYFK0yoXRL110dPDonu6PM+Dv2hkkFXtDeb8Lq5F6YCC6iZWwey7jy\n8qHkLkt3Tr2cPeYFL0rSurFH/qUQIhAeAnoMkLFIEQKBgQDvTSA0RWOCGzLBgCuQ\nT2qJaosHk1E0wOFQXS2Wl2e4WgwJYOUltdTOIftAn/cIzSC9l2PeYEa2BL1NRZJ6\n/2SbVyK0Qs9k+MnbPRQ0MY41N52Fm42V6xZGvNbnzNJ3qa+bcg6IFqvcpo9oMNs2\nRx471JBfbHuLryNeu0mdt8xgTwKBgQDZaJhM8rNfeVlkt1+ljZeBx7xnt4o0lOMm\neQ24LYKQrnFaaclmD0ETXz/Hm1LPmfNRQj5NkC5mB3/r7mNPdTB0jow048+tbGwr\np8YENjcwqMROIzQDCyUMGh9bS4BxgLQWGnbVTAPAsG/GOjIVNE1IdieHJVWaIxER\n3cLPHKnQxQKBgQDQMt8Q+0n/OaCoP9YnISFE24CIn8BoUGP34om2WpYwC5ArXLUh\nYRj8Gw6ZhFOOwcF5kkyefk8nL+pvX1d5Udh7Wo1kHjiI1ffxmiuI2ZCrdm7Dfrnp\ntHZWJxgm5so6uFSDvvErr+Xo/LUKZm9iwu9oCKFvlFfNCRyR4ArFgNL8+wKBgQDJ\nLURhT+Qz4LKbxCO5qkAcU5s/zlMRPQTEwRe06kf7YbB6nZFD47GwH1+BcXU7rZW+\nB7JnS5fjyeTRiRJUoHhqIs4S0wuFyuJ9sw5FL3X6jPC57VFfz5xEipehf0gnv5Tl\nLy/vSBvg3mNP5uIZRQCOoOcK471GmFRfV/nAdSGekQKBgQC0Ic6EWDOi0arHUMcj\ng9sd3nZOgyRPBasyavASdk/pWU/pheQIulegdAyzi9frYd1g+79OkgBvQW2nFFta\nO6lFASzYysfgaKwAHM4lw9MylUapCpeRlRDsqkLdHXZdv7iM5kw+yuzxLpu0aTYQ\nUCKKvBim3NrJe72yXK/L26619Q==\n-----END PRIVATE KEY-----\n"



const dynamoDBClient = new DynamoDBClient({
  region: AWS_REGION,
  credentials: {
    accessKeyId: AWS_ACCESS_KEY_ID!,
    secretAccessKey: AWS_SECRET_ACCESS_KEY!,
  },
});

// Fetch data from DynamoDB
async function fetchDynamoDBData() {
  try {
    const command = new ScanCommand({ TableName: "QuizResponses" }); // Replace with your actual table name
    const response = await dynamoDBClient.send(command);
    const items = response.Items ? response.Items.map((item) => unmarshall(item)) : [];
    return items;
  } catch (error) {
    console.error("Error fetching data from DynamoDB:", error);
    return [];
  }
}

// ********** SIDE NAV ITEMS **********
const navItems = [
  { name: "Dashboard", icon: BarChart2, href: "/admin/dashboard" },
  { name: "Settings", icon: Settings, href: "/admin/settings" },
];

// ********** MAIN DASHBOARD COMPONENT **********

export default function AdminDashboard() {
  const [quizData, setQuizData] = useState<any[]>([]);

  // GA data (multiple metrics/dimensions)
  const [gaAnalyticsData, setGaAnalyticsData] = useState<any[]>([]);
  // We'll keep the single activeUsers state if you want to show it directly:
  const [gaActiveUsers, setGaActiveUsers] = useState<number | null>(null);

  // Metrics for overview
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
  ]);

  // Additional quiz summary data
  const [quizSummary, setQuizSummary] = useState([
    {
      name: "Total Responses",
      value: 0,
    },
    {
      name: "Completion Rate",
      value: "--",
    },
    {
      name: "Avg. Cups / Day",
      value: 0,
    },
  ]);

  // 1) Fetch GA data from /api/analytics (with multiple metrics/dimensions)
  useEffect(() => {
    async function fetchGoogleAnalyticsData() {
      try {
        const res = await fetch("/api/analytics");
        const data = await res.json();
        console.log("Google Analytics data:", data);

        // If the response includes 'analytics', it's an array of rows with dimensions & metrics
        if (data.analytics) {
          setGaAnalyticsData(data.analytics);

          // Example: total up all activeUsers for an overview count
          const totalActive = data.analytics.reduce(
            (sum: number, row: any) => sum + parseInt(row.activeUsers || "0"),
            0
          );
          setGaActiveUsers(totalActive);
        } else if (data.activeUsers) {
          // If old format, just set gaActiveUsers
          setGaActiveUsers(parseInt(data.activeUsers, 10));
        }
      } catch (err) {
        console.error("Error fetching Google Analytics data:", err);
      }
    }

    fetchGoogleAnalyticsData();
  }, []);

  // 2) Fetch DynamoDB quiz data
  useEffect(() => {
    (async () => {
      const items = await fetchDynamoDBData();
      setQuizData(items);
    })();
  }, []);

  // aggregator array: one aggregator object per question => { option: count }
  const aggregator = quizQuestions.map((q) => {
    const obj: Record<string, number> = {};
    q.options.forEach((option) => {
      obj[option] = 0;
    });
    return obj;
  });

  let totalCups = 0;
  let cupsEntriesCount = 0;

  quizData.forEach((entry) => {
    if (entry.answers) {
      try {
        const parsed = JSON.parse(entry.answers);
        quizQuestions.forEach((question, index) => {
          const answerForQuestion = parsed[index];
          if (!answerForQuestion) return;

          if (question.type === "single") {
            const normalized =
              typeof answerForQuestion === "string"
                ? answerForQuestion.trim()
                : "";

            if (aggregator[index][normalized] !== undefined) {
              aggregator[index][normalized] += 1;
            }

            // If it's question #6 => cups usage
            if (index === 5) {
              const numeric = parseInt(normalized.replace(/\D+/g, ""), 10);
              if (!isNaN(numeric)) {
                totalCups += numeric;
                cupsEntriesCount++;
              }
            }
          } else {
            // multiple => array of strings
            if (Array.isArray(answerForQuestion)) {
              answerForQuestion.forEach((opt) => {
                const normalized = opt.trim();
                if (aggregator[index][normalized] !== undefined) {
                  aggregator[index][normalized] += 1;
                }
              });
            }
          }
        });
      } catch (err) {
        console.error("Error parsing or aggregating:", err);
      }
    }
  });

  // Compute updated quiz summary
  const totalResponses = quizData.length;
  const averageCups =
    cupsEntriesCount > 0 ? (totalCups / cupsEntriesCount).toFixed(2) : "0";
  const completionRate = totalResponses > 0 ? "100%" : "0%";

  quizSummary[0].value = totalResponses;
  quizSummary[1].value = completionRate;
  quizSummary[2].value = averageCups;

  // Also update overview data for quiz responses
  overviewData[1].value = totalResponses; // index 1 => Quiz Responses

  // Overwrite "Users Visited" with real GA data if available
  if (gaActiveUsers !== null) {
    overviewData[0].value = gaActiveUsers;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-joyya-blue/20 via-white to-joyya-blue/20">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-joyya-navy mb-8">
          Admin Dashboard
        </h1>
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
                    <CardTitle className="text-sm font-medium">
                      {item.name}
                    </CardTitle>
                    <item.icon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{item.value}</div>
                    <p
                      className={`text-xs ${
                        item.change.startsWith("+")
                          ? "text-green-500"
                          : "text-red-500"
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
              const dataForChart = Object.keys(aggregator[qIndex]).map(
                (option) => ({
                  name: option,
                  count: aggregator[qIndex][option],
                })
              );

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
              );
            })}

            {/* NEW SECTION: Detailed GA Table (Show multiple metrics/dimensions) */}
            {gaAnalyticsData.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Detailed Google Analytics Data</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="table-auto w-full text-left">
                      <thead>
                        <tr className="border-b">
                          <th className="px-2 py-1">Country</th>
                          <th className="px-2 py-1">Region</th>
                          <th className="px-2 py-1">City</th>
                          <th className="px-2 py-1">Language</th>
                          <th className="px-2 py-1">Age</th>
                          <th className="px-2 py-1">Gender</th>
                          <th className="px-2 py-1">Active Users</th>
                          <th className="px-2 py-1">Sessions</th>
                          <th className="px-2 py-1">New Users</th>
                          <th className="px-2 py-1">Page Views</th>
                          <th className="px-2 py-1">Avg. Session Duration</th>
                          <th className="px-2 py-1">Engagement Rate</th>
                        </tr>
                      </thead>
                      <tbody>
                        {gaAnalyticsData.map((row, i) => (
                          <tr key={i} className="border-b">
                            <td className="px-2 py-1">{row.country}</td>
                            <td className="px-2 py-1">{row.region}</td>
                            <td className="px-2 py-1">{row.city}</td>
                            <td className="px-2 py-1">{row.language}</td>
                            <td className="px-2 py-1">{row.ageBracket}</td>
                            <td className="px-2 py-1">{row.gender}</td>
                            <td className="px-2 py-1">{row.activeUsers}</td>
                            <td className="px-2 py-1">{row.sessions}</td>
                            <td className="px-2 py-1">{row.newUsers}</td>
                            <td className="px-2 py-1">{row.screenPageViews}</td>
                            <td className="px-2 py-1">
                              {row.averageSessionDuration}
                            </td>
                            <td className="px-2 py-1">{row.engagementRate}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            )}
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}