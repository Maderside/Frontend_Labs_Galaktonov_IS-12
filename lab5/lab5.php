<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lab5</title>
</head>
<body>
    <form action='lab5.php' method="post">
        1. ПІБ:<br>
        <input type="text" name="PIB" value="">
        <br>

        2. Дата народження:<br>
        <input type="text" name="brthDate" value="">
        <br>

        3. Адреса:<br>
        <input type="text" name="city" value="">
        <br>

        4. E-Mail<br>
        <input type="text" name="email" value="">
        <br> 

        5. Телеграм<br>
        <input type="text" name="telegram" value="">
        <br>

        <br>
        <input type="hidden" name="hidden" value="ok">
        <input type="submit" value="отправить" name="Submit" onClick="return Formdata(this.form)">
    </form>

</body>
</html>
<script src="script.js" defer></script>