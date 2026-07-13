# Workflow Analysis: Vague vs. Precise AI Direction

## 1. Introduction & Feature Overview
For this engineering drill, I built the backend verification handler for the  Employer Job Posting Form. The purpose of this feature is to prevent companies from posting vague job listings or using automated AI screening to auto-reject entry-level applicants. I developed the code across two distinct Git branches to evaluate how different prompting quality directly impacts code safety.

## 2. Correctness & Edge Cases (Specific Diffs)
By running a literal comparison between `feature/job-form-vague` and `feature/job-form-precise`, significant architectural differences were uncovered:

* **Input Validation:** In the vague branch, the code only checked if data *existed*. It blindly accepted string inputs for numbers. In the precise branch, the code utilizes `Number.isInteger()` to explicitly enforce a numerical headcount greater than zero.

* **Content Filtering:** The precise branch implements a custom `.some()` array filter mapping against a `bannedBuzzwords` collection. This successfully blocks strings containing terms like "rockstar" or "etc.", ensuring data quality. The vague branch left this completely vulnerable.

## 3. AI Mistakes Caught
During development, a critical mistake was identified in the AI's logic regarding case sensitivity. In an early iteration of the filter, the AI checked `skill.includes(bannedWord)` directly. If an employer capitalized the text (e.g., "Rockstar" or "ETC."), the filter completely failed to detect it. I caught this error and forced the inclusion of `.toLowerCase()` to ensure the validation check could not be bypassed by changing character casing.

## 4. Review & Verification Effort
Verifying the vague branch required tedious manual reading of the script line-by-line to predict where it would break under stress. Conversely, the precise branch was directed to construct structured modular inputs, allowing for fast verification against edge cases (such as passing negative integer boundaries or arrays consisting entirely of empty objects).