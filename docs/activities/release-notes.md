---
id: release-notes
title: Release Notes
sidebar_label: Release Notes
sidebar_position: 2
description: What's new, improved, and fixed in each version of the Akabot Activities library.
displayed_sidebar: activitiesSidebar
---

# Activities — Release Notes

## v3.2.0 — April 2026

### New activities
- **`Classify Document`** — AI-powered document classification using a configurable confidence threshold.
- **`Send Teams Message`** — Post messages and adaptive cards to Microsoft Teams channels or chats.
- **`Merge PDF Files`** — Combine multiple PDF files into one with configurable page ordering.
- **`Read Barcode`** — Decode QR codes and 1D barcodes from images or screen regions.

### Improvements
- `HTTP Request` activity now supports multipart/form-data uploads and streaming responses.
- `Excel — Read Range` performance improved by 60% for sheets with more than 10,000 rows.
- `Find Element` now retries with exponential back-off before throwing a timeout exception.

### Bug fixes
- Fixed `Send Email` ignoring CC recipients when the BCC field was populated.
- Resolved `Write File` overwrite mode corrupting files larger than 2 GB.
- Fixed `Get Text` returning empty string on some Electron-based applications.

---

## v3.1.0 — January 2026

### New activities
- **`SAP — Login`** and **`SAP — Read Table`** — Native SAP GUI automation activities.
- **`Compress Files`** / **`Extract Archive`** — ZIP, 7z, and TAR support with password protection.
- **`Text — Extract with Regex`** — Extract named capture groups from text using a regular expression.

### Improvements
- `Browser — Extract Table` now handles merged cells and rowspan/colspan attributes.
- `Database — Execute Query` supports named parameters to prevent SQL injection.
- All activities now emit structured log entries consumable by Akabot Insight.

### Bug fixes
- Fixed `For Each Row` skipping the last row in DataTable when the table had exactly one column.
- Corrected `Move File` on Windows when source and destination are on different drives.

---

## v3.0.0 — September 2025

### New activities
- **`Invoke Python Script`** — Run a Python script and capture stdout, stderr, and exit code.
- **`Call REST API`** — Simplified REST client with built-in OAuth 2.0 and API key support.
- **`Read PDF Text`** — Extract plain text from native and scanned PDF files.

### Breaking changes
- `Legacy Screen Scraping` activities removed. Replace with `Get Text` or `Find Element` equivalents.
- `Send SMTP Email` renamed to `Send Email`; the `SmtpHost` property is now sourced from a named Connection asset.

### Bug fixes
- Resolved `Type Into` randomly inserting extra characters on systems with non-US keyboard layouts.
- Fixed `Take Screenshot` capturing a blank image when called inside a background (unattended) session.
