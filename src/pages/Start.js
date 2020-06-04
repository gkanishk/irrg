import React, { Component } from "react";
import axios from "axios";
//API header
axios.defaults.headers.common["x-app-id"] = "b2fbadea";
axios.defaults.headers.common["x-app-key"] = "c580df96b4a2569239d5f0109e8fd514";
const url = "https://trackapi.nutritionix.com";

class Start extends Component {
    state={
        food:[],
    };
    getItem=()=>
    {
        const item=document.getElementById("itemInput").value;
        console.log(item);
        axios.get(`${url}/v2/search/instant?query=${item}`)
            .then(res=>{
                if(res.status===200) 
                this.setState({food:res.data});
                console.log(res.data)
                return res.data;

            }).then(res=>{
                // console.log(res)
                var cont=document.getElementById("showItem");
                // console.log("test   ="+res.common.food_name)
                // for(var i=0;i<res.length;i++)
                // {
                //     console.log(i)
                //     var div=document.createElement("div");
                //     div.innerHTML='Name'+res[i].food_name;
                //     console.log('data'+res[i].food_name)
                //     cont.appendChild(div+" ho");
                // }
                console.log(this.state.food.common)
                cont.innerHTML="";
                this.state.food.common.map((food)=>{
                    console.log(food);
                    cont.innerHTML+=`
                    <img src="${food.photo.thumb}"/>
                    <h2>${food.food_name}</h2>`;
                })
                
            }).catch(err=>{
                if(err.response!==200)
                console.log(err)
                // return `${err.response.data.message}`;
            });
    }

    
    render() {
// const searchFoods=search=>{
//     axios.get(`${url}/v2/instant?query=pizza`)
//     .then(res=>{
//         if(res.status===200) return res.data;
//     }).catch(err=>{
//         if(err.response!==200)
//         return `${err.response.data.message}`;
//     });
// };

        return (
            <div>data:
                <input id="itemInput" placeholder="enter item"/>
                <button onClick={this.getItem}>Done</button>
                <div id="showItem"></div>
            </div>
        )
    }
}

export default Start
