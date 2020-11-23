function menu() {
    console.log('Running menu() from ./menuTab.js')
    
    let contentContainer = document.getElementById("content-container")

    const menus = {"signature cocktails":[
        ["Boulevardier", 14],
        ["Cosmopolitan", 12],
        ["Gin & Tonic", 12],
        ["Manhattan", 14],
        ["Martini", 12],
        ["Negroni", 14],
        ["Old Fashioned", 16],
        ["Sidecar", 14],   
        ["Vieux Carre", 16],
        ],

        "soups & salads":[
            ["House Soup", 8],
            ["Lobster Bisque", 9],
            ["Iceberg Lettuce Wedge", 9],
            ["Caesar Salad", 9],
            ["Steakhouse Salad", 20]
        ],

        "starters":[
            ["Wagyu Beef Carpaccio", 24],
            ["Seared Diver Scallops", 18],
            ["Jumbo Lump Crabcake", 22],
            ["Pork Belly", 15],
            ["Wagyu Slider Duo", 16]
        ],

        "sides":[
            ["Stuffed Baked Potatoe", 12],
            ["Creamed Spinach", 10],
            ["Mashed Potatoes", 9],
            ["Green Beans", 11],
            ["Charred Summer Squash", 14]
        ],

        "prime steaks":[
            ["8oz Filet Mignon", 51],
            ["14oz Bone-In Filet Mignon", 60],
            ["16oz New York Strip", 58],
            ["22oz Bone-In Ribeye", 66],
            ["22oz Dry-Aged Ribeye", 84],
            ["8oz Wisconsin Grass Fed Strip Loin", 59],
            ["5oz American Wagyu Strip Loin", 50],
            ["5oz Carrara 640 Wagyu Strip Loin", 75],
            ["5oz Japanese A5 Wagyu Strip Loin", 100],
            ["Beef Wellington", 105]
        ],

        "large steaks":[
            ["32oz Tomahawk Ribeye", 129],
            ["48oz Porterhouse", 135]
        ],

        "sauce":[
            ["Au Poivre", 4],
            ["Roquefort", 4],
            ["Bearnaise", 4],
            ["House Steak Sauce", 4],
            ["Horseradish Crème Fraîche", 4]
        ],

        "dessert":[
            ["Vanilla Bean Creme Brulee", 8],
            ["Gooey Toffee Pudding Cake", 9],
            ["Lemon New York Cheesecake", 9],
            ["Peanut Butter Banana Cream Pie", 9],
            ["Chocolate Caramel Cream Puff", 10],
            ["Assorted Ice Creams & Sorbet", 5]
        ]
    };

    console.log(menus)
    
    let menuContent = document.createElement('div');
    menuContent.id = "menu-content";

    contentContainer.appendChild(menuContent);
    let col1 = document.createElement('div');
    let col2 = document.createElement('div');
    menuContent.appendChild(col1);
    menuContent.appendChild(col2);
    col1.id = "col-one";
    col2.id = "col-two";
    col1.className = "col";
    col2.className = "col";

    let count = 0;
    for (let i in menus){
        let newSect = document.createElement('div');
        newSect.className = "submenu";

        let newTitle = document.createElement('div');
        newTitle.className = "submenu-title";
        newTitle.textContent = i.toUpperCase();

        let newTable = document.createElement('table');
        newTable.className = "table";

        menus[i].forEach(x => {
            let row = document.createElement("table-row")
            let item = x[0];
            let price = x[1];
            let rowItems = [item,price]
            row.className = "row";
            rowItems.forEach(y =>{
                let column = document.createElement("table-column")
                column.textContent = y;
                if (typeof(y) == "number"){
                    column.classList.add("price")
                } else{
                    column.classList.add("item")
                }
                row.appendChild(column);
            })
            newTable.appendChild(row);
        })
        
        newSect.appendChild(newTitle);
        newSect.appendChild(newTable);

        if (count < 4){
            col1.appendChild(newSect)
        }else{
            col2.appendChild(newSect)
        };

        count++;

    }

}

export{menu}