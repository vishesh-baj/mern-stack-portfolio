import PropTypes from "prop-types";
const SectionLayout = ({ children, sectionTitle }) => {
  return (
    <div className="p-6 w-[96%] mx-auto bg-base-300 rounded-xl">
      <h1 className="text-2xl">{sectionTitle}</h1>
      {children}
    </div>
  );
};

export default SectionLayout;

SectionLayout.propTypes = {
  children: PropTypes.node.isRequired,
  sectionTitle: PropTypes.string.isRequired,
};
