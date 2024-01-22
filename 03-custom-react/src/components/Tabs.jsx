export default function Tabs({children,buttons,buttonsContainer}){
    const ButtonsContainer = buttonsContainer;//converting the string to a custom component, the new vaible should be captial letter
    return(
        <>
        <ButtonsContainer>
        {buttons}
        </ButtonsContainer>
        {children}
        </>
    )
}