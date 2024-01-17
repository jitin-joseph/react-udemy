export default function TabButton({children,onSelect}){
    console.log("TabButton component executing");
    function handleClick(){
        console.log("inside click of tab button event");
    }

    return (
        <li><button onClick={onSelect}>{children}</button></li>
    )
}