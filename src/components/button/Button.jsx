const Button= ({ variant="primary", children, ...rest }) => {
  return(
    <button
      {...rest}
      type="button"
      className={`btn btn-${variant}`}
    >
      {children}
    </button>
  )
};

export default Button;
