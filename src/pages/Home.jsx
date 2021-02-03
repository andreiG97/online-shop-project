import React from 'react'
import Layout from '../components/Layout'
import HomeCategory from '../components/HomeCategory';
import Products from '../utils/products.json';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            categories: []
        }
    }

    componentDidMount() {
       // console.log(Products);

        const producKeys = Object.keys(Products);
        //console.log(producKeys);
        this.setState({
            categories: producKeys
        });
    }


    render() {
       const { signOut, user } = this.props;
        return (
            //de ce paranteze patrate la category
                <Layout signOut={signOut} user={user}>
                    <div className="container-fluid container-min-max-width">
                        <div className="row">
                         {this.state.categories.map(
                            (category, index) => {
                               return (
                                  <HomeCategory
                                      key={index}
                                      routeParam={category}
                                      image={Products[category].image}
                                        title={Products[category].name}
                                        descript={Products[category].description}
                                    />
                                 );
                             } 
                         )}
                    </div>
                  </div>
               </Layout>
            
        )
    }
}

export default Home
