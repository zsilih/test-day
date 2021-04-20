const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <p>Test Day &copy; {currentYear}</p>
        </footer>
    )
}

export default Footer
