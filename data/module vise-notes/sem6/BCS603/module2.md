# BCS603 — Full Stack Web Development

## Module 2: React.js & Single Page Applications (SPA)

### Single Page Applications (SPA)

- An **SPA** is a web application that loads a single HTML page and dynamically updates content without full page reloads.
- Navigation and data updates happen in the browser via JavaScript; the server sends only data (JSON), not new HTML pages.
- Benefits: fast navigation, smooth user experience, reduced server load, decoupled frontend/backend.
- Drawbacks: slower initial load (big JS bundle), SEO challenges (mitigated by server-side rendering), harder accessibility.
- **MPA (Multi Page Application)** vs SPA: MPA reloads a full page per navigation (server-rendered), SPA swaps views client-side.

### React Overview

- **React** is a declarative, component-based JavaScript library (not a framework) for building user interfaces, developed by Meta (Facebook, 2013).
- Core concepts: components, JSX, props, state, Virtual DOM, unidirectional data flow, and the component lifecycle.
- Key advantages: reusable components, efficient updates via the Virtual DOM, huge ecosystem, strong community, React Native for mobile.
- React is the **V (View)** in MVC — it handles rendering only; state management is handled by hooks, Context, or external libraries (Redux, Zustand).

### Component-Driven Architecture

- A **component** is a reusable, self-contained piece of UI (function or class) that renders output and optionally manages its own state.
- Components compose: larger components are built from smaller ones (component tree).
- Component types:
  - **Functional components**: plain JavaScript functions returning JSX; the modern default, support hooks.
  - **Class components**: ES6 classes extending `React.Component`, with `render()` and lifecycle methods (`componentDidMount`, etc.); legacy, only needed for old codebases.
- Naming convention: components start with an uppercase letter (so JSX treats them as components, not HTML tags).
- Props flow **down** the tree (parent → child); events flow **up** via callback props (child → parent) — this is unidirectional data flow.

```
[DIAGRAM: React component tree and data flow
          App
         / | \
      Header Nav Hero
             |     \
          ProductList  Sidebar
           /   |   \
      Product Product Product
  Props flow DOWN (data), events flow UP (callbacks)
]
```

### JSX Syntax

- **JSX** (JavaScript XML) is a syntax extension that lets you write HTML-like markup inside JavaScript; it is compiled (transpiled) to `React.createElement()` calls.
- Rules: every JSX expression must have one root element (or fragment `<>...</>`), attributes use camelCase (`className` not `class`, `htmlFor` not `for`), self-closing tags required.
- JavaScript expressions embedded with curly braces: `<h1>{title}</h1>`, `{items.map(...)}`.
- JSX prevents injection attacks by escaping values by default (XSS protection).
- Conditional rendering: `{isLoggedIn && <p>Welcome</p>}`, ternary `{cond ? <A /> : <B />}`.

### Virtual DOM and Reconciliation

- The **Virtual DOM** is an in-memory JavaScript representation of the real DOM, kept by React.
- On state/prop change, React: (1) renders a new Virtual DOM tree, (2) **diffs** it against the previous Virtual DOM (diffing/reconciliation), (3) computes the minimal set of changes, (4) applies them to the real DOM in one batched update.
- Benefits: fewer expensive real-DOM mutations, predictable updates, cross-platform rendering.
- Keys: `key` props on list items help React identify which items changed/moved — always use stable unique keys (e.g., `item.id`), never array index when order can change.
- Reconciliation is O(n) with reasonable heuristics; the diff compares by type and key.

```
[DIAGRAM: Virtual DOM update flow
 State change --> New Virtual DOM --> Diff (old vs new) --> Patch real DOM (minimal updates)
]
```

### Functional vs Class Components

| Aspect | Functional Component | Class Component |
| :--- | :--- | :--- |
| Syntax | Function returning JSX | `class X extends React.Component` |
| State | `useState` hook | `this.state` + `this.setState()` |
| Side effects | `useEffect` hook | Lifecycle methods |
| `this` | Not used | Required, binding needed |
| Performance | Lighter, tree-shakeable | Slightly heavier |
| Status | Modern standard | Legacy |

### Props

- **Props** are read-only inputs passed from a parent component to a child.
- Passing: `<Product title="Laptop" price={49999} />`; receiving: `function Product(props)` or destructured `function Product({ title, price })`.
- Props can be primitives, objects, arrays, functions, or JSX (children).
- `props.children` gives access to content between opening/closing tags.
- Props are immutable — a component must never modify its own props.

### State and useState

- **State** is mutable data owned by a component; changing state re-renders the component.
- `const [count, setCount] = useState(0);` — returns current value and an updater function.
- Rules of hooks: hooks must be called at the **top level** of the component (not inside loops, conditions, or nested functions) and only from React functions.
- Updating: `setCount(count + 1)` or functional update `setCount(c => c + 1)` (safe when batching multiple updates).
- State is never mutated directly — always replace via the updater (e.g., `setItems([...items, newItem])`).
- Lazy initialization: `useState(() => expensiveComputation())`.
- **Lifting state up**: when two components need the same state, move it to their nearest common ancestor and pass down via props.

### useEffect

