$(document).ready(function() {
    const tarefas = []
    $("form").submit(function(e) {
        e.preventDefault()

        const nomeTarefa = $("#nome-tarefa").val()

        if(tarefas.includes(nomeTarefa.toLowerCase())){
            alert("Tarefa ja adicionada")
        }  else {
            tarefas.push(nomeTarefa.toLowerCase())
            const novoItem = $(`<li style='display: none'>${nomeTarefa}</li>`)
            $(novoItem).appendTo("ul")
            $(novoItem).slideDown()
        }

        $("#nome-tarefa").val("")
    })
})