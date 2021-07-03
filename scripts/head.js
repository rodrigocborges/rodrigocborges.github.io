const [head] = document.getElementsByTagName('head');

const inner = head.innerHTML;

head.innerHTML = `
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <link rel="shortcut icon" href="/public/favicon.svg" type="image/x-icon">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fjalla+One&family=Khand:wght@400;500;700&display=swap" rel="stylesheet">

  <link rel="stylesheet" media="screen and (min-width: 769px)" href="../styles/nav/main.css">
  <link rel="stylesheet" media="screen and (max-width: 768px)" href="../styles/nav/smallnav.css">
  <link rel="stylesheet" href="../styles/footer/main.css">

  <title>Me Indica Aí</title>
  
  ${inner}
`;