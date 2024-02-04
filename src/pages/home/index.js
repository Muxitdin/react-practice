import React from "react";
import Header from "../../components/head/index.js"
import Sidebar from "../../components/sidebar/index.js"
import Main from "../../components/main/index.js"
import Banner from "../../components/main/banner/index.js";
import User from "../../components/main/userinfo/index.js";
import Post from "../../components/main/userposts/index.js";
import "./style.css"


const Home = () => {
    return (
        <div className="container">
            <Header />
            <Sidebar />
            <Main>
                <Banner />
                <User />
                <Post />
            </Main>
        </div >
    );
}

export default Home;