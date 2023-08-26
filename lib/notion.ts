// import { Client } from "@notionhq/client"

// const notion = new Client({
//   auth: process.env.NOTION_API_KEY,
// })

// export default async function Notion(req, res) {
//   if (req.method !== "POST") {
//     return res
//       .status(405)
//       .json({ message: `${req.method} requests are not allowed` })
//   }

//   try {
//     const {
//       name,
//       company,
//       email,
//       startDate,
//       work,
//       budget,
//       survey,
//       details,
//       newsletter,
//     } = JSON.parse(req.body)
//     await notion.pages.create({
//       parent: {
//         type: "database_id",
//         database_id: process.env.NOTION_DATABASE_ID,
//       },
//       properties: {
//         Name: {
//           title: [
//             {
//               type: "text",
//               text: {
//                 content: name,
//               },
//             },
//           ],
//         },
//         Company: {
//           title: [
//             {
//               type: "text",
//               text: {
//                 content: company,
//               },
//             },
//           ],
//         },
//         Email: {
//           type: "email",
//           email: email,
//         },
//         StartDate: {
//           date: {
//             startDate: startDate,
//           },
//         },
//         Work: {
//           type: "multi_select",
//           work: work,
//           multi_select: [
//             {
//               name: "Development",
//             },
//             {
//               name: "Design + Development",
//             },
//             {
//               name: "Self hosted solutions",
//             },
//             {
//               name: "Framer",
//             },
//             {
//               name: "Super.so",
//             },
//             {
//               name: "Documentation",
//             },
//             {
//               name: "Content Management",
//             },
//             {
//               name: "Other",
//             },
//           ],
//         },
//         Budget: {
//           type: "multi_select",
//           budget: budget,
//           multi_select: [
//             {
//               name: "$5,000 - $8,000",
//             },
//             {
//               name: "$8,000 - $15,000",
//             },
//             {
//               name: "$15,000 - $30,000",
//             },
//             {
//               name: "$30,000 - $45,000",
//             },
//             {
//               name: "$45,000 - $65,000",
//             },
//             {
//               name: "$65,000+",
//             },
//           ],
//         },
//         Survey: {
//           type: "multi_select",
//           survey: survey,
//           multi_select: [
//             {
//               name: "Articles",
//             },
//             {
//               name: "Colleague",
//             },
//             {
//               name: "Newsletter",
//             },
//             {
//               name: "Former Client",
//             },
//             {
//               name: "LinkedIn",
//             },
//             {
//               name: "Twitter (X)",
//             },
//             {
//               name: "Other",
//             },
//           ],
//         },
//         Details: {
//           rich_text: [
//             {
//               type: "text",
//               text: {
//                 content: details,
//               },
//             },
//           ],
//         },
//         Newsletter: {
//           type: "checkbox",
//           checkbox: newsletter,
//         },
//       },
//     })
//     res.status(201).json({ msg: "Success" })
//     res.header("Access-Control-Allow-Origin", "*")
//     res.header("Access-Control-Allow-Methods", "GET, PUT, POST")
//     res.header("Access-Control-Allow-Headers", "Content-Type, Authorization")
//   } catch (error) {
//     res.status(500).json({ msg: "There was an error" })
//   }
// }
