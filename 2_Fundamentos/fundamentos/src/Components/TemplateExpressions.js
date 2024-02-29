const TemplateExpressions = () => {
    const name = "Hugo"
    const data = {
        age: 31,
        job: "Programador"
    }

    return(
        <div>
            <h1>Olá {name}, Tudo bem?</h1>
            <p>idade: {data.age}, Função: {data.job}</p>
            <p>{console.log("JSX React")}</p>  {/* toda função javaScript deve estar entre colchetes */}
        </div>
    );
};

export default TemplateExpressions;