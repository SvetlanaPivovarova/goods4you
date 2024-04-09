import { Link } from 'react-router-dom';

function NotFoundPage() {
    return (
        <div className="not-found">
            <h3 className="not-found__title">404</h3>
            <p className="not-found__text">
                Мы ничего не нашли
            </p>
            <Link className="not-found__link" to="/">Перейти на главную страницу</Link>
        </div>
    );
}

export default NotFoundPage