const Events = () => {

    const handleMyEvent = () => {
        console.log("Ativou o evento")
    };

    const renderSomething = (x) => {
        if(x){
            return <h1>Renderizando isso!</h1>
        }
        else {
            return <h1>Renderizando esse outro</h1>
        }
        //Não é indicado colocar HTML em função dentro de React
    }

    return(
        <div>
            <div>
                <button onclick={handleMyEvent}>Click Aqui!</button>
                {/* Para a função ser executada somente no click, não devemos colocar hundleMyEvent(). Sem os parênteses a função só será executado ao clicar */}
            </div>
            <div>
                <button onclick={() => console.log("Clicou!")}>Click aqui também</button> {/* Função inline, não indicada. */}
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    );
};

export default Events;