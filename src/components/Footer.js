const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <p>Mord OS &copy; {currentYear}</p>
        </footer>
    )
}

export default Footer
