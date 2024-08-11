import Link from 'next/link';

const HomePage = () => {
    return ( <div>
        <h1>Welcome to Home Page</h1>
        <Link href="/marketing">Marketing</Link>
    </div>)
}
 
export default HomePage;