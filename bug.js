```javascript
// pages/index.js

export default function Home() {
  return (
    <div>Hello</div>
  );
}
```
This code will cause a runtime error in Next.js 13 because it uses a functional component without specifying `React.StrictMode`.

To fix this, wrap your component in `React.StrictMode`:

```javascript
// pages/index.js

export default function Home() {
  return (
    <React.StrictMode>
      <div>Hello</div>
    </React.StrictMode>
  );
}
```