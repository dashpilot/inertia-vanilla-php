<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <title>Inertia.js Vanilla PHP Demo</title>
    
    <?php if (true): /* Always use dev server during development */ ?>
        <script type="module" src="http://localhost:3000/@vite/client"></script>
        <script type="module" src="http://localhost:3000/resources/js/app.js"></script>
    <?php else: ?>
        <link rel="stylesheet" href="/assets/app.css">
        <script type="module" src="/assets/app.js"></script>
    <?php endif; ?>
</head>
<body>
    <div id="app" data-page='<?php echo $jsonPage; ?>'></div>
</body>
</html>