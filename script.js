// https://www.fruityvice.com/api/fruit/all

document.addEventListener("keypress",keypress)

function keypress(event){
    if(event.key=="Enter"){
        getFruitdata()
    }
       
}

function getFruitdata(){

    var fruitContainer=document.querySelector('.fruitContainer')
    
    var fruitName = document.querySelector('.fruitname').value
    console.log(fruitName)
    
   
    try{
    var req=fetch(`https://www.fruityvice.com/api/fruit/${fruitName}`)
    
        
    .then((res)=>{
      return res.json();
    })
    .then((data)=>{
      console.log(data)
    
   
      fruitContainer.innerHTML=`
          <div class="card text-center">
                <div class="card-header">
                    <h5>${data.name}</h5>
                    <h5>Genus:${data.genus}</h5>
                    <h5>Family:${data.family}</h5>
                </div>
                <div class="card-body">                             
                <p class="card-text">Calories:${data.nutritions.calories}</p>
                <p class="card-text">Carbohydrates:${data.nutritions.carbohydrates}</p>  
                <p class="card-text">Fat:${data.nutritions.fat}</p>   
                <p class="card-text">Protein:${data.nutritions.protein}</p> 
                <p class="card-text">Sugar:${data.nutritions.sugar}</p>                                    
                </div>`                                
    })  
    }
    
    catch(error){
      console.log(error)
    }
    }

