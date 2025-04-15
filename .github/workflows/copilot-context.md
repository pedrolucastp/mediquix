# MediQuix Application State

## Core Systems

### Authentication System
1. **User States**
   - Unauthenticated
   - Authenticated (Unverified)
   - Authenticated (Verified)
   - Premium User

2. **User Data Model**
   ```js
   {
     username: string,
     email: string,
     custom_vocabulary: Word[],
     default_difficulty: number,
     default_speciality: number,
     isPremium: boolean,
     premiumActivatedAt: timestamp,
     points: number,
     freePoints: number,
     lastFreePointsUpdate: timestamp
   }
   ```

### Points Economy
1. **Points Sources**
   - Game Achievements
     - Word Found: 2 points
     - Game Completion: 10 points
     - Perfect Score: 15 points
     - Time Bonus: 5 points
   - Daily Rewards: 10 points/day
   - Purchased Points: 5 points/BRL

2. **Points Usage**
   - Game Perks
     - Hint: 5 points
     - Extra Time: 3 points
     - Skip: 8 points
   - Points Types
     - Free Points (from gameplay)
     - Purchased Points

### Payment Infrastructure
1. **Payment Methods**
   - PIX (Brazilian instant payment)
   - Integration with MercadoPago

2. **Products**
   - Premium Access (R$1.99)
   - Point Packages (5 points/BRL)

3. **Payment States**
   - Pending
   - Approved
   - Rejected
   - Cancelled
   - Refunded

### Game Mechanics
1. **Available Games**
   - Quick Quiz (timed questions)
   - Memory Game (word-definition matching)
   - Crosswords (medical terms)
   - Hangman (medical vocabulary)
   - Word Search (find hidden terms)

2. **Game Features**
   - Difficulty Levels (1-3)
   - Medical Specialties
   - Points System
   - Game Perks
   - Progress Tracking

3. **Word Management**
   - Difficulty Rating
   - Specialty Categories
   - Active/Inactive Status
   - Custom Vocabulary

## Data Architecture

### Firebase Collections
1. **users**
   - Profile Information
   - Points Balance
   - Premium Status
   - Game Settings

2. **payments**
   - Transaction Records
   - Payment Status
   - Product Details
   - PIX Information

3. **subscriptions**
   - Premium Access Records
   - Status History
   - Payment Timeline

### Client-Side Storage
1. **LocalStorage**
   - Dark Mode Preference
   - Game Preferences
   - Auth State
   - Session Data

2. **Store State**
   - User Profile
   - Points Balance
   - Game Progress
   - Payment Status

## Integration Points

### MercadoPago Flow
1. **Payment Creation**
   - Generate Payment Intent
   - Create PIX QR Code
   - Store Payment Record

2. **Status Monitoring**
   - Webhook Processing
   - Status Polling
   - User Notification

3. **Points Delivery**
   - Atomic Updates
   - Balance Validation
   - Transaction Logging

### User Interactions
1. **Authentication**
   - Email/Password Login
   - Email Verification
   - Password Reset
   - Profile Management

2. **Game Progress**
   - Score Tracking
   - Points Awards
   - Perk Usage
   - Achievement System

3. **Premium Features**
   - Access Control
   - Payment Processing
   - Status Updates
   - Feature Unlocking