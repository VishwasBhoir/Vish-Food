const heading = React.createElement(
  "h1",
  { className: "heading", id: "heading" },
  "Hello from React.!"
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
