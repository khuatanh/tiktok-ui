import { Fragment } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { publicRoute } from '~/routes';
import DefaultLayout from '~/layouts';

function App() {
    return (
        <HashRouter>
            <div className="App">
                <Routes>
                    {publicRoute.map((route, index) => {
                        const Page = route.component;
                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        return <Route key={index} path={route.path} element={<Layout>{<Page />}</Layout>} />;
                    })}
                </Routes>
            </div>
        </HashRouter>
    );
}

export default App;
