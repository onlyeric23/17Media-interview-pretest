# Daily Drinks

Use mobile for the best experience.

## How to use it

### Add

Click the circular button on the right-bottom of the screen.  
If the button is not appeared, scoll the list view then the button will slide in.

### Update

Click edit icon on the right of an order.

### Delete

Click delete icon on the right of an order and the next to the edit icon.

## Third-party resources

1. typescript
2. node-sass
3. classnames
4. react-icons
5. react-test-renderer
6. Roboto

## Structure

### src/common

For common utilities or interfaces.

### src/components

For React components.

### src/components/Header

### src/components/Order

### src/components/OrderList

UI components.

### src/components/Modal

A modal component with default styles, a fade-in animation, and ESC detection.

### src/components/EditModal

A modal to create/edit orders.

### src/components/OrderContext

A ReactContext combines with useReducer.
For storing orders and passing its dispatcher.

## Testing

### src/index.test.tsx

Render App without crash.

### src/components/OrderContext/index.test.ts

Create/Update/Delete orders properly.

## Other features or tricks

### Slide-in Add button

To prevent the add button overlapping orders' icons, the button only shows when there are some empty space or the list is scrolling.  
Implements with the scroll event and react-hooks.

### Numeric input

An input only accept numbers with predefined precision.
Ease of use for some currencies. e.q. USD.

### Incorrect viewport's height on mobile browser

Viewport's height may taller than visible area for some mobile browsers.
This intentional behavior impacts the design.

#### references

1. https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
2. https://stackoverflow.com/a/37113430

#### code snippets

```css
/* src/styles.css */
.App {
  ...;
  height: calc(var(--vh, 1vh) * 100);
  ...;
}
```

```typescript
/* src/App.tsx */
const setCustomViewHeight = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};
setCustomViewHeight();
window.addEventListener("resize", () => {
  setCustomViewHeight();
});
```

### Avoid zooming when creating/editing orders on iOS

```html
<meta
  name="viewport"
  content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no"
/>
```

## Unhandled problems

### Numeric input

1. Current numeric input is unable to handle ".", "e", "-", "+" properly.
2. Some mobile devices may not pop-up the numeric keyboard.

### Order

1. Orders' id are generate randomly. Collisions may occur.
