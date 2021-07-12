
    let data = [];

    function tarefas() {
    document.querySelector('.todo').innerHTML = '';  
    data.forEach(e=>{

    let li = document.createElement('li');

    li.innerHTML = `
    <input type="checkbox" id="task-${e.id}"><label for="task-${e.id}">${e.title}</label>
    <button type="button">Excluir</button>
    `;

    li.querySelector('input').addEventListener('change', e =>{

        if (e.target.checked){
            li.classList.add('complete');
        }else{
            li.classList.remove('complete');
        }
    });
    
    li.querySelector('button').addEventListener('click', e => {

        let todoId = (e.target.parentNode.querySelector('input').id.split('-')[1]);
        let todoName = (e.target.parentNode.querySelector('label').innerText);

        if(confirm(`Deseja Excluir a tarefa "${todoName}"?`)){
            data = data.filter(task => task.id !== parseInt(todoId));
            tarefas();
        }
        

    });
    document.querySelector('.todo').appendChild(li);
});

}

    document.querySelector('#new-task').addEventListener('keyup', e => {
        
    if(e.key === 'Enter') {

        data.push({
            id: data.length+1,
            title: e.target.value
        });

        e.target.value = '';

        tarefas();

    }
});

tarefas();