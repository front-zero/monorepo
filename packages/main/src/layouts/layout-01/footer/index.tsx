const Footer = () => {
    return (
        <footer className="bg-gray-100 border-t border-t-ghost mt-[1.875rem] py-[0.938rem] lg:p-0 lg:mt-[3.125rem]">
            <div className="container md:h-[3.75rem] md:flex md:items-center md:justify-between md:text-left text-sm text-center">
                <p className="mb-0">
                    Copyright {new Date().getFullYear()} &copy; All Rights
                    Reserved. Stor Dashboard Template
                </p>
                <p className="mt-1 mb-0">
                    Designed by:{" "}
                    <a
                        href="https://themeforest.net/user/bootxperts/portfolio"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        BootXperts
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
