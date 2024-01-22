export default function TabButton({children,isSelected,...props}){
    console.log("TabButton component executing");
    function handleClick(){
        console.log("inside click of tab button event");
    }

    return (
        <li><button className={isSelected ? 'active':''} {...props}>{children}</button></li>
    )
}