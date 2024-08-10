import '@/assets/styles/globals.css';
export const metadata = {
    title: 'Report Portal',
    keywords: 'reports, data, analytics',
    description: 'Portal for asset reports and data',
}

const MainLayout = ({ children }) => {
    return ( 
    <html>
        <body>
            <main>
                {children}
            </main>
        </body>

    </html>
    );
};
 
export default MainLayout ;