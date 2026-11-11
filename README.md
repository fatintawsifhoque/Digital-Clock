# ⏰ Digital Clock

Same project. Two frameworks. One goal: build a beautiful, functional digital clock and learn what each framework does best.

This repo contains two versions of the same clock app — one in **Vue 3** and one in **React** — so you can compare how the same features are implemented differently.

## 🎨 What Both Versions Do

- Display real-time hours, minutes, and seconds
- Toggle between 12-hour and 24-hour formats
- Show AM/PM indicator in 12-hour mode
- Beautiful glassmorphism UI with Tailwind CSS
- Clean up intervals properly to prevent memory leaks


## 🔥 Quick Comparison

| Feature | Vue 3 | React |
|---------|-------|-------|
| **State Management** | `ref()`, `reactive()` | `useState()` |
| **Side Effects** | `onMounted`, `onUnmounted` | `useEffect` with cleanup |
| **Conditional Rendering** | `v-if="condition"` | `{condition && <Component />}` |
| **Event Handling** | `@click="handler"` | `onClick={handler}` |
| **Reactivity** | Automatic | Manual (via state setters) |
| **Template Syntax** | HTML-like with directives | JSX (JavaScript XML) |

## 🧪 Which One Should You Use?

**Choose Vue if you:**
- Prefer cleaner, more readable templates
- Like automatic reactivity
- Want a gentler learning curve

**Choose React if you:**
- Love JavaScript and want full control
- Enjoy the flexibility of JSX
- Want access to a massive ecosystem

**My take:** Both are excellent. Vue felt more intuitive for this project, but React's explicit state management helped me understand reactivity at a deeper level.

## 🚀 Running the Projects

### Vue Version



### React Version

