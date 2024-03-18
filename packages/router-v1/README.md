# Notes

- **Basics**

  - Create an simple app where on landing to the app there should be two links called `Home` and `Books`
  - By default the app should display the Homepage of the application on click of the links the display should toggle based on the link clicked.

- **Differnet types of router**

  - Hash Router
  - History Router
  - Memory Router
  - Static Router
  - Native Router

- **Dynamic Routes**

  - Building on top of the basics, in the Books page there should be a list of books and on click of the book it should display the details of the book.
  - The Book id will be passed a path param on click of the link in Books List page.

- **Route Specifity**
- **404 Page**
- **Nested Routes**
  - Same Layout and related path's
    - For example when click on **Books** link it should navigate to the a page where it should display a page where on the left side it should display the list of books and on the right side it should display the details of the book.
  - Same Layout but different path
  - `useOutletContext`
  - We can have multiple `Routes`
  - If we have a `Route` which renders a component which inturn returns `Routes` then the `Route` should have a path with `*` to handle the nested routes.
    - Example `<Route path="/books/*" element={<BookLayout />}>`
  - `useRoutes` hook
- **Navigation using `<Link/>` component**
  - `<Link to="/" replace />`
  - `<Link to="/" reloadDocument />`
  - `<Link to="/" state={{name:"Doe"}}/>`
- **Navigation using `<NavLink/>` component**

  - `<NavLink to="/" className />`
  - `<NavLink to="/" style />`
  - `<NavLink to="/" childern />`
  - Each of the above props take a callback function and will receive the `isActive` as a parameter.
  - Another way to send text dynamically

    ```
    <NavLink to="/books" end>
      {({ isActive }) => (
        <span style={{ color: isActive ? 'green' : 'black' }}>Books</span>
      )}
    </NavLink>

    OR

    <NavLink to="/books" style={(isActive)=>{
      return { color: isActive ? 'green' : 'black' }
    }}>

      {({ isActive }) => (
        isActive ? 'Books' : 'Not Books'
      )}

    </NavLink>
    ```

  - Also <NavLink/> has a prop called `end` which will make the link active only if the path is exactly matched.
  - Also <NavLink/> will apply the class `active` if the link is active. Which can be styled again in CSS.

- `<Navigate/>` component
- `useNavigate` hook to navigate using a function to navigate programmatically.
  ```
  const navigate = useNavigate();
  navigate('/books',{
    to: '/books',
    replace: true,
    state: {name: "Doe"}
  });
  navigate(-1); // Go back
  ```
