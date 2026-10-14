<script>
    function ToDoList() {
        let task = document.getElementById("name").value;
        document.getElementById("output").innerHTML += `<p>${task}</p>`;
        document.getElementById("name").value = "";
    }
</script>