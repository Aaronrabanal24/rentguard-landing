# Fairvia Master Claude.md
**Date:** 2025-10-02  
**Purpose:** Single source of truth for Claude to keep business goals, process, and functionality aligned while coding. Use this file to plan, build, and check every feature. Keep scope tight and focused on the product wedge.

## 0. One Sentence
Fairvia is a lightweight leasing and deposit operations layer that helps property teams fill units faster, reduce disputes, and prove compliance with shareable timelines, templates, and exports.

## 1. Vision and Principles
**Vision**  
Make renting simple, trusted, and compliant for owners and renters.

**Product Principles**  
- Zero training interfaces and clear timeline  
- Proof by default with exports and audit logs  
- State aware logic that prevents mistakes  
- Build fast and small and accessible  
- No marketplace in pilot and no PMS rebuild

**Non Goals**  
Not a full PMS. Not a two sided listing marketplace in the pilot. Avoid custom accounting and payment rails in V1.

## 2. Customers and ICP
**Primary SMB**  
Independent landlords with three to twenty units. Small property managers with ten to one hundred units. Lean teams that need speed and proof.

**Enterprise**  
Regional or national portfolios that already use a PMS such as Yardi, MRI, or AppFolio and want a fast proof layer.

## 3. Problems to Solve
Vacancy drag from slow replies and missed steps. Owners lack proof of effort. Deposit processes create legal risk and disputes. Teams cannot see performance across regions.

## 4. Solution Summary
**Smart Unit Link and QR** post anywhere and track everything.  
**Trust and Precheck Page** screens spam and sets expectations.  
**Inquiry to Lease Timeline** shared proof from first contact to lease and deposit close.  
**Owner ROI Board** weekly performance rollup by unit and agent.  
**Deposit Workflow** state templates and itemization and receipts and compliant release with exportable archive.

## 5. Feature Set by Tier
**Common Core**  
- Smart unit link with QR  
- Trust and precheck page  
- Timeline view from inquiry to lease  
- Owner ROI board and owner share link  
- Exportable summary and archive

**SMB Pro**  
- Deposit intent marker  
- CSV import and export  
- Basic fraud protection  
- Weekly owner update email

**Enterprise**  
- Role based permissions by org and region and unit  
- SSO and directory sync  
- Multi state template library  
- Immutable audit trail  
- Legal hold and archive export  
- Event API and webhooks

## 6. Users and Roles
Owner or Admin full visibility. Leasing Agent manages inquiries and tours. Ops or Compliance Lead manages templates and monitoring. View only Owner sees ROI and archives.

## 7. Compliance Module
**Objectives** enforce time based requirements and generate audit ready records and surface required documents by jurisdiction and reduce legal risk.

**Rules to Ship**  
- California return window 21 days after move out event  
- Florida 15 day return if no claim and 30 day notice when deductions apply  
- Local interest rules such as San Francisco when required  
- Template versions carry last reviewed date and reviewer metadata  
- All actions have timestamps and actor and state context

**Workflows**  
- Itemized letter builder with photo and receipt uploads and cost breakdown  
- Countdown timers that start on move out and pause on legal hold  
- Legal hold blocks release and logs reason and actor  
- Archive export as ZIP with timeline and letters and receipts and manifest

**Acceptance**  
- Creating a California unit triggers a 21 day timer after move out  
- Florida deduction notice uses correct text and 30 day rule  
- Export produces a ZIP with all artifacts and a manifest  
- Legal hold prevents release until cleared

## 8. Data Model
**Unit** id and address and state and city and owner_id and status and created_at  
**TimelineEvent** id and unit_id and type and actor_id and payload JSON and created_at  
Allowed types include inquiry_received and tour_scheduled and application_received and lease_sent and lease_signed and deposit_received and move_out and deposit_itemized and deposit_release_sent  
**Template** id and state_code and use_case and content HTML and last_reviewed ISO and reviewed_by and version int and is_active  
**User** id and role and org_id and email and name and regions  
**ExportJob** id and unit_id and status and created_at and finished_at and bundle_url

## 9. API Surface
**Public Renter Timeline**  
GET /unit/{unit_id}/timeline/public token query param expires in 30 days

**Core Events**  
POST /unit create  
POST /unit/{id}/event create a timeline event with type and payload  
GET /unit/{id} returns unit and latest events

**Templates**  
POST /templates upload or update  
GET /templates filter by state and use case  
PATCH /templates/{id}/review set last reviewed and reviewer

