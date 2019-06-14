The shell / header, based on Carbon Design's examples

```js
import { BrowserRouter as Router } from 'react-router-dom';

<Router>
  <Header title='Demo App' navItems={[
    {
      to: '/things',
      label: 'Things'
    },
    {
      to: '/other-things',
      label: 'Other Things'
    }
  ]} />
</Router>
```
