<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <title>NexSeed SkillCheck</title>
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/layouts.css">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <script type="text/javascript">
      window.Laravel = window.Laravel || {};
      window.Laravel.csrfToken = "{{csrf_token()}}";
    </script>
  </head>
  <body>
    <div id="app">
    </div>
    <script src="js/app.js"></script>
  </body>
</html>
