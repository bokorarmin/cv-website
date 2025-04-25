import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {initI18n} from "./i18n/i18n.ts";
import {RouterProvider} from 'react-router-dom';
import {router} from "./app/router.tsx";

initI18n();

Promise.all([Promise.resolve()]).then(() => {

    createRoot(document.getElementById('root')!).render(
        <StrictMode>
            <RouterProvider router={router} />
        </StrictMode>
    );
});

