class ItemCard {
    constructor(id, name, code, category, averageCost, lastCost, price) {
        this.id=id;
        this.name=name;
        this.code=code;
        this.category=category;
        this.averageCost=averageCost;
        this.lastCost=lastCost;
        this.price=price;
    }
}

item1 = new ItemCard(1,'resistor','res','primary componets',100,110,120);
console.table(item1);

const itemDiv = document.getElementById('item');
itemDiv.innerHTML = `<h1>اسم المادة: ${item1.name}</h1><br><h2>${item1.code}</h2>`;