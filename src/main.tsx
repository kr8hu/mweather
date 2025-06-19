import { createRoot } from 'react-dom/client';

//CSS
import './index.css';

//Components
import App from './components/App';

//Webpack CSS import
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

createRoot(document.getElementById('root')!).render(
  <App />,
)
