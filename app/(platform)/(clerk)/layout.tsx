const clerkLayout = ({
    children
} : {
    children: React.ReactNode
}) => {
    return(
        <div className="flex justify-center items-center h-full bg-neutral-950">
            {children}
        </div>
    )
}

export default clerkLayout;