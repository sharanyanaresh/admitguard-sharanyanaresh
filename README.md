# AdmitGuard — Admission Data Validation & Compliance System

## Problem
Admission data is currently entered into spreadsheets with no validation, causing eligibility violations, wasted operational effort, and compliance risk.

## Solution
AdmitGuard is a lightweight, form-based validation system that enforces strict eligibility rules, supports documented exceptions, and maintains
an audit trail that can be configured without code changes.

## Key Features
- Real-time strict & soft rule validation
- Structured exception handling with rationale
- Configurable rules engine
- Local audit log with exception flagging

## Tech Stack
- Google AI Studio (Build Mode)
- Client-side JavaScript
- LocalStorage for persistence

## Why This Approach
This solution prevents downstream failures by enforcing correctness right at the data entry level, while preserving flexibility through documented exceptions.