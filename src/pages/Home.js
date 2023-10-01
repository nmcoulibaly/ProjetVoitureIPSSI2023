import MarquesList from "./marques/MarquesList";

const Home = () => {
    return (
        <>
            <marquee direction="right"><h1> Les meilleures marques de voitures👍</h1></marquee >
            <MarquesList />
        </>
    );
}
export default Home;