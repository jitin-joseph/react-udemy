export default function TabButton({children,onSelect,isSelected}){
    console.log("TabButton component executing");
    function handleClick(){
        console.log("inside click of tab button event");
    }

    return (
        <li><button className={isSelected ? 'active':''} onClick={onSelect}>{children}</button></li>
    )
}