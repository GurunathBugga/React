import React from 'react';
// import Table1 from './components/Table1';
// import Table2 from './components/Table2';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import CardList from './components/CardList';
// import Table3 from './components/Table3';
// import File3 from './components/File3';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <Sidebar />
      <CardList />
      <Footer /> 
      {/* <Table1/> */}
      {/* <Table2/>


      <Table3/>
      <File3/> */}




    </div>
  );
};

export default Home;