**Compliance**  
POST /unit/{id}/deposit itemization create or update  
POST /unit/{id}/hold enable or disable legal hold  
GET  /unit/{id}/export bundle ZIP for archive

**Analytics and ROI**  
GET /roi board by owner or agent with date range

**Webhooks**  
POST to customer endpoint on events selected by org

## 10. UX Rules
- No login for renters and simple owner views  
- Timeline auto builds from events and actions  
- Clear CTA labels and visible focus states and WCAG 2.1 AA contrast  
- Sub two second interactions for common actions  
- Mobile first layout for capture and review  
- Email and SMS share of smart link and owner board

## 11. Performance and Scale
- 10k active unit links supported  
- All writes idempotent with event versioning  
- Background export job queue for bundles

## 12. Roadmap
**Phase 1 Q4 2025** California and Florida compliance and archive and timers and renter read only timeline  
**Phase 2 Q1 2026** Texas and New York and Illinois plus interest logic and bulk import  
**Phase 3 Q2 2026** Broker and agent mode and referral tracking and expanded ROI board  
**Phase 4 Q3 2026** Partner integrated deposit trust and enterprise SSO

## 13. KPIs
Time to first reply and tours per one hundred inquiries and days to lease and deposit disputes closed and second unit added inside sixty days. Weekly owner board views. Export usage per unit.

## 14. Competitive Frame
AppFolio and Yardi are full PMS with heavy UX. ShowMojo handles scheduling only. Buildium is accounting first. Fairvia is a wedge layer that adds proof and speed and compliance without replacing PMS.

## 15. Pricing
Starter free first unit. SMB Pro priced from forty nine to one hundred forty nine per month. Enterprise priced at one per unit per month plus platform fee plus onboarding.

## 16. Risks and Controls
Legal complexity handled by template engine and review dates. Scope creep contained by wedge focus. Adoption driven by free unit and no login flows. Free tier abuse limited to one active unit.

## 17. Boost Modules
**Renter Status Timeline**  
Public read only progress with optional NPS pulse at lease complete

**Legal Template Review Network**  
Reviewer workflow and versioning and exports and review badge

**Broker and Agent Mode**  
Referral links and unit activation tracking and ROI reports

**Export and Integration Tools**  
CSV of timeline events and ZIP bundles and field maps for major PMS

## 18. Coding Standards for Claude
TypeScript and Next.js and React and Tailwind  
Server actions or tRPC for APIs inside Next  
Prisma or Drizzle for schema and migrations  
Zod for input validation  
Vitest for unit tests and Playwright for e2e  
Feature flags for risky items  
Every user action emits a timeline event

## 19. Security and Privacy
GLBA level care for any personal info  
Redact sensitive data in exports  
Signed URLs for public timeline token  
Do not store card numbers or banking in V1

## 20. Definition of Done by Epic
**Unit Link and Timeline**  
Create unit and publish link and capture inquiries and show timeline with five core events and export summary PDF

**Deposit Workflow**  
Create itemization with photos and receipts and send letters and run timer and export archive ZIP

**Owner ROI Board**  
Show weekly rollup and share owner view and email weekly summary

**Templates and Compliance**  
Store versions and review badge and render final letters with correct rules for California and Florida

## 21. Task Queue for Claude
- Scaffold Next.js app with Tailwind and auth stub and unit timeline pages  
- Implement Unit model and TimelineEvent model and CRUD  
- Build Unit Link and public Timeline read view with signed token  
- Add Event API and event bus and audit log  
- Build Deposit Itemization UI and letter generator and timers  
- Add Export service to produce ZIP and manifest  
- Build Owner ROI board and share link and email summary  
- Add Template engine with reviewer workflow and versioning  
- Integrate CA and FL rule logic and tests  
- Add minimal webhooks and CSV export

## 22. Test Plan
Unit tests for event creation and timer math and template rendering. e2e for timeline flow and deposit export. Accessibility scan on core pages.

## 23. Glossary
Unit a rental unit with its own smart link.  
Timeline the ordered list of events from inquiry to lease and deposit close.  
Owner ROI board a weekly rollup of activity and outcomes.  
Legal hold a control that pauses release and flags the thread.  
Archive export a ZIP of all artifacts for a unit.

## 24. Investor Narrative
Trust and speed and clarity create value. The wedge is proof first leasing and deposit flows that ride alongside PMS. Free unit drives adoption. Compliance creates stickiness. Enterprise pilots expand by region.

## 25. Ask
Intros to leasing ops and compliance leaders. Design partners in California and Florida. Strategic capital for template network and enterprise pilots.
