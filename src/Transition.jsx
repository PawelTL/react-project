import { animate, motion } from "framer-motion";

const transition = (OgComponent) => {
    return () => (
        <>
            <OgComponent />
            <motion.div className="slide-in" animate={{ scaleY: [1, 0] }} transition={{ duration: 1 }} />
            <motion.div className="slide-out" animate={{ scaleY: [1, 0] }} transition={{ duration: 1 }} />
        </>
    )
}

export default transition;