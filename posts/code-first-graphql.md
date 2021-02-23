---
title: Code-first GraphQL Schemas
description: ...
date: 01-01-2021
---
* why code-first
* comparison of graphql-js/typegraphql/nexus

```javascript
export const getPostSlugs = () =>
  getPostFiles().map((name) => name.replace(/.md$/, ''));

export default () => {
  for (let i = 1; i < 5; i++) {
    console.log(i);
  }
}
```
