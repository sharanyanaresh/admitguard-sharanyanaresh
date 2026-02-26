# AdmitGuard – Google Sheets Admission Validation Extension

AdmitGuard is a Google Sheets extension designed to validate candidate admission data using a combination of **strict rules**, **soft rules**, and a structured **exception approval workflow**.  
It mirrors real-world admissions decision-making while remaining lightweight and easy to use.

---

## Problem Statement

Admissions data often contains inconsistencies and borderline cases that cannot be handled using rigid validations alone.  
AdmitGuard solves this by:
- Enforcing non-negotiable validation rules
- Allowing controlled exceptions with justification
- Escalating high-risk candidates for managerial review

---

## Key Features

### 1. Strict Rule Validation (Hard Stops)
Candidates are blocked if they violate any of the following:
- Invalid full name (numbers / < 2 characters)
- Invalid email format
- Invalid Indian phone number
- Disallowed qualification
- Aadhaar not exactly 12 digits
- Logical dependency violations (e.g., offer sent to rejected candidate)

**Result:** Candidate is marked `BLOCKED`.

---

### 2. Soft Rule Validation (Warnings)
Non-critical checks that allow exceptions:
- Age outside 18–35 range
- Graduation year outside 2015–2025
- Low CGPA / Percentage
- Low screening score

These rules generate **warnings**, not failures.

---

### 3. Exception Handling Workflow
For each warning:
- User can request an exception
- A written rationale is mandatory
- Rationale must:
  - Be at least 30 characters
  - Contain an approval keyword  
    (`approved by`, `special case`, `documentation pending`, `waiver granted`)

---

### 4. Escalation Logic
- ≤ 2 exceptions → Approved with justification
- > 2 exceptions → Flagged for **manager review**

---

### 5. Decision Recording (Audit-Friendly)
After validation, AdmitGuard writes back to the sheet:
- **Decision Status** (`APPROVED`, `ESCALATED`, `BLOCKED`)
- **Last Validated At** timestamp

This makes the extension usable in real admission workflows.

---

## How to Use

1. Open the Google Sheet
2. Select a candidate row (not the header)
3. Open **AdmitGuard** from the menu
4. Click **Validate Selected Row**
5. Resolve warnings using exception requests if required
6. Review the final decision written into the sheet

---

## Folder Structure
![alt text](image.png)

---

## Design Philosophy

- Keep validation logic transparent
- Separate strict disqualifiers from reviewable exceptions
- Support real-world ambiguity instead of rejecting valid edge cases
- Ensure decisions are traceable and auditable

---

## Status

- Feature complete  
- End-to-end workflow implemented  
- Ready for demonstration and evaluation