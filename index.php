<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form id="form">
        <select name="crud" id="selectd">

            <option value="select">select</option>
            <option value="insert">insert</option>
            <option value="update">update</option>
            <option value="delete">delete</option>
            

        </select>
        <br>

        <label for="db">Data Base</label><br>
        <input type="text" name ="db" id="db"><br>

        <label for="p1" id="lp1">WHERE</label><br>
        <input type="text" name="p1" id="p1" ><br>

        <label for="p2" id="lp2">es igual a:</label><br>
        <input type="text" name="p2" id="p2"><br>

        <label for="aa" id="laa">columnas que desea seleccionar</label><br>
        <input type="text" name="aa" id="aa"><br><br>

        <input type="submit" id="btn" value="enviar">
    </form>

    <div id="resp">
        
    </div>


<script src="main.js"></script>
<script src="app.js"></script>
<style>
    .inv{
        visibility:hidden;
    }
</style>
</body>
</html>

