# Modules / User / Release v0.1

Initial version of the user module. For now, it handles getting the logged in user, storing it in a context and providing it to the rest of the application.
The module also includes a `user-type` model which can be used to validate and play around with the user types.

What's really cool as of now is the `withUser` Higher Order Component (HOC). This HOC alone deprecates all previous authentication and authorization attempts. It's a simple HOC that provides the logged in user to the wrapped component, but it's powerful enough to handle all the authentication and authorization requirements of the application.

How does it do that? It's simple, the `withUser` HOC checks if;

- The user is logged in;
  - If not, it redirects the user to the login page.
  - if the user is logged in but doesn't match the required `user-type`, it takes them to the 403 page.
  - If we're all good, it provides the user to the wrapped component through the `UserContext`.

This is just the beginning, we can add more features to this HOC in the future.

## Usage

```jsx
import { withUser, useUserContext } from 'modules/user';

function MyComponent() {
  const { user } = useUserContext()

  return (
    <div>
      <h1>Welcome {user.full_name}</h1>
    </div>
  )
}

export default withUser(MyComponent);

// Can even specify the user type and then a 403 will be thrown if the types don't match

import { userTypeBrand } from 'modules/user';

export default withUser(MyComponent, { userType: userTypeBrand });
```
