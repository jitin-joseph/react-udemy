export default function TabButton(props){
    function handleClick(){
        console.log("inside click of tab button event");
    }

    return (
        <li><button onClick={handleClick}>{props.children}</button></li>
    )
}