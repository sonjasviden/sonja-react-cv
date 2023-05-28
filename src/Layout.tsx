import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion } from "framer-motion";

const Layout = () => {
    return (
        <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, ease: 'easeOut' }}>
                <Navbar />
                <Outlet />
                <Footer />
            </motion.div>
        </>
    );
};

export default Layout;