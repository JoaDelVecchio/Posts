const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-4 text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Post Manager. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
