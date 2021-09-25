var search = {  

    "results" :[

        { "ID" : 1 , "Name" : "video-1" , "decription" : "any dicription here" , "likes" : 1 , "views" : 2} ,
        { "ID" : 2 , "Name" : "video-2" , "decription" : "any dicription here" , "likes" : 3 , "views" : 4} ,
        { "ID" : 3 , "Name" : "video-3" , "decription" : "any dicription here" , "likes" : 5 , "views" : 6}  
        
    ]
}

for (sl=0 ; sl < search.results.length ; sl++ )
{
    document.write("<tr>")

    document.write( "<td>" + search.results[sl].ID + "</td>" )
    document.write( "<td>" + search.results[sl].Name + "</td>" )
    document.write( "<td>" + search.results[sl].decription + "</td>" )
    document.write( "<td>" + search.results[sl].likes + "</td>" )
    document.write( "<td>" + search.results[sl].views + "</td>" )

    document.write("</tr>")
}