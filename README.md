# Everyday Budget & Expense Tracker — Privacy-first two-workspace edition

Upload **all** files in the ZIP to your existing GitHub Pages repository root. This version uses a single-page application with separate tab views and backward-compatible links to former pages.

## Zero persistence
Financial entries exist only in JavaScript memory during the current page session. NO localStorage, sessionStorage, cookies, database or analytics code is used by this website. Refreshing, closing, or navigating away destroys entries. Navigating between tabs inside the website preserves entered data until reload. Download, CSV backup or browser Print / Save PDF before leaving. The older site's stored browser data is not read or modified; users should clear existing old browser site data manually if they want those old records removed. External directories may independently process information entered on their own websites.

## Individual and professional modes
Individuals can calculate budgets, record multiple daily expenses, view pies, trends, goals and assistance. The professional workspace accepts anonymous monthly amounts and arrears, shows a breakdown chart and a printable/downloadable assessment, and is isolated from individual input data. No client names, identifiers or actual case notes are requested. Clear Assessment resets professional values. Clear All wipes every entry in the active tab.

Housing burden uses 30% and 50% of gross income using the entered housing and utility costs. Missing fields are never claimed as known. No automated benefit eligibility or eviction-risk decisions are made.

## Directory limitation
Curated resources and ZIP search links provide starting points, not verified live lists of nearby agencies or continuously checked application availability. Confirm eligibility, funding and intake at the provider. The website does not send budget entries to them.

## Professional welcome screen
The **Housing professionals** navigation item opens `professional.html`, a public orientation page with a privacy notice, rather than a shared PIN. Clicking Enter opens the anonymous assessment at `index.html#professional`. No authentication is claimed or provided.

Professional assessment enhancements: unlimited optional additional expense rows, self-reported issue and contributing-factor dropdowns, urgency, household size, state/ZIP, and rule-based assistance suggestions using the existing static resource directory. All entries are held in page memory only, never saved; referrals never constitute eligibility findings or confirmed open applications.

## Professional planning additions (October 2026)
The professional page now includes a multi-select needs checklist, preliminary eligibility questions, urgent-case guidance, assistance referral suggestions, hypothetical one-time and ongoing support scenarios, an action plan, and follow-up checklists. All inputs and checklists remain in page memory only; reports can be downloaded or printed at the user's request. The website does not determine actual eligibility, confirm program funding or reserve assistance. The one-time grant sliders adjust arrears, not ordinary recurring expenses. No identifying client information should be entered.


## Brand and homepage update
Public-facing name: **Home & Financial Stability Hub**. Warm orange theme throughout, new introductory homepage, quick access to planning, spending tracker, assistance, and professionals. The spending tracker remains available because it helps users compare actual purchases with their monthly plan, but it is no longer part of the main brand name. Financial entries are intended to remain in active-page memory only.


## My Financial History & Progress
In the Trends section, choose **Upload previous reports** to import multiple JSON backup files, individual monthly budget CSV files, or daily-expense CSV exports. Supported exports are those produced by this website; PDF is not importable. Duplicate months prompt for confirmation. Alternatively, choose **Enter past financial information** to enter an earlier month and optional income, gross income, savings, arrears, utility debt, and unlimited categorised expenses. Compare selected periods, edit/remove months and download combined JSON history or CSV comparisons. Everything exists only in temporary JavaScript memory and clears when the page reloads or closes; download your history before leaving.

## Deployment reliability

This ZIP includes an empty `.nojekyll` file to tell GitHub Pages to serve the static files without Jekyll processing. The files belong in the **repository root**. A GitHub Pages HTTP 500 at the **Deploy** action occurs at GitHub's deployment service; it is not proof of a website code problem. Retry the failed Pages job before replacing the files again.

## PDF reports
On the Trends page, use **View / Save Financial Report (PDF)** to open a formatted print-ready report including budget history, expense details and month-by-month chart. Choose **Print → Save as PDF**. For professional assessments, generate the assessment first and use **View / Save Case Report (PDF)**. These reports are prepared in the browser; they do not upload financial data. Keep the separate financial history backup when you want to upload previous data to compare trends later.


## Professional workflow additions
New in this edition: court deadline and disputed-arrears intake fields, a consent discussion prompt, an illustrative landlord–tenant repayment calculator, a preparation checklist, and CSV export of the planning checklist. The calculator displays affordability cautions and separately identifies landlord and household claimed balances. No data is sent to a server; the additional fields live only in the browser. No eligibility is verified and there is no live assistance inventory. The platform is NOT a case management system, legal service, eviction prediction tool, or a substitute for a HUD-required client record.

**Validation recommended before organizational use**: review with housing counselors, legal-aid partners, and accessibility testers; check all referral links and application rules.

## Guided professional assessment update
The professional workspace has a five-step wizard: household information, expenses, reported housing challenges, intervention preparation, and results/action plan. The final step retains existing assistance matching, scenario analysis, mediation, charts and downloads, with an added completeness review and editable notes area. The redundant all-assistance button was removed from the professional workspace; personalized referrals remain in its results. Data is not automatically persisted.

QA: Browser smoke test with fictional household returned $1,700 monthly expenses, $800 balance after $2,500 take-home income, with five wizard panels and no JS exceptions. This is *not* full security, accessibility, cross-browser or case-management validation. Organization deployments should test real workflows using fictional cases before handling sensitive information.
