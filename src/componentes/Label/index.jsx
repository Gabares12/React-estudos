export function Label({ children, htmlFor }) {
  //function Label({props}){
  return (
    <label htmlFor={htmlFor}>
      {children}
    </label>
  )
}