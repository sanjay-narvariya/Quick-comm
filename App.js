
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import AdminLogin from "./components/admin/adminlogin/AdminLogin";
import Dashboard from "./components/admin/adminlogin/Dashboard";
import HomePage from "./components/userinterface/homepage/HomePage";
import PageCategoryDisplay from "./components/userinterface/pagedisplay/PageCategoryDisplay";
import ProductDetailPage from "./components/userinterface/productdetailspage/ProductDetailPage";
import MyCart from "./components/userinterface/homepage/MyCart";
import SignIn from "./components/userinterface/signin/SignIn";
import OtpVerification from "./components/userinterface/signin/OtpVerification";
import AccountDetails from "./components/userinterface/signin/AccountDetails";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<AdminLogin/>} path="/adminlogin"></Route>
          <Route element={<Dashboard/>} path="/dashboard/*"></Route>
          <Route element={<HomePage/>} path="/homepage"></Route>
          <Route element={<PageCategoryDisplay/>} path="/pagecategorydisplay"></Route>
          <Route element={<ProductDetailPage/>} path="/productdetailpage"></Route>
          <Route element={<MyCart/>} path="/mycart"></Route>
          <Route element={<SignIn/>} path="/signin"></Route>
          <Route element={<OtpVerification/>} path="/otpverification"></Route>
          <Route element={<AccountDetails/>} path="/accountdetails"></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
