import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Menu, MenuItem, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


const navLinks = ['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'];

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 bg-white shadow-md px-6 py-4 flex items-center justify-between"
    >
      <div className="text-xl font-bold text-blue-600">Diyaeddin</div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <IconButton onClick={handleMenuOpen}>
          <MenuIcon />
        </IconButton>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          {navLinks.map((link) => (
            <MenuItem key={link} onClick={handleMenuClose}>
              <a href={`#${link.toLowerCase()}`}>{link}</a>
            </MenuItem>
          ))}
        </Menu>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8">
        {navLinks.map((link) => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`} className="text-gray-700 hover:text-blue-600 transition">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;




