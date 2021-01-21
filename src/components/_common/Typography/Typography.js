export const Text = ({ size, color, weight, children }) => {
  const textStyle = `${size && `text-${size}`} ${color && `text-${color}`} ${
    weight && `font-${weight}`
  }`
  return <p className={textStyle}>{children}</p>
}
