# Branding

`Recime` makes it really simple to brand and distrbute slack apps.

It is possible to customize the look and feel of OAuth dialog to match your product. By default it shows the recime branded dialog. In order to override, include a `dialog.html` in your bot project. This is a single page dialog and it is possible to change the look and feel using header or inline css+js or via CDN.

Use the following as a baseline template with bot specific metadata to brand your own:

```
<html>
    <h1>{{title}}</h1>
    <div>
        <img src="{{icon}}" alt="icon"/>
        <div class="team">
            <h3>{{team.name}}</h3>
            <p>{{team.id}}</p>
        </div>
    </div>
</html>


```







