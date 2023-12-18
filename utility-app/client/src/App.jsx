import { PrivateRoute } from "./routes/routes";
import { Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import { RoutesArray } from "./constants";
import { PATHS } from "./routes/paths";
import { HomePage, LoginPage, PageNotFound, RegisterPage } from "./pages";
import { Toaster } from "react-hot-toast";
const App = () => {
  const isAuthenticated = localStorage.getItem("token");
  return (
    <div>
      <Routes>
        <Route
          path={PATHS.login}
          element={
            isAuthenticated ? (
              <AppLayout>
                <HomePage />
              </AppLayout>
            ) : (
              <LoginPage />
            )
          }
        />
        <Route
          path={PATHS.signup}
          element={
            isAuthenticated ? (
              <AppLayout>
                <HomePage />
              </AppLayout>
            ) : (
              <RegisterPage />
            )
          }
        />
        {RoutesArray.map((route) => {
          return (
            <Route
              key={route.key}
              path={route.path}
              element={
                <PrivateRoute
                  element={
                    <AppLayout>
                      <route.Element />
                    </AppLayout>
                  }
                  redirectTo={PATHS.login}
                />
              }
            />
          );
        })}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
};

export default App;
