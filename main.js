window.addEventListener('load', () => {
    const form= document.querySelector("#new-task-form");
    const input= document.querySelector("#new-task-input");
    const list_el= document.querySelector("#tasks");
    const finalTask = localStorage.getItem('finalTask');
     
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const task = input.value;
       
        if(!task){
            alert("Please fill out the task");
            return;
        }
       
        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");
        

        task_el.appendChild(task_content_el);

        const task_input_element = document.createElement("input");
        task_input_element.classList.add("text");
        task_input_element.type="text";
        task_input_element.value= task;
        task_input_element.setAttribute("readonly", "readonly");

        task_content_el.appendChild(task_input_element);

        const task_actions_element= document.createElement("div");
        task_actions_element.classList.add("actions");

        const task_edit_element = document.createElement("button");
        task_edit_element.classList.add("edit");
        task_edit_element.innerHTML = "Edit";

        const task_delete_element = document.createElement("button");
        task_delete_element.classList.add("delete");
        task_delete_element.innerHTML = "Delete";

        task_actions_element.appendChild(task_edit_element);
        task_actions_element.appendChild(task_delete_element);

        task_el.appendChild(task_actions_element);

        list_el.appendChild(task_el);

        input.value= "";

        task_edit_element.addEventListener('click', () => {
            if(task_edit_element.innerText.toLowerCase() == "edit") {
                task_input_element.removeAttribute("readonly");
                task_input_element.focus();
                task_edit_element.innerText= "Save";
            } else {
                task_input_element.setAttribute("readonly", "readonly");
                task_edit_element.innerText = "Edit";
            }
        });

        task_delete_element.addEventListener('click', () => {
            list_el.removeChild(task_el);
        });
    });

});