
var search = {

    "results" :[

        { "Name" : "device-1" , "Type" : "device.1.type" , "Color" : "device.1.color" , "Description" : "any discription here" , "Price" : "device-1-Price" , "Photo" : "download.jpg"},
        { "Name" : "device-2" , "Type" : "device.2.type" , "Color" : "device.2.color" , "Description" : "any discription here" , "Price" : "device-2-Price" , "Photo" : "download.jpg" },
        { "Name" : "device-3" , "Type" : "device.3.type" , "Color" : "device.3.color" , "Description" : "any discription here" , "Price" : "device-3-Price" , "Photo" : "download.jpg" },
        { "Name" : "device-4" , "Type" : "device.4.type" , "Color" : "device.4.color" , "Description" : "any discription here" , "Price" : "device-4-Price" , "Photo" : "download.jpg" },
        { "Name" : "device-5" , "Type" : "device.5.type" , "Color" : "device.5.color" , "Description" : "any discription here" , "Price" : "device-5-Price" , "Photo" : "download.jpg" },
        { "Name" : "device-6" , "Type" : "device.6.type" , "Color" : "device.6.color" , "Description" : "any discription here" , "Price" : "device-6-Price" , "Photo" : "download.jpg" },
        { "Name" : "device-7" , "Type" : "device.7.type" , "Color" : "device.7.color" , "Description" : "any discription here" , "Price" : "device-7-Price" , "Photo" : "download.jpg" },
        { "Name" : "device-8" , "Type" : "device.8.type" , "Color" : "device.8.color" , "Description" : "any discription here" , "Price" : "device-8-Price" , "Photo" : "download.jpg" },
        { "Name" : "device-9" , "Type" : "device.9.type" , "Color" : "device.9.color" , "Description" : "any discription here" , "Price" : "device-9-Price" , "Photo" : "download.jpg" },
        { "Name" : "device-10" , "Type" : "device.10.type" , "Color" : "device.10.color" , "Description" : "any discription here" , "Price" : "device-10-Price" , "Photo" : "download.jpg" },
        { "Name" : "device-11" , "Type" : "device.11.type" , "Color" : "device.11.color" , "Description" : "any discription here" , "Price" : "device-11-Price" , "Photo" : "download.jpg" },
        { "Name" : "device-12" , "Type" : "device.12.type" , "Color" : "device.12.color" , "Description" : "any discription here" , "Price" : "device-12-Price" , "Photo" : "download.jpg" },
        { "Name" : "device-13" , "Type" : "device.13.type" , "Color" : "device.13.color" , "Description" : "any discription here" , "Price" : "device-13-Price" , "Photo" : "download.jpg" },
        { "Name" : "device-14" , "Type" : "device.14.type" , "Color" : "device.14.color" , "Description" : "any discription here" , "Price" : "device-14-Price" , "Photo" : "download.jpg" },
        { "Name" : "device-15" , "Type" : "device.15.type" , "Color" : "device.15.color" , "Description" : "any discription here" , "Price" : "device-15-Price" , "Photo" : "download.jpg" }
    ]

}



for( i=0 ; i<=search.results.length ; i++ )
{
    document.write("<div class='col card-space'>")
    document.write("<div class='card shadow-sm'>")
    document.write("<img class='bd-placeholder-img card-img-top img-height photo-space' src='" + search.results[i].Photo + "' alt='Device-1'>")

    document.write("<div class='card-body'>")
    document.write("<h5>" + search.results[i].Name + "</h5>")
    document.write("<h6>" + search.results[i].Type + " - " + search.results[i].Color + "</h6>")
    document.write("<p class='card-text'>" + search.results[i].Description + ".</p>")
    document.write("<div class='d-flex justify-content-between align-items-center'>")
    document.write("<h6>" + search.results[i].Price + "</h6>")
    document.write("<small class='text-muted'>9 mins</small>")
    document.write("</div>")
    document.write("<input type='button' value='Add to cart' class=''>")
    document.write("</div>")
    document.write("</div>")
    document.write("</div>")
}

