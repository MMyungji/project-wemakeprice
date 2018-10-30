module.exports = {
    res : function(result) {
        let data = new Array();
        
        for (i = 0; i < result.length; i++) {
            let temp = {
                cart_idx: "",
            }
            temp.cart_idx = result[i]._id;
        }
        return data;
    }   
}