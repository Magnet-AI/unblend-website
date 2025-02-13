import { NextResponse } from 'next/server';
import { BetaAnalyticsDataClient } from '@google-analytics/data';

const NEXT_PUBLIC_GA_PROPERTY_ID = "477964090" 
const NEXT_PUBLIC_GA_CLIENT_EMAIL= "unblend-admin@optimal-carving-450807-d9.iam.gserviceaccount.com"
const NEXT_PUBLIC_GA_PRIVATE_KEY= "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDA0HfrTnWlPS4D\n+1/wDNQx7sTrafeoFNyQo0wbM6fK6RDWNiLE36De/hZeblUocijwWFu+ZcT7F1ia\nflLT3P6GLBeL9WFx7uMqVQfVNp4nIZezRZ6OR6FuTwcW72ziBxF0hMWl54HPdxS7\nAPk1iQI6+X6MucNmHWbF/iDCW5W5zdL/EtWcAitAyTg5PLeZ9YHOCIMPdfYpTAjy\nxEcyB8Be7njuMGsGKCjPd91Aw61bDq39iBgwiiRiMzXQihhFFkyEaGqlGqE24VUQ\neCBmUtL0oULGZN+Xs8y4LZrNIjoHAIoYJwEbBMylJFzZh1Um9eoewAK9bIeuIUgO\ndewqEbODAgMBAAECggEAGZ+6yBkxtkd2pY3TFp5F1urx3Y1EHeDD3S7ubtEDFAq8\nM5OXNE253dirlVoZVBozyZkcfCWfM3VLT6DJFiHQ63jRmkZ+cDs8kkQhmdq70tx6\nghcW9rabRAMZoJkqAbHJxo/cimtFS5J6PU3oUI6ILtk4UbBgQOJYZaibpuiv8bSm\n7PgZ3OF/axkJj7WnouX18uNScyTBVhRIU6B05/AMqsMilHNRWUlnHATDzSFljwiG\nep8gPU0uX8UIv5iPCZybp1NSSBhD+56ojyopIxtDruUYcpE8THwNgkgeXqPiQONW\nnpfx7o1nSyUHdiNeZPtLButcKtytmZ7T5bg0k6EO+QKBgQD0Gnesri6z0r0v4iKF\nG+nXaERBKWrDsUz63p8PcqeS7iTfTcHFtb4iLKVYvFONZqe5DWLaVw8C4Cv/o2v3\n+9yZo36uX54qifcVMga9cP6+Xt1vOiq5FEK6icZws4UJeMuv8ziysDWHUaRN0Uj1\n7Ec6FCmj/o8doE0cFyAdobHOawKBgQDKNhkSD8d+pKGnaLAT4Lc1ckt8TcuxmWIr\n7h3xJfHNkMXqeFuLzDnAKwx8fv6SyABUgXZbL6J/dvbeVLOHHPR4UIjO6L/Q16nM\ntirzm+rQm8wL4AHOwOwCG6k8Y8P95y1MQClqT7qJ1x0LbTbYq+3Hpwz4FVRa3RjV\nbmOoLfFFSQKBgCsmdptG2yiciybowZNoIMkcPFyMdrwLHoGGUvXHHcpCYLA8rZFG\nlEq0O7JY8CghympS7HOOSjAG8qApAk/+7LsYBK/MZUg9xTiw9DIOxGlgmaIs1RqM\nc1NIQZTwlwbanJ8Izq//qCa4juPWqCAY2Wpx3/6GZEQnbxoVGG9EgwrrAoGAYGh2\nf4QCa0D2yahB+tgywUqi7rrwmNY2VheLMwQSSx3xHp8PlpFiH1rm8xxhJ34vmhq3\nYTZO1VLU1J+xkIOfkxVihLO3cEzCahWYWNlHlPoSyL6eXgLhAwhJIb+3HADyOd6F\nYGhu2XU0JdSGR7uA/KWKq2UP+NpdErU00mRFGfECgYB5Z3ewx0tlV56ivIUSF4VC\nCquZ6LrV7d6po01E8kfzem5A+ZuMVNRkA6OdAFHNoP3dm6h3lNkpCjjPr4aIkVAW\nksJsf38riLva9R7YUi1YIGlmO1QbGN9uyGBWBpt5OK/DW8SeHKf/8wd27sWOO3pJ\nicR8h8UHc6NHY9R+Gu17rQ==\n-----END PRIVATE KEY-----\n".replace(/\\n/g, "\n");



