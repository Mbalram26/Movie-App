import {Component} from "react";


class MovieCard extends Component{
    constructor(){
        super();
        this.state ={
            title:"3 Idiots",
            plot:"Plot",
            price:"Rs.299",
            rating:8.5,
        }
    }
    addStars(){
        console.log("this.state: ", this.state);
    }
    render(){
        const {title,plot,price,rating}=this.state;
        return(
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="Poster" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpSXDUmo9VK0oFYIYrRUbQyPUEQIpQe_R_VO0D9OX0uTsVQsJZB8VtzZfgSRIK0a2bkeQ&usqp=CAU"/>
                    </div>
                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">{price}</div>
                        <div className="footer">
                        <div className="rating">{rating}</div>
                        <div className="star-dis">                    
                            <img className="str-btn" alt="decrease" src="https://cdn-icons-png.flaticon.com/128/10308/10308996.png" />
                                   
                            <img alt="star" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" className="stars" />

                            <img className="str-btn" alt="increase" src="https://cdn-icons-png.flaticon.com/128/4315/4315609.png" 
                            onClick={this.addStars}/> 
                            <span>0</span>
                        </div>
                        <button className="favourite-btn">fav</button>
                        <button className="cart-btn">add to cart</button>
                        <button className="buy-btn">buy</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;