# MediQuiz Vue Code Organization Guidelines

## Project Structure Guidelines

### Store Management
1. **State Management Organization**
   - Each store should have a single, well-defined responsibility
   - Avoid duplicating state or logic between stores
   - Stores should be categorized as follows:
     - `auth`: Authentication and user management
     - `settings`: User preferences and application settings
     - `vocabulary`: Core vocabulary data and operations
     - `ui`: UI-related state (dark mode, modals, etc.)

2. **Store Interaction Guidelines**
   - Stores should communicate through actions/mutations
   - Avoid direct store-to-store dependencies
   - Use composable functions for complex cross-store operations

### Component Organization
1. **Component Hierarchy**
   - Components should follow single responsibility principle
   - Break down large components into smaller, reusable pieces
   - Use composition API for shared logic

2. **Component Categories**
   - `base/`: Base/atomic components (buttons, inputs, etc.)
   - `common/`: Reusable components used across multiple views
   - `layout/`: Layout components (header, footer, navigation)
   - `features/`: Feature-specific components
   - `views/`: Page components

3. **Component Best Practices**
   - Keep components focused and under 300 lines
   - Extract reusable logic into composables
   - Use props and events for component communication
   - Document component props and events

### Authentication and User Settings
1. **Authentication Flow**
   - Centralize auth logic in auth store
   - Separate UI components from auth business logic
   - Use guards for protected routes

2. **User Settings Management**
   - Persist user preferences in local storage
   - Sync with backend when user is authenticated
   - Implement fallback defaults for all settings

### Code Style and Conventions
1. **File Naming**
   - Use PascalCase for component files
   - Use camelCase for utility files
   - Use kebab-case for asset files

2. **Code Organization**
   - Group related code using feature folders
   - Keep consistent file structure within components
   - Use index files for cleaner imports

3. **TypeScript Guidelines**
   - Use proper type definitions
   - Avoid any type when possible
   - Document complex types

### Performance Considerations
1. **State Management**
   - Use computed properties for derived state
   - Implement proper caching strategies
   - Avoid unnecessary reactivity

2. **Component Optimization**
   - Lazy load routes and heavy components
   - Use v-show for frequently toggled elements
   - Implement proper key usage in v-for directives

### Testing Guidelines
1. **Test Organization**
   - Mirror source file structure in tests
   - Group tests by feature/functionality
   - Separate unit and integration tests

2. **Test Coverage**
   - Maintain minimum 80% coverage
   - Focus on business logic coverage
   - Test edge cases and error scenarios

## Implementation Roadmap

### Phase 1: Store Refactoring
1. Consolidate vocabulary and word stores
2. Implement UI state store
3. Refactor auth store

### Phase 2: Component Restructuring
1. Break down large components
2. Implement base components
3. Extract common functionality

### Phase 3: Feature Improvements
1. Enhance user settings management
2. Implement proper error handling
3. Add loading states

### Phase 4: Performance Optimization
1. Implement proper caching
2. Optimize component rendering
3. Add proper lazy loading

## Code Review Guidelines
1. Ensure changes follow project structure
2. Verify proper store usage
3. Check component organization
4. Validate performance considerations
5. Confirm proper error handling

## Documentation Requirements
1. Update component documentation
2. Document store changes
3. Maintain changelog
4. Update API documentation