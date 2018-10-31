module.exports = {
    res : function(result) {
        let data = new Array();
        
        for (i = 0; i < result.length; i++) {
            let temp = {
                product_idx: "",
                name:"",
                price:"",
                img_url : []
            }
            temp.product_idx = result[i]._id;
            temp.name = result[i].name;
            temp.img_url = result[i].img_url[0];
            temp.price = result[i].price;
            
            data.push(temp);
        }
        return data;
    }   
}