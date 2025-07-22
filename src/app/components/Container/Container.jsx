"use client";

const Container = ({children,className}) => {
  return (
    <div className=' max-w-[1200px] mx-auto px-4 py-8' style={{className}}>
        {children}
    </div>
  )
}

export default Container