import SiteLayout from './SiteLayout';

const Callout = ({ children }) => (
    <div className="callout">{children}</div>
);

export default function App() {
    return (
        <SiteLayout menu={<p>Menu</p>}>
            <>
                <Callout>Callout</Callout>
                <h1>Contents</h1>
                <p>this is the main part of the example layout</p>
            </>
        </SiteLayout>
    );
}