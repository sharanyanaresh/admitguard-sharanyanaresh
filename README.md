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

# admitguard-sharanyanaresh

## Must-Have Requirements — Sprint Prioritization

The following requirements will be implemented first because they prevent
invalid candidate progression and directly address the business risk:

1. Form-based data entry for all 11 candidate fields (FR-1)
2. Real-time field-level validation (FR-2)
3. Strict rules that block submission with clear error messages (FR-3)
4. Soft rule violations with exception toggle and mandatory rationale (FR-4)
5. Rationale validation for minimum length and required keywords (FR-5)
6. Exception count computation and flagging for manager review (FR-6)
7. Submission success screen with summary (FR-7)

These features ensure data correctness at entry, structured exception handling,
and auditability before investing operational effort.