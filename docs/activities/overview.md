---
id: overview
title: Activities
sidebar_label: Overview
sidebar_position: 1
description: A full catalog of built-in and custom activities for building automation workflows.
displayed_sidebar: activitiesSidebar
---

# Activities

Activities are the fundamental building blocks of every Akabot workflow. Each activity encapsulates a single, reusable action — clicking a button, reading a cell, calling an API, or writing to a database. You compose activities on the Studio canvas to model any business process.

## Activity categories

| Category | Examples |
|----------|---------|
| **UI Automation** | Click, Type, Get Text, Find Element, Take Screenshot |
| **Browser** | Open Browser, Navigate To, Fill Form, Extract Table |
| **File & Folder** | Read File, Write File, Move File, Compress/Extract |
| **Excel / CSV** | Read Range, Write Cell, Filter Table, Export to CSV |
| **Email** | Send Email, Get Emails, Move Message, Reply |
| **Database** | Execute Query, Insert Row, Bulk Insert, Stored Procedure |
| **HTTP / API** | HTTP Request, Deserialize JSON, Invoke REST Service |
| **Orchestration** | Add Queue Item, Get Transaction, Set Asset |
| **AI & Cognitive** | Classify Document, Extract Data, Sentiment Analysis |
| **Control Flow** | If, While, For Each, Try/Catch, Parallel |

## Custom activities

You can extend the activity library by building your own packages using the [Akabot SDK](/docs/latest/sdk/overview). Custom activities are distributed as NuGet packages and appear alongside built-in activities in the Studio palette.

## Next steps

- [Studio tutorials](/docs/latest/studio-tutorials) — See activities in action.
- [SDK — Create a custom activity](/docs/latest/sdk/custom-activities/create-activity)
