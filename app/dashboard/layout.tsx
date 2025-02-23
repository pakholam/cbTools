export default function DashboardLayout({children}:{
    children: React.ReactNode
}){
    return (
        <section>
            {/** Include shared UI here e.g. a header or sider*/}
            <nav></nav>
            {children}
        </section>
    )
}