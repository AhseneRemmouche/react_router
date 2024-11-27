import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Products from "./pages/Products";
import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from "react-router-dom";
import RouteLayout from "./layout/RouteLayout";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";
import ContactLayout from "./layout/ContactLayout";
import NotFound from "./components/NotFound";
import JobsLayout from "./layout/JobsLayout";
import Jobs, { jobsLoader } from "./pages/Jobs";

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<RouteLayout />}>
				<Route index element={<Home />} />
				<Route path="products" element={<Products />} />
				<Route path="about" element={<About />} />
				<Route path="contact" element={<ContactLayout />}>
					<Route path="info" element={<ContactInfo />} />
					<Route path="form" element={<ContactForm />} />
				</Route>
				<Route path="jobs" element={<JobsLayout />}>
					<Route index element={<Jobs />} loader={jobsLoader} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Route>
		)
	);

	return <RouterProvider router={router} />;
}

export default App;
