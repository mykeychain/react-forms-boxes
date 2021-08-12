App
    App -> BoxList


BoxList
    props:
    state: 
        boxList: [{height, width, backgroundColor}, ...]
    BoxList -> newBoxForm
            -> Box

    functions: 
        onSubmit (renders new box from form data)
            update boxList state
        removeBox (removes box from boxList state and re-renders)
        



Box (presentational)
    props: 
        height
        width
        background color
        key (uuid?)
        removeBox (callback)


NewBoxForm
    props: 
        onSubmit (callback)
    state:
        {height, width, backgroundColor}