import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import React, { useRef } from "react";
import { HelmetProvider } from "react-helmet-async";
import "bootstrap/dist/css/bootstrap.min.css";
// import DataProvider from "./pages/BaiTap13/DataProvider";
import { Provider } from "react-redux";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { ToastProvider } from "./hooks/ToastProvider";
import LayoutCategory from './pages/BaiTap68/LayoutCategory';
// import { Toast } from 'primereact/toast';
// import Store from "./pages/BaiTap45/Store";
import ScrollToTop from "react-scroll-to-top";
import LoginForm from "./pages/BaiTap58/LoginForm";
import Store from "./pages/BaiTap58/Store";
// import AxiosReact from './pages/BaiTap52/AxiosReact';
import LayoutFrontend from "./components/LayoutFrontend";
import Search from "./pages/BaiTap64/Search";
import Navbar from "./pages/BaiTap65/Navbar";
// import StudentList from "./pages/BaiTap45/StudentList";
import ToastReact from "./pages/BaiTap46/ToastReact";
// import Calculate from "./pages/BaiTap47/Calculate";
// import { CalculateProvider } from "./hooks/CalculateProvider";
// import { SidebarProvider } from "./hooks/SidebarProvider";
// import SidebarEx from "./pages/BaiTap48/SidebarEx";
// import ToastReact from "./pages/BaiTap41/ToastReact";
// import InputForm from "./pages/BaiTap42/InputForm";
// import PageParent from "./pages/BaiTap43/PageParent";
// import PageParent2 from "./pages/BaiTap43/PageParent2";
// import SelectForm from "./pages/BaiTap38/SelectForm";
// import InputForm from "./pages/BaiTap39/InputForm";
// import StudentList from "./pages/BaiTap37/StudentList";
// import Image from "./pages/BaiTap31/Image";
// import LoadImage from "./pages/BaiTap30/LoadImage";
// import LoginPage from "./pages/BaiTap30/LoginPage";
// import LoadImage from "./pages/BaiTap27/LoadImage";
// import MultiLanguage from "./pages/BaiTap26/MultiLanguage";
// import LoginPage from "./pages/BaiTap25/LoginPage";
// import LoginPage from "./pages/BaiTap24/LoginPage";
// import LoginPage from "./pages/BaiTap23/LoginPage";
// import LoginPage from "./pages/BaiTap22/LoginPage";
// import LoginPage from "./pages/BaiTap19/LoginPage";
// import SignInPage from "./pages/BaiTap19/SignInPage";
import LayoutBackend from "./components/LayoutBackend";
import AxiosReact from "./pages/BaiTap61/AxiosReact";
import SupportForm from "./pages/BaiTap63/SupportForm";
import Component_Parent from "./pages/BaiTap10/Component_Parent";
// import Dashboard from "./pages/BaiTap19/Dashboard";
// import Profile from "./pages/BaiTap19/Profile";
// import NotFound from "./pages/BaiTap20/NotFound";
// import LoginPage from "./pages/BaiTap16/LoginPage";
// import Dashboard from "./pages/BaiTap16/Dashboard";
// import { DataProvider } from "./pages/BaiTap16/DataContext";
// import { DataProvider } from "./pages/BaiTap18/DataContext";
// import LoginPage from "./pages/BaiTap18/LoginPage";
// import Dashboard from "./pages/BaiTap18/Dashboard";
// import Store from "./pages/BaiTap17/Store";
// import LoginPage from "./pages/BaiTap17/LoginPage";
// import Dashboard from "./pages/BaiTap17/Dashboard";
// import LoginPage from "./pages/BaiTap3_4_5/LoginPage";
// import SignInPage from "./pages/BaiTap3_4_5/SignInPage";
// import UserList from "./pages/BaiTap3_4_5/UserList";
// import EditUser from "./pages/BaiTap3_4_5/EditUser";
// import StateProps from "./pages/BaiTap9/StateProps";
// import Parent from "./pages/BaiTap14/Parent";
// import Parent from "./pages/BaiTap13/Parent";
// import Parent from "./pages/BaiTap12.3/Parent";
// import Parent from "./pages/BaiTap12.2/Parent";
// import Parent from "./pages/BaiTap12/Parent";
// import Parent from "./pages/BaiTap11/Parent";
// import Component_Parent from "./pages/BaiTap10/Component_Parent";
// import LoginWithGG from './pages/BaiTap6/LoginWithGG';
// import LoadImage from './pages/BaiTap7/LoadImage';

