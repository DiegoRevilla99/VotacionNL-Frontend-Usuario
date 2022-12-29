import { AppRouter } from "./router/AppRouter";
import "./styles/generalContainer.css";
import { AppTheme } from "./theme/AppTheme";

function App() {
	return (
		<AppTheme>
			<AppRouter />
		</AppTheme>
	);
}

export default App;