export async function GET() {
  if (!NEXT_PUBLIC_GA_PROPERTY_ID || !NEXT_PUBLIC_GA_CLIENT_EMAIL || !NEXT_PUBLIC_GA_PRIVATE_KEY) {
    return NextResponse.json({ error: "Missing GA credentials" }, { status: 500 });
  }

  try {
    const analyticsDataClient = new BetaAnalyticsDataClient({
      credentials: {
        client_email: NEXT_PUBLIC_GA_CLIENT_EMAIL,
        private_key: NEXT_PUBLIC_GA_PRIVATE_KEY,
      },
    });

    const [response] = await analyticsDataClient.runReport({
      property: `properties/${NEXT_PUBLIC_GA_PROPERTY_ID}`,
      dateRanges: [
        { 
          startDate: "2025-02-01", 
          endDate: "today" 
        },
        { 
          startDate: "30daysAgo", 
          endDate: "today" 
        }
      ],
      dimensions: [
        { name: "country" },
        { name: "region" },
        { name: "city" },
        { name: "language" },
        { name: "userAgeBracket" },
        { name: "userGender" }
      ],
      metrics: [
        { name: "activeUsers" },
        { name: "sessions" },
        { name: "newUsers" },
        { name: "screenPageViews" },
        { name: "averageSessionDuration" },
        { name: "engagementRate" },
        { name: "userEngagementDuration" }
      ],
      orderBys: [
        {
          metric: { metricName: "activeUsers" },
          desc: true
        }
      ]
    });

    // Calculate period-over-period changes
    const currentPeriodTotal = response.rows?.reduce((acc, row) => {
      return {
        activeUsers: acc.activeUsers + parseInt(row.metricValues?.[0]?.value || "0"),
        sessions: acc.sessions + parseInt(row.metricValues?.[1]?.value || "0"),
        averageSessionDuration: acc.averageSessionDuration + parseFloat(row.metricValues?.[4]?.value || "0"),
        engagementRate: acc.engagementRate + parseFloat((row.metricValues?.[5]?.value || "0"))
      };
    }, { activeUsers: 0, sessions: 0, averageSessionDuration: 0, engagementRate: 0 });

    const previousPeriodTotal = response.rows?.reduce((acc, row) => {
      return {
        activeUsers: acc.activeUsers + parseInt(row.metricValues?.[0]?.value || "0"),
        sessions: acc.sessions + parseInt(row.metricValues?.[1]?.value || "0"),
        averageSessionDuration: acc.averageSessionDuration + parseFloat(row.metricValues?.[4]?.value || "0"),
        engagementRate: acc.engagementRate + parseFloat(row.metricValues?.[5]?.value || "0")
      };
    }, { activeUsers: 0, sessions: 0, averageSessionDuration: 0, engagementRate: 0 });

    // Calculate percentage changes
    const changes = {
      activeUsers: currentPeriodTotal && previousPeriodTotal ? ((currentPeriodTotal.activeUsers - previousPeriodTotal.activeUsers) / previousPeriodTotal.activeUsers * 100).toFixed(1) : '0',
      sessions: currentPeriodTotal && previousPeriodTotal ? ((currentPeriodTotal.sessions - previousPeriodTotal.sessions) / previousPeriodTotal.sessions * 100).toFixed(1) : '0',
      averageSessionDuration: currentPeriodTotal && previousPeriodTotal ? ((currentPeriodTotal.averageSessionDuration - previousPeriodTotal.averageSessionDuration) / previousPeriodTotal.averageSessionDuration * 100).toFixed(1) : '0',
      engagementRate: currentPeriodTotal && previousPeriodTotal ? ((currentPeriodTotal.engagementRate - previousPeriodTotal.engagementRate) / previousPeriodTotal.engagementRate * 100).toFixed(1) : '0'
    };

    // Format the detailed analytics data
    const analytics = response.rows?.map(row => ({
      country: row.dimensionValues?.[0]?.value || '',
      region: row.dimensionValues?.[1]?.value || '',
      city: row.dimensionValues?.[2]?.value || '',
      language: row.dimensionValues?.[3]?.value || '',
      ageBracket: row.dimensionValues?.[4]?.value || '',
      gender: row.dimensionValues?.[5]?.value || '',
      activeUsers: row.metricValues?.[0]?.value || '0',
      sessions: row.metricValues?.[1]?.value || '0',
      newUsers: row.metricValues?.[2]?.value || '0',
      screenPageViews: row.metricValues?.[3]?.value || '0',
      averageSessionDuration: formatDuration(parseFloat(row.metricValues?.[4]?.value || '0')),
      engagementRate: `${parseFloat(row.metricValues?.[5]?.value || '0').toFixed(1)}%`,
      userEngagementDuration: formatDuration(parseFloat(row.metricValues?.[6]?.value || '0'))
    })) || [];

    // Format overview metrics
    const overview = {
      activeUsers: currentPeriodTotal?.activeUsers || 0,
      activeUsersChange: `${changes.activeUsers}%`,
      avgSessionDuration: formatDuration((currentPeriodTotal?.averageSessionDuration || 0) / (analytics.length || 1)),
      avgSessionDurationChange: `${changes.averageSessionDuration}%`,
      engagementRate: `${((currentPeriodTotal?.engagementRate || 0) / (analytics.length || 1)).toFixed(1)}%`,
      engagementRateChange: `${changes.engagementRate}%`
    };

    return NextResponse.json({
      analytics,
      overview,
      activeUsers: currentPeriodTotal?.activeUsers || 0 // Kept for backward compatibility
    });
  } catch (err) {
    console.error("Google Analytics Error:", err);
    return NextResponse.json({ error: "Failed to fetch GA data" }, { status: 500 });
  }
}

// Helper function to format duration from seconds to "Xm Ys" format
function formatDuration(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.round(seconds % 60);
  return `${minutes}m ${remainingSeconds}s`;
}