<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<link rel="icon" href="./sarah_spinning_sun.png">
	<title>{{ .Page.Title }} | {{ .Site.Title }}</title>
	{{ with .Site.Params.meta.description }}<meta name="description" content="{{ . }}">{{ end }}
	{{ with .Site.Params.meta.keywords }}<meta name="keywords" content="{{ . }}">{{ end }}
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp"
	 crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css?family=Righteous%7CMerriweather:300,300i,400,400i,700,700i" rel="stylesheet">
	<link href="{{ "/css/medium.css" | urlize | relURL }}" rel="stylesheet">
	<link href="{{ "/css/additional.css" | urlize | relURL }}" rel="stylesheet">
</head>

<nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top mediumnavigation nav-down">
    <div class="container pr-0">
        <!-- Begin Logo -->
        <a class="navbar-brand" href="{{ .Site.BaseURL }}/">
            <img src="/sarah_spinning_sun.gif" alt="logo" />
            <span >{{ .Site.Title }}</span>
        </a>
        <!-- End Logo -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMediumish" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <!-- Begin Menu -->
        <div class="collapse navbar-collapse" id="navbarMediumish">
            {{ $currentPage := . }}
            <ul class="navbar-nav ml-auto">
                {{ range .Site.Menus.main }} 
                <li class="nav-item {{ if $currentPage.HasMenuCurrent "main" . }}active{{ end }}">
                    <a class="nav-link" href="{{ .URL }}">{{ .Name | title }}</a>
                </li>
                {{ end }}
            </ul>
        </div>
        <!-- End Menu -->
    </div>
</nav>

<div class="main-content" style="max-width: 800px; margin: 0 auto; margin-top: 100px">
    <header class="text-center">
        {{ with .Site.Params.index.picture }}
            <img src="{{ . | urlize | relURL }}" class="rounded-circle text-center index-image">
        {{ end }}
        <h1 class="index-title">{{ .Site.Params.index.title }}</h1>
    </header>
    <div class="main-content">
        <section class="recent-posts">            
            <div class="section-title">                
                <h3>About</h3>
                <p> This site provides information on how to build your own DIY solar energy + storage kit. If you have a kit you'd like to get featured on the site, please send it in to <a href="mailto:hello@sunboxlabs.com">hello@sunboxlabs.com</a></p>
                <p> The site originally started on a Hackernoon post (see below). The site's goal is to make installing solar as easy and commonplace as installing a satellite dish or a window AC unit.</p>
                <div style="margin: 0 auto; display: flex; flex-wrap: wrap; justify-content: space-around;">
                    <img src="/img/DISHES.jpg" style="max-width: 400px; padding: 10px"> <img src="/img/AC.jpg" style="max-width: 400px; padding: 10px">
                </div>
                <hr>
                <p> I'm Niko, and I usually write <a href="https://nikodunk.github.io" target="_blank">here</a>. Email, Github, Linkedin and other projects are on that personal site. I work on a project called <a href="https://www.electrade.app" taget="_blank">Electrade.app</a> which helps Tesla and EV owners find affordable insurance.</p>
                <hr>
            </div>            
        </section>
    </div>    
</div>