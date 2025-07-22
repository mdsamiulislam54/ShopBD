"use client";

const Container = ({children,className}) => {
  return (
    <div className=' max-w-[1200px] mx-auto ' style={{className}}>
        {children}
    </div>
  )
}

export default Container