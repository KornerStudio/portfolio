import "./Header.styles.css";
import Avatar from '../Avatar';
import { useRef } from 'react';

const Header= () => {
    const developerRef = useRef();
    const designerRef = useRef();

    const animateDeveloper = (expand) => {
        if (expand) {
            developerRef.current.style.clipPath = 'polygon(0 0, 90% 0, 70% 100%, 0 100%)';
            designerRef.current.style.clipPath = 'polygon(90% 0, 100% 0, 100% 100%, 70% 100%)';
        } else {
            developerRef.current.style.clipPath = 'polygon(0 0, 60% 0, 40% 100%, 0 100%)';
            designerRef.current.style.clipPath = 'polygon(60% 0, 100% 0, 100% 100%, 40% 100%)';
        }
    }
    const animateDesigner = (expand) => {
        if (expand) {
            designerRef.current.style.clipPath = 'polygon(30% 0, 100% 0, 100% 100%, 10% 100%)';
        } else {
            designerRef.current.style.clipPath = 'polygon(60% 0, 100% 0, 100% 100%, 40% 100%)';
        }
    }

    return (
        <div className="hero">
            <div
                className="hero__layer hero__developer"
                ref={developerRef}
                onMouseEnter={() =>animateDeveloper(true)}
                onMouseLeave={() => animateDeveloper(false)}
            >
                <p>Developer</p>
            </div>
            <div
                className="hero__layer hero__designer"
                ref={designerRef}
                onMouseEnter={() => animateDesigner(true)}
                onMouseLeave={() => animateDesigner(false)}
            >
                <p>Designer</p>
            </div>
            <div className="hero__avatar">
                <Avatar/>
            </div>
            <div className="hero__greeting">
                <p>I’m a front-end...</p>
            </div>
        </div>
    );
};
export default Header;