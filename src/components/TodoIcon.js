import {ReactComponent as CheckSVG} from '../images/check.svg';
import { ReactComponent as DeleteSVG } from '../images/delete.svg';

const iconTypes = {
    "check": (color) => <CheckSVG className="Icon-svg" fill={color} />,
    "delete": (color) => <DeleteSVG className="Icon-svg" fill={color} />
};

function TodoIcon({ type, color, onClick }) {
    return (
        <span className={`icon-container icon-container-${type}`}
            onClick={onClick}    
        >
            {iconTypes[type](color)}
        </span>

    );
}

export { TodoIcon };