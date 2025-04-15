# MediQuix Copilot Instructions

## Coding Standards

### Vue Component Standards
1. Use Composition API with `<script setup>` for all components
2. Follow naming conventions:
   - Components: PascalCase (BaseButton.vue)
   - Props: camelCase
   - Events: kebab-case with 'on-' prefix
   - Slots: kebab-case
   - Avoid two-way bindings
3. Component structure order:
   ```vue
   <template>
   <script setup>
   <style scoped>
   ```
4. State Management:
   - Use refs for local state
   - Use computed for derived state
   - Use emits for component events
   - Use props for component inputs

### Store Implementation
1. Always use Pinia for state management
2. Follow store category separation:
   - auth: User authentication and profile
   - points: Game points and rewards
   - payments: MercadoPago integration
   - vocabulary: Medical terms management
   - settings: User preferences
   - ui: Interface state
3. Store Actions Pattern:
   ```js
   async function actionName() {
     try {
       uiStore.setLoading('key', true);
       // Action logic
       uiStore.setSuccess('Success message');
     } catch (error) {
       uiStore.setError('key', error.message);
       throw error;
     } finally {
       uiStore.setLoading('key', false);
     }
   }
   ```

### Game Feature Implementation
1. Use composables for shared game logic:
   - useGameState: Game progression, word selection
   - useGamePoints: Points calculation and updates
   - useGameTimer: Time tracking and bonuses
2. Points System Rules:
   - Word Found: 2 points
   - Game Completion: 10 points
   - Perfect Score: 15 points bonus
   - Time Bonus: 5 points
3. Perks Implementation:
   - Hint (5 points): Reveals letter/clue
   - Extra Time (3 points): +30 seconds
   - Skip (8 points): Skip current question

### Firebase Integration
1. Security Rules Pattern:
   ```rules
   function validateUser(data) {
     return data.keys().hasAll(['required', 'fields'])
       && validateField1(data.field1)
       && validateField2(data.field2);
   }
   ```
2. Atomic Transactions:
   - Use FieldValue.increment for points
   - Use batch writes for related updates
   - Handle transaction failures
3. Error Recovery:
   - Implement rollback mechanisms
   - Log all errors with context
   - Handle offline state

### API Integration
1. Payment Flow:
   - Create pending payment
   - Initialize MercadoPago
   - Poll for status updates
   - Handle timeouts (5 minutes max)
2. Points Management:
   - Track free vs purchased points
   - Use atomic updates
   - Validate point balances
3. Error Handling:
   - Network errors
   - Payment timeouts
   - Transaction failures
   - Authentication issues

### Security Requirements
1. Input Validation:
   - Sanitize all user inputs
   - Validate amounts and point values
   - Check permissions before actions
2. Authentication:
   - Require email verification
   - Implement proper logout
   - Handle session expiration
3. Data Access:
   - Use proper Firebase rules
   - Validate all mutations
   - Log sensitive operations

### Performance Guidelines
1. Loading States:
   - Show loading indicators
   - Use skeleton loaders
   - Handle empty states
2. Error States:
   - Show clear error messages
   - Provide retry options
   - Maintain data consistency
3. Response Times:
   - Optimize Firebase queries
   - Implement proper caching
   - Use background updates

### Documentation
1. Component Documentation:
   ```js
   /**
    * @component ComponentName
    * @description Brief description
    * @props {Type} propName - Description
    * @emits {Type} event-name - Description
    */
   ```
2. Store Documentation:
   ```js
   /**
    * @store StoreName
    * @state {Type} stateName - Description
    * @action actionName - Description
    */
   ```
3. Function Documentation:
   ```js
   /**
    * @function functionName
    * @param {Type} paramName - Description
    * @returns {Type} Description
    * @throws {Error} Description
    */
   ```