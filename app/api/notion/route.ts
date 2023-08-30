import { NextRequest, NextResponse } from "next/server"
import { Client, LogLevel } from "@notionhq/client"

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
  logLevel: LogLevel.DEBUG,
})

export async function POST(request: NextRequest) {
  const data = await request.json()
  const checked = `${data.newsletter}`

  try {
    await notion.pages.create({
      parent: {
        database_id: `${process.env.NOTION_DATABASE_ID}`,
      },
      properties: {
        Name: {
          title: [
            {
              type: "text",
              text: {
                content: `${data.name}`,
              },
            },
          ],
        },
        Company: {
          rich_text: [
            {
              type: "text",
              text: {
                content: `${data.company}`,
              },
            },
          ],
        },
        Email: {
          type: "email",
          email: `${data.email}`,
        },
        StartDate: {
          date: {
            start: `${data.startDate}`,
          },
        },
        Work: {
          type: "multi_select",
          multi_select: [
            {
              name: `${data.work}`,
            },
          ],
        },
        Budget: {
          type: "multi_select",

          multi_select: [
            {
              name: `${data.budget}`,
            },
          ],
        },
        Survey: {
          type: "multi_select",

          multi_select: [
            {
              name: `${data.survey}`,
            },
          ],
        },
        Details: {
          rich_text: [
            {
              type: "text",
              text: {
                content: `${data.details}`,
              },
            },
          ],
        },
        Newsletter: {
          type: "checkbox",
          checkbox: JSON.parse(checked),
        },
      },
    })
    return NextResponse.json(
      {
        status: "Ok",
      },
      {
        status: 200,
      }
    )
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(`Failed to POST to Notion: ${error.message}`)
    }
    return NextResponse.json(
      {
        error: "Internal server error.",
      },
      {
        status: 500,
      }
    )
  }
}
