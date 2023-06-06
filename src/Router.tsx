import { BrowserRouter, Route, Switch } from "react-router-dom";
import TodoList from "./pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <TodoList />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
