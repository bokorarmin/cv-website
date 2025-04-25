import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {initI18n} from "./i18n/i18n.ts";
import {RouterProvider} from 'react-router-dom';

initI18n();

Promise.all([Promise.resolve()]).then(() => {

    createRoot(document.getElementById('root')!).render(
        <StrictMode>
            <RouterProvider router={router} />
        </StrictMode>
    );
});

