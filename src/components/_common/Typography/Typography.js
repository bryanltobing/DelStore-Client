export const Text = ({ size, color, weight, children }) => {
  const textStyle = `${size && size} ${color && color} ${weight && weight}
  }`
  return <p className={textStyle}>{children}</p>
}
