class Product{
     constructor(name,price,year){
          this.name = name;
          this.price = price;
          this.year = year;
     }
}


let UI = {
     addProduct: (product)=>{
          const productList = document.getElementById('product-list');
          const element = document.createElement('div');
          element.innerHTML = `
               <div class="card text-center mb-4">
                    <div class="card-body">
                         <strong>Product Name: </strong> ${product.name}
                         <strong>Product Price: </strong> ${product.price}
                         <strong>Product Year: </strong> ${product.year}
                         <a href="#" class="btn btn-danger" name="delete">Delete</a>
                    </div>
               </div>
               
          `;
          productList.appendChild(element);
          UI.clearForm();
          
     },
     deleteProduct : (element)=>{
          if(element.name === 'delete'){
               element.parentElement.parentElement.parentElement.remove();
               UI.showMessage('Product Delete Successfully','danger');
          }
     },

     clearForm: function(){
          document.getElementById('product-form').reset();
     },

     showMessage : (message,cssClass)=>{
          const divMensaje = document.createElement('div');
          divMensaje.className = `alert alert-${cssClass} mt-4 text-center`;
          divMensaje.appendChild(document.createTextNode(message));
          //Showin in DOM
          const container = document.querySelector('.container');
          const app = document.querySelector('#App');
          container.insertBefore(divMensaje,app);
          setTimeout(function(){
               divMensaje.remove();
          },3000)
     }
}

//DOM Events
document.getElementById('product-form').addEventListener('submit',function(e){
     let vProducto = document.getElementById('product').value;
     let vPrice = document.getElementById('price').value;
     let vYear = document.getElementById('year').value;
     let obj1 = new Product(vProducto,vPrice,vYear);
     
     if(vProducto === '' || vPrice === '' || vYear === ''){
          UI.showMessage('Complete Fields Please','danger');
     }else{
          UI.addProduct(obj1);
          UI.showMessage('Product add Successfully','info');
     }
     

     e.preventDefault();

})

document.getElementById('product-list').addEventListener('click',function(e){
     UI.deleteProduct(e.target);
     
})
