import { useNavigate } from "react-router-dom";
import './SignUp.css';
function RandomSpace() {
    const navigate = useNavigate();

    return (
        <button 
            className="RandomSpace"
            onClick={(e) => {
                navigate(`/newsletter}`)
            }}>Sign Up</button>
    )
}

export default RandomSpace;