function App() {
  const toast = useRef(null);

  return (
    <Provider store={Store}>
      <HelmetProvider>
        <Router>
          <ToastProvider>
            {/* <CalculateProvider> */}
            {/* <SidebarProvider> */}
            {/* <Toast ref={toast} /> */}
            <Routes>
              {/* Bài tập 3 4 5 8
            <Route path="/" element={<LoginPage />} />
            <Route path="/user-list" element={<UserList />} />
            <Route path="/user-edit/:id" element={<EditUser />} />
            <Route path="/signin" element={<SignInPage />} /> */}

              {/* Bài tập 6
            <Route path="/" element={<LoginWithGG />} /> */}

              {/* Bài tập 7
            <Route path="/" element={<LoadImage />} /> */}

              {/* <Route path="/" element={<Component_Parent />} /> */}

              {/* <Route path="/" element={<Component_Parent />} /> */}

              {/* <Route path="/" element={<Parent />} /> */}

              {/* <Route path="/" element={<LoginPage />} />
            <Route path="/Dashboard" element={<Dashboard />} /> */}

              {/* Bài tập 22
            LayoutFrontend routes
            <Route path="/" element={<LayoutFrontend />}>
              <Route index element={<LoginPage />} />
              <Route path="SignIn" element={<SignInPage />} />
            </Route>

            LayoutBackend routes
            <Route path="/Dashboard" element={<LayoutBackend />}>
              <Route index element={<Dashboard />} />
              <Route path="Profile" element={<Profile />} />
            </Route>

            <Route path="*" element={<NotFound />} /> */}

              {/* <Route path="/" element={<LayoutFrontend />}>
              <Route index element={<LoginPage />} />
            </Route> */}
              {/* <Route path="/" element={<MultiLanguage />} /> */}

              {/* <Route path="/" element={<Image />} /> */}

              {/* <Route path="/" element={<StudentList />} /> */}

              {/* <Route path="/" element={<SelectForm />} /> */}

              {/* <Route path="/" element={<InputForm />} /> */}

              {/* <Route path='/' element={<ToastReact toast={toast} />} /> */}

              {/* <Route path='/' element={<InputForm />} /> */}

              {/* <Route path="/" element={<LayoutFrontend />}>
              <Route index element={<PageParent />} />
              <Route path='pageParent2' element={<PageParent2 />} />
            </Route> */}

              {/* <Route path='/' element={<StudentList />} /> */}

              {/* <Route path='/' element={<StudentList />} /> */}

              {/* <Route path='/' element={<ToastReact />} /> */}

              {/* <Route path='/' element={<Calculate />} /> */}

              {/* <Route path="/" element={<SidebarEx />} /> */}

              {/* <Route path="/" element={<AxiosReact />} /> */}

              {/* <Route path="/" element={<LoginForm />} /> */}

              {/* <Route path="/" element={<LayoutFrontend />}>
                <Route index element={<LoginForm />} />
              </Route>

              <Route path="/AxiosReact" element={<LayoutBackend />}>
                <Route index element={<AxiosReact />} />
              </Route> */}

              {/* <Route path='/' element={<AxiosReact />} /> */}

              {/* <Route path='/' element={<SupportForm />} /> */}

              {/* <Route path='/' element={<Search />} /> */}

              {/* <Route path='/' element={<Navbar />} /> */}

              {/* <Route path='/' element={<Navbar />} /> */}

              <Route path='/' element={<LayoutCategory />} />

            </Routes>
            <ScrollToTop smooth />
          </ToastProvider>
          {/* </CalculateProvider> */}
          {/* </SidebarProvider> */}
        </Router>
      </HelmetProvider>
    </Provider>
  );
}

export default App;
