# BCS501 — Software Engineering & Project Management

## Module 4: Software Project Management & Planning

## Introduction to Software Project Management (SPM)
- **Importance**: software projects fail mainly due to management problems (poor estimates, unclear scope, weak tracking), not technical ones. SPM ensures the project is delivered on time, within budget, and to quality.
- **Contract management**: software may be developed under a fixed-price contract (customer pays a fixed sum; risk on developer), time-and-materials contract (customer pays actual time + profit margin; risk on customer), or fixed-price-per-deliverable. Contracts define acceptance criteria, payment milestones, and penalties.
- **Activities covered by SPM**: planning, estimation, scheduling, monitoring and control, risk management, quality management, and configuration management.
- **Plans, methods, and methodologies**: a plan defines what will be done and when; methods are techniques (e.g., cost-benefit analysis, PERT/CPM); methodologies are complete frameworks (e.g., Waterfall, Scrum, PRINCE2).
- **Categorizing software projects**: by size (small/medium/very large), by requirements stability, by technology familiarity, and by criticality — each category needs different planning rigor.
- **Stakeholders**: everyone affected by the project — customers, users, developers, managers, suppliers, and financiers. Stakeholder analysis identifies their interests and influence.

## Project Evaluation & Selection

### Setting Objectives
Objectives must be SMART: Specific, Measurable, Achievable, Relevant, Time-bound. Example: "Deliver the payroll module with 95% defect-free rate within 4 months."

### Business Case
A business case justifies the project: it states the problem/opportunity, options, costs, benefits, risks, and the recommendation. The project is approved only if the business case is sound.

### Project Success and Failure
- Success: delivered on time, on budget, meeting quality, and satisfying the customer.
- Failure causes: unrealistic estimates, unclear requirements, poor communication, no top-management support, unmanaged risks.

### Cost-Benefit Evaluation Techniques

**Net Profit**: total benefits minus total costs over the project's life. Simple but ignores the time value of money.

**Payback Period**: time needed to recover the initial investment.
- Example: investment = ₹1,00,000; annual net cash inflow = ₹25,000 → payback = 100000/25000 = **4 years**.
- Rule: choose the project with the shortest payback period.

**Net Present Value (NPV)**: the sum of future cash flows discounted back to today.
- Discount factor for year t = 1 / (1 + r)^t, where r is the discount rate.
- NPV = (Sum of discounted inflows) − Initial investment.
- Rule: accept the project if NPV > 0; compare projects by NPV (higher is better).
- Worked example: investment ₹1,00,000 at start; returns ₹40,000 per year for 3 years; discount rate 10%.
  - Year 1: 40000/1.10 = 36,364
  - Year 2: 40000/1.21 = 33,058
  - Year 3: 40000/1.331 = 30,052
  - Total discounted inflow = 99,474
  - NPV = 99,474 − 100,000 = **−₹526 → reject** (slightly loss-making).

**Internal Rate of Return (IRR)**: the discount rate that makes NPV = 0. If IRR > cost of capital, accept the project.

### Risk Evaluation
Evaluate project risks before selection: technical feasibility, market risk, financial risk, and organizational risk. A risk matrix maps likelihood vs. impact.

## Step Wise Project Planning (Steps 0 to 10)
0. **Select the project** and its planning team.
1. **Identify project scope and objectives** — in measurable terms.
2. **Identify project infrastructure** — standards, tools, processes to use.
3. **Analyze project characteristics** — size, complexity, risks.
4. **Identify project products and activities** — deliverables (project and intermediate) and the activities to produce them.
5. **Estimate effort for each activity**.
6. **Identify activity risks** — and plan responses.
7. **Allocate resources** — people and equipment.
8. **Review/publicize the plan**.
9. **Execute the plan** and create lower-level detailed plans.
10. **Lower-level detail planning** for the first activities.

## Prescribed Text
Bob Hughes, Mike Cotterell, Rajib Mall, *Software Project Management*, 5th/6th Edition, McGraw-Hill — Chapters 1, 2 and 3.