- `useEffect(callback, dependencies)` runs side effects after render: fetching data, timers, subscriptions, DOM manipulation, logging.
- Dependency array behavior:
  - No array: runs after every render.
  - `[]` empty: runs once after mount (like `componentDidMount`).
  - `[dep1, dep2]`: runs when any dependency changes (like `componentDidUpdate`).
- Cleanup function: returned function runs before the next effect and on unmount — used to clear timers, remove subscriptions, abort fetches.
- Effects never run during rendering — they run after paint (avoid blocking UI).

### Component Lifecycle (asked in 2023 PYQ)

- Class component phases: **Mounting** (constructor → render → componentDidMount), **Updating** (render → componentDidUpdate), **Unmounting** (componentWillUnmount).
- Hook mapping:
  - `componentDidMount` → `useEffect(fn, [])`
  - `componentDidUpdate` → `useEffect(fn, [deps])`
  - `componentWillUnmount` → cleanup inside `useEffect`
- The render phase must be pure; side effects belong in effects/lifecycle methods.

```
[DIAGRAM: React component lifecycle
 Mount: constructor --> render --> componentDidMount
 Update: new props/state --> re-render --> componentDidUpdate
 Unmount: componentWillUnmount (cleanup timers/listeners)
]
```

### React Router v6 (asked in 2024 PYQ)

- **React Router** enables client-side routing for SPAs — navigation without page reloads.
- Core components:
  - `<BrowserRouter>`: top-level router using the HTML5 History API (clean URLs).
  - `<Routes>`: container that matches the current URL against child `<Route>`s (replaces v5 `<Switch>`).
  - `<Route path="/products" element={<Products />} />`: declarative route definition; the element prop replaces the children prop from v5.
  - `<Link to="/about">`: renders an `<a>` with client-side navigation.
- Hooks:
  - `useNavigate()`: programmatic navigation — `const navigate = useNavigate(); navigate('/login');`
  - `useParams()`: reads dynamic URL parameters — `<Route path="/product/:id">` → `const { id } = useParams();`
  - `useLocation()`, `useSearchParams()`: URL and query-string access.
- **Dynamic parameters**: `path="product/:id"` captures the `:id` segment; accessed via `useParams()`.
- **Protected routes**: wrapper component that checks authentication and redirects with `<Navigate to="/login" replace />` if unauthorized.
- Nested routes with `<Outlet />` render child routes inside parent layouts.
- `*` wildcard path captures unmatched URLs (404 page).

### Form Handling in React

- **Controlled components**: form inputs bound to state — value from state, changes via `onChange` updating state. Single source of truth, enables validation and instant UI updates.
- **Uncontrolled components**: input value read from the DOM via refs (`useRef`) — less re-rendering, but no React-level tracking.
- Form submit: `<form onSubmit={handleSubmit}>` with `e.preventDefault()` to stop page reload.
- Validation: validate on change/submit, show error messages in state, disable submit until valid.

### Context API and useContext

- **Context API** provides global state shared across the component tree without prop drilling (passing props through many intermediate components).
- Steps: `const ThemeContext = createContext(default)` → provider `<ThemeContext.Provider value={theme}>` wraps the subtree → consumers read with `useContext(ThemeContext)`.
- Context changes re-render all consumers; use `useMemo` for the value to avoid unnecessary re-renders.
- **Prop drilling** is the problem of passing props through unrelated intermediate components — context eliminates it.
- Context vs props (2023 PYQ): props are explicit, fine for shallow trees; context is global, better for theme/auth/language data; context should not replace props for local component communication.

```
[DIAGRAM: Context API vs prop drilling
 Prop drilling:  App --> Header --> Nav --> Button  (data passed through every level)
 Context:        App[Provider]  ---(value flows directly)--> Button[useContext]
                   Header, Nav (unaffected, no props passed)
]
```

### Custom Hooks

- A **custom hook** is a JavaScript function whose name starts with `use` that calls other hooks — used to extract reusable stateful logic.
- Rules: must follow the Rules of Hooks; it returns whatever the caller needs (state, functions, objects).
- Example pattern (asked in 2024 PYQ — `useFetch`):

```
[DIAGRAM: useFetch(url) custom hook flow
 call useFetch(url) --> setLoading(true) --> fetch(url) --> resolve: setData, setLoading(false)
                                                         --> reject: setError, setLoading(false)
 return { data, loading, error }  (component consumes and renders)
]
```

- Example: `useFetch(url)` returns `{ data, loading, error }`, re-fetches when `url` changes (dependency array), with abort/cleanup support.
- Custom hooks make components smaller, testable, and logic reusable across components.

### Exam-Focused Summary

- Explain SPA concept, Virtual DOM and reconciliation steps.
- Compare functional vs class components and map lifecycle methods to hooks (2023 PYQ).
- Build a Todo App with `useState`/`useEffect` — add and delete functionality (2023 PYQ).
- Write a custom `useFetch(url)` hook with loading and error states (2024 PYQ).
- Explain React Router v6: `BrowserRouter`, `Routes`, `Route`, `useNavigate`, `useParams` (2024 PYQ).
- Explain Context API vs prop drilling with an example (2023 PYQ).
