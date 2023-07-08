import "./Main.css";
import hello from "../../Assert/casual.jpg"
import Chart from "../charts/Chart";

const Main = ()=>{
    return(
        <main>
            <div className="main__cointainer">
                <div className="main__title">  
                    <img src={hello} alt="hello"/>
                    <div className="main__greeting">
                         <h1>Hello YOGESH</h1>
                         <p>Welcome to your admin dashboard</p>
                    </div>
                </div>
                
                <div className="main__cards">
                    <div className="card">
                        <i className="fa fa-user-o fa-2x text-lightblue"></i>
                        <div className="card__inner">
                            <p className="text-primary-p">Number of Stocks you buy</p>
                            <span className="font-bold text-title">578</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-calender fa-2x text-red"></i>
                        <div className="card__inner">
                            <p className="text-primary-p">Times of Transaction</p>
                            <span className="font-bold text-title">2455</span>
                        </div>
                    </div>


                    <div className="card">
                        <i className="fa fa-video fa-2x text-yellow"></i>
                        <div className="card__inner">
                            <p className="text-primary-p">Number of videos</p>
                            <span className="font-bold text-title">785</span>
                        </div>
                    </div>


                    <div className="card">
                        <i className="fa fa-thumbs-up fa-2x text-green"></i>
                        <div className="card__inner">
                            <p className="text-primary-p">Number of Likes</p>
                            <span className="font-bold text-title">75</span>
                        </div>
                    </div>

                </div>

                <div className="charts">
                    <div className="charts__left">
                        <div className="charts__left__title">
                            <div>
                                <h1>Daily reports</h1>
                                <p>Cupertino,California,USA</p>
                            </div>
                            <i className="fa fa-usd"></i>
                        </div>
                        <Chart/>
                    </div>


                    <div className="charts__right">
                        <div className="charts__right__title">
                            <div>
                                <h1>Status reports</h1>
                                <p>Cupertino,California,USA</p>
                            </div>
                            <i className="fa fa-use"></i>
                        </div>
                        
                        <div className="charts__right__cards">
                            <div className="card1">
                                <h1>Income</h1>
                                <p>$75,000</p>
                            </div>
                            
                            <div className="card2">
                                <h1>Sales</h1>
                                <p>$275,000</p>
                            </div>

                            <div className="card3">
                                <h1>User</h1>
                                <p>$7000</p>
                            </div>

                            <div className="card4">
                                <h1>Booking placed</h1>
                                <p>788</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;