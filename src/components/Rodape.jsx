import "./Rodape.css";

export default function Rodape() {
    return (
        <footer>
            <div id="footer_content">
                <div id="footer_offers">
                    <h3 className="footer-title">Ofertas Especiais</h3>
                    <ul className="footer-list">
                        <li>
                            <a href="#" className="footer-link">Promoção 1</a>
                        </li>
                        <li>
                            <a href="#" className="footer-link">Promoção 2</a>
                        </li>
                        <li>
                            <a href="#" className="footer-link">Promoção 3</a>
                        </li>
                        <li>
                            <a href="#" className="footer-link">Promoção 4</a>
                        </li>
                        <li>
                            <a href="#" className="footer-link">Promoção 5</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div id="footer_copyright">
                &copy; 2024 Digital Store
            </div>
        </footer>
    );
}